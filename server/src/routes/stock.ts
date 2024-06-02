import express, { Router } from "express";
import { stockController } from "../controllers/stock";

export const route: Router = express.Router();
route.get("/", stockController.getStocks);
route.get("/:id", stockController.getStockId);
route.post("/", stockController.addstock);
route.patch("/:id", stockController.updateStock);
route.delete("/:id", stockController.deleteStock);
