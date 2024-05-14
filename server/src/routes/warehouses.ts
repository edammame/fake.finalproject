/** @format */

import express, { Router } from "express";
import { warehouseController } from "../controllers/warehouses";
import { verifysuperAdmin, verifyUser } from "../middlewares/auth-middleware";

export const route: Router = express.Router();
route.get("/", warehouseController.getAllWarehouses);
route.get("/:id", warehouseController.getWarehouseById);
route.patch(
  "/:id",
  verifyUser,
  verifysuperAdmin,
  warehouseController.updateWarehouse
);
route.post(
  "/",
  verifyUser,
  verifysuperAdmin,
  warehouseController.createWarehouse
);
route.delete(
  "/:id",
  verifyUser,
  verifysuperAdmin,
  warehouseController.deleteWarehouse
);
