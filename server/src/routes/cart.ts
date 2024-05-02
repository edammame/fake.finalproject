import express, { Router } from "express";
import {
  addToCart,
  deleteFromCart,
  updateCartItem,
  createOrder,
} from "../controller/cart";
import { isAuth } from "../middleware/auth";

const route: Router = express.Router();

route.post("/add-to-cart", addToCart);
route.patch("/update-cart", updateCartItem);
route.delete("/delete-cart", deleteFromCart);
route.post("/create-order", isAuth, createOrder);

export default route;
