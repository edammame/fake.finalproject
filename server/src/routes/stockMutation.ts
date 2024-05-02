import express from "express";
import {
  createStockMutation,
  deleteStockMutation,
  getStockMutations,
  updateStockMutation,
} from "../controller/stockMutation";
import { isAdmin, isAuth } from "../middleware/auth";

const router = express.Router();

router.post("/", isAuth, isAdmin, createStockMutation);
router.get("/", isAuth, isAdmin, getStockMutations);
router.put("/:id", isAuth, isAdmin, updateStockMutation);
router.delete("/:id", isAuth, isAdmin, deleteStockMutation);

export default router;
