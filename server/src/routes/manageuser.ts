/** @format */

import express, { Router } from "express";
import { manageUserController } from "../controllers/manageusers";
import { verifyAdmin, verifyUser } from "../middlewares/auth-middleware";

export const route: Router = express.Router();
route.get("/", manageUserController.getAllUsers);
route.get("/:id", manageUserController.getUserById);
route.patch("/:id", verifyUser, verifyAdmin, manageUserController.updateUser);
route.post("/", verifyUser, verifyAdmin, manageUserController.createUser);
route.delete("/:id", verifyUser, verifyAdmin, manageUserController.deleteUser);
