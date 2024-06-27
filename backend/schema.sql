CREATE TABLE men (
	id SERIAL PRIMARY KEY,
	name VARCHAR(55) NOT NULL,
	description TEXT,
	price REAL NOT NULL,
	category VARCHAR(55),
	image_url TEXT NOT NULL,
	rating INT NOT NULL,
	reviews INT,
	stock_quantity INT
);



INSERT INTO men (name, description, price, category, image_url, rating, stock_quantity)
VALUES
('Stylish Jacket', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
19.99, 'men', '/public/menClothing/asianMan.jpg', 5, 10),
('Stylish Jeans', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
29.98, 'men', '/public/menClothing/asianMan.jpg', 5, 16),
('Black Flannel', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
37.97, 'men', '/public/menClothing/blackMan.jpg', 5, 12),
('Brown Flannel', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
42.91, 'men', '/public/menClothing/handsome.jpg', 5, 21),
('Lightweight White Jacket', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
31.12, 'men', '/public/menClothing/idk.webp', 5, 20),
('Green Pants', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
12.77, 'men', '/public/menClothing/idk.webp', 5, 34),
('Emerald Flannel', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
49.97, 'men', '/public/menClothing/idk2.webp', 5, 11),
('White Jeans', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
20, 'men', '/public/menClothing/idk2.webp', 5, 15),
('Minimal Sneakers', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
59.98, 'men', '/public/menClothing/idk2.webp', 5, 8),
('Robust Brown Jacket', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
69.69, 'men', '/public/menClothing/matureMan.jpg', 5, 14),
('Black Jeans', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
21, 'men', '/public/menClothing/whiteMan.jpg', 5, 30),
('Grey Hoodie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
19.99, 'men', '/public/menClothing/whiteMan.jpg', 5, 23),
('Black Check Jacket', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
36.99, 'men', '/public/menClothing/whiteMan.jpg', 5, 10),
('Minimal Grey Sneakers', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
49.99, 'men', '/public/menClothing/whiteMan.jpg', 5, 17),
('Black Sneakers', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
79.97, 'men', '/public/menClothing/asianMan.jpg', 5, 5)


CREATE TABLE accessories (
	id SERIAL PRIMARY KEY,
	name VARCHAR(55) NOT NULL,
	description TEXT,
	price REAL NOT NULL,
	category VARCHAR(55),
	image_url TEXT NOT NULL,
	rating INT NOT NULL,
	reviews INT,
	stock_quantity INT
);

INSERT INTO accessories (name, description, price, category, image_url, rating, stock_quantity)
VALUES
('Fedora Blue', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
19.99, 'men', '/public/menAccessories/FedoraBlue.jpg', 5, 10),
('Fedora Brown', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
29.98, 'men', '/public/menAccessories/FedoraBrown.jpg', 5, 16),
('Fedora Black Curved', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
37.97, 'men', '/public/menAccessories/FedoraCurvedBlack.jpg', 5, 12),
('Fedora Blue Curved', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
42.91, 'men', '/public/menAccessories/FedoraCruvedBlue.jpg', 5, 21),
('Fedora Red Curved', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
31.12, 'men', '/public/menAccessories/FedoraCurvedRed.jpg', 5, 20),
('Fedora Vintage Curved', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
12.77, 'men', '/public/menAccessories/FedoraCurvedVintage.jpg', 5, 34),
('Fedora Cyan', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
49.97, 'men', '/public/menAccessories/FedoraCyan.jpg', 5, 11),
('Fedora Lime', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
20, 'men', '/public/menAccessories/FedoraLime.jpg', 5, 15),
('Fedora Pink', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
59.98, 'men', '/public/menAccessories/FedoraPink.jpg', 5, 8),
('Fedora Red', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
69.69, 'men', '/public/menAccessories/FedoraRed.jpg.jpg', 5, 14),
('Fedora White', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit augue, molestie a sollicitudin bibendum, bibendum nec velit.',
21, 'men', '/public/menAccessories/FedoraWhite.jpg', 5, 30)

CREATE TABLE contact (
	id SERIAL PRIMARY KEY,
	email VARCHAR(55) NOT NULL,
	subject TEXT NOT NULL,
	message TEXT
);

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	email VARCHAR(55) NOT NULL UNIQUE,
	name VARCHAR(55) NOT NULL,
	password VARCHAR(255) NOT NULL,
	billing_address TEXT,
	shipping_address TEXT,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
	user_id INT NOT NULL,
	order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	status VARCHAR(55) DEFAULT 'Pending',
	total_price REAL NOT NULL,
	billing_address TEXT,
	shipping_address TEXT,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
	id SERIAL PRIMARY KEY,
	order_id INT NOT NULL,
	product_id INT NOT NULL,
	product_type VARCHAR(55) NOT NULL,
	quantity INT NOT NULL DEFAULT 1,
	price REAL NOT NULL,
	FOREIGN KEY (order_id) REFERENCES orders(id)
);

ALTER TABLE orders
ADD billing_zip VARCHAR(55);