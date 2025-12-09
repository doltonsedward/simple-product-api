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

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image_url } = req.body;
  await db.query(
    "UPDATE products SET name = ?, price = ?, description = ?, image_url = ? WHERE id = ?",
    [name, price, description, image_url, id]
  );
  res.json({ message: "Product updated" });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM products WHERE id = ?", [id]);
  // Optional: Hapus stock & orders terkait kalau perlu, tapi simple dulu
  res.json({ message: "Product deleted" });
};
