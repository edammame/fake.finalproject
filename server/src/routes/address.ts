import express, { Router } from "express";
import { addressController } from "../controllers/address";

export const route: Router = express.Router();

route.get("/", addressController.getAddresses);
route.get("/:id", addressController.getAddresses);
route.patch("/:id");
route.post("/");
route.delete("/:id");
