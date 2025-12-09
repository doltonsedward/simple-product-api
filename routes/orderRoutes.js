import express from "express";
import {
  getOrders,
  createOrder,
  cancelOrder,
} from "../controllers/orderController.js";
const router = express.Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.post("/cancel", cancelOrder);

export default router;
