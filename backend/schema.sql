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

-- CREATE TABLE men (
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(55) NOT NULL,
-- 	description TEXT,
-- 	price REAL NOT NULL,
-- 	category VARCHAR(55),
-- 	image_url TEXT NOT NULL,
-- 	rating INT NOT NULL,
-- 	reviews INT,
-- 	stock_quantity INT
-- );

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