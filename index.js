import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import stockRoutes from "./routes/stockRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/orders", orderRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
