import { db } from "../config/db.js";

export const getStock = async (req, res) => {
  const [rows] = await db.query(
    "SELECT stock.id, products.name as product_name, stock.quantity FROM stock JOIN products ON stock.product_id = products.id"
  );
  res.json(rows);
};

export const updateStock = async (req, res) => {
  const { product_id, quantity } = req.body; // Ubah dari adjustment ke quantity langsung
  await db.query("UPDATE stock SET quantity = ? WHERE product_id = ?", [
    quantity,
    product_id,
  ]);
  res.json({ message: "Stock updated" });
};
