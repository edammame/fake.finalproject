/** @format */

import express, { Router } from "express";
import { warehouseController } from "../controllers/warehouse";
import { verifysuperAdmin, verifyUser } from "../middlewares/auth-middleware";

export const route: Router = express.Router();
route.get("/", warehouseController.getWarehouses);
route.get("/:id", warehouseController.getwarehouseById);
route.patch(
  "/:id",
  verifyUser,
  verifysuperAdmin,
  warehouseController.addWarehouse
);
route.post(
  "/",
  verifyUser,
  verifysuperAdmin,
  warehouseController.editWarehouse
);
route.delete(
  "/:id",
  verifyUser,
  verifysuperAdmin,
  warehouseController.deleteWarehouse
);

route.post(
  "/",
  verifyUser,
  verifysuperAdmin,
  warehouseController.assignWarehouseAdmin
);
