import express, { Router } from "express";
import { warehouseController } from "../controllers/warehouses";

export const route: Router = express.Router();
route.get("/", warehouseController.getWarehouses);
route.get("/:id", warehouseController.getwarehouseById);
route.patch("/:id", warehouseController.editwarehouse);
