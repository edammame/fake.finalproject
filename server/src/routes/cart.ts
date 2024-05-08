import express from "express";
import {
  addToCart,
  updateCartItem,
  deleteFromCart,
  createOrder,
} from "../controller/cart";

const router = express.Router();

router.post("/add", addToCart);
router.put("/update", updateCartItem);
router.delete("/delete", deleteFromCart);
router.post("/order", createOrder);

export default router;
