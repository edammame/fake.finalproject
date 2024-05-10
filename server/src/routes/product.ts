import express, { Router } from "express";
import { productsController } from "../controllers/products";

export const route: Router = express.Router();

route.get("/", productsController.getProducts);
route.get("/:id", productsController.getProductsById);
