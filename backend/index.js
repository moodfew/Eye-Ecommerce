/* eslint-disable no-undef */
import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcryptjs";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { writeFile, readFile } from "fs/promises";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());

const db = new pg.Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT || 5432,
});

db.connect();

const fileName = "token.txt";

async function writeTokenToFile(token) {
  try {
    await writeFile(fileName, token);
    console.log(`Token has been written to "${fileName}" successfully.`);
  } catch (error) {
    console.error(`Error writing token to "${fileName}":`, error);
  }
}

app.post(
  "/api/register",
  [
    check("email", "Please include a valid email").isEmail(),
    check("name", "Name is required").not().isEmpty(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, password } = req.body;

    try {
      let user = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      if (user.rows.length > 0) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      await db.query(
        "INSERT INTO users (email, name, password) VALUES ($1, $2, $3)",
        [email, name, hashedPassword]
      );

      res.status(201).json({ msg: "User registered successfully" });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

app.post(
  "/api/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is Required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      if (user.rows.length === 0) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.rows[0].password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      const payload = {
        user: {
          id: user.rows[0].id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) throw err;
          res.json({ token }); //
          writeTokenToFile(token);
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

app.get("/api/token", async (req, res) => {
  try {
    const token = await readFile("token.txt", "utf8");
    res.json({ token });
  } catch (error) {
    console.error("Error reading token:", error);
    res.status(500).json({ error: "Failed to read token" });
  }
});

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json("No token, authorization denied");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(201).json({ msg: "Token is invalid" });
  }
};

app.post("/api/order", auth, async (req, res) => {
  const userId = req.user.id;
  console.log(userId);
  const {
    billingAddress,
    shippingAddress,
    billingZip,
    totalPrice,
    status,
    orderItems,
  } = req.body;

  try {
    await db.query("BEGIN");

    const orderResult = await db.query(
      "INSERT INTO orders (user_id, status, total_price, billing_address, shipping_address, billing_zip) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
      [userId, status, totalPrice, billingAddress, shippingAddress, billingZip]
    );

    const orderId = orderResult.rows[0].id;

    const orderItemsPromises = orderItems.map((item) => {
      return db.query(
        "INSERT INTO order_items (order_id, product_id, product_type, quantity, price) VALUES ($1, $2, $3, $4, $5)",
        [orderId, item.productId, item.productType, 1, totalPrice]
      );
    });

    await Promise.all(orderItemsPromises);

    await db.query("COMMIT");

    res.status(201).json({ orderId });
  } catch (error) {
    await db.query("ROLLBACK");
    console.log("Error placing order", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Example route to fetch order history
app.get("/api/orders", auth, async (req, res) => {
  const userId = req.user.id;

  try {
    const orders = await db.query(
      "SELECT * FROM orders WHERE user_id = $1 ORDER BY id DESC",
      [userId]
    );
    res.json(orders.rows);
  } catch (error) {
    console.log("Error fetching order history", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/search", async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "No search query provided" });
  }

  try {
    const searchQuery = `
      SELECT id, name, description, price, category, image_url, rating, reviews, stock_quantity FROM men
      WHERE name ILIKE $1 OR description ILIKE $1
      UNION
      SELECT id, name, description, price, category, image_url, rating, reviews, stock_quantity FROM accessories
      WHERE name ILIKE $1 OR description ILIKE $1
    `;
    const values = [`%${q}%`];
    const result = await db.query(searchQuery, values);
    res.json(result.rows);
  } catch (error) {
    console.log("Error executing search query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/protected", auth, (req, res) => {
  res.json({ msg: "Welcome to the protected route", user: req.user });
});

async function getMen() {
  try {
    const res = await db.query("SELECT * FROM men ORDER BY id");
    return res.rows;
  } catch (err) {
    console.error("Error executing query", err.stack);
    return [];
  }
}

async function getAccessories() {
  try {
    const res = await db.query("SELECT * FROM accessories ORDER BY id");
    return res.rows;
  } catch (err) {
    console.log("Error executing query", err.stack);
    return [];
  }
}

async function insertContact(contact) {
  try {
    const res = await db.query(
      "INSERT INTO contact (email, subject, message) VALUES ($1, $2, $3) RETURNING *",
      [contact.email, contact.subject, contact.message]
    );
    return res.rows;
  } catch (err) {
    console.log("Error inserting contact information", err.stack);
    return err;
  }
}

app.get("/men", async (req, res) => {
  try {
    const men = await getMen();
    res.json(men);
  } catch (error) {
    console.error("Error handling /men request", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/accessories", async (req, res) => {
  try {
    const accessories = await getAccessories();
    res.json(accessories);
  } catch (error) {
    console.error("Error handling /accessories request", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/submit", async (req, res) => {
  if (req.body) {
    console.log(req.body);
    res.status(200).send("Success");
    await insertContact(req.body);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
