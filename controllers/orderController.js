import { db } from "../config/db.js";

export const getOrders = async (req, res) => {
  const [rows] = await db.query(
    "SELECT orders.*, products.name FROM orders JOIN products ON orders.product_id = products.id ORDER BY created_at DESC"
  );
  res.json(rows);
};

export const createOrder = async (req, res) => {
  const { product_id, qty } = req.body;
  const [[product]] = await db.query(
    "SELECT price FROM products WHERE id = ?",
    [product_id]
  );

  const totalPrice = product.price * qty;

  await db.query(
    'INSERT INTO orders (product_id, qty, total_price, status) VALUES (?, ?, ?, "success")',
    [product_id, qty, totalPrice]
  );

  await db.query(
    "UPDATE stock SET quantity = quantity - ? WHERE product_id = ?",
    [qty, product_id]
  );

  res.json({ message: "Order created" });
};

export const cancelOrder = async (req, res) => {
  const { order_id } = req.body;
  const [[order]] = await db.query("SELECT * FROM orders WHERE id = ?", [
    order_id,
  ]);

  if (!order) return res.status(404).json({ message: "Order not found" });

  await db.query('UPDATE orders SET status = "canceled" WHERE id = ?', [
    order_id,
  ]);

  await db.query(
    "UPDATE stock SET quantity = quantity + ? WHERE product_id = ?",
    [order.qty, order.product_id]
  );

  res.json({ message: "Order canceled and stock restored" });
};
