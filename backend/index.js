/* eslint-disable no-undef */
import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());

const db = new pg.Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT || 5432,
});

db.connect();

async function getMen() {
  try {
    const res = await db.query("SELECT * FROM men ORDER BY id");
    return res.rows;
  } catch (err) {
    console.error("Error executing query", err.stack);
    return [];
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
