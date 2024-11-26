import express, { Router } from "express";
import { categoryController } from "../controllers/categories";

export const route: Router = express.Router();
route.get("/", categoryController.getCategories);
route.get("/:id", categoryController.getCategoryId);
route.post("/", categoryController.addCategory);
route.patch("/:id", categoryController.updateCategory);
route.delete("/:id", categoryController.deleteCategory);
