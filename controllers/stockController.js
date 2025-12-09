import { db } from "../config/db.js";

export const getStock = async (req, res) => {
  const [rows] = await db.query(
    "SELECT stock.id, products.name, stock.quantity FROM stock JOIN products ON stock.product_id = products.id"
  );
  res.json(rows);
};

export const updateStock = async (req, res) => {
  const { product_id, adjustment } = req.body;
  await db.query(
    "UPDATE stock SET quantity = quantity + ? WHERE product_id = ?",
    [adjustment, product_id]
  );
  res.json({ message: "Stock updated" });
};
