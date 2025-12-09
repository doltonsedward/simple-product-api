import { db } from "../config/db.js";

export const getProducts = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM products");
  res.json(rows);
};

export const addProduct = async (req, res) => {
  const { name, price, description, image_url } = req.body;
  await db.query(
    "INSERT INTO products (name, price, description, image_url) VALUES (?, ?, ?, ?)",
    [name, price, description, image_url]
  );
  res.json({ message: "Product added" });
};
