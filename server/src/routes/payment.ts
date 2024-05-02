import express from "express";
import { handlePaymentProofUpload } from "../controller/payment";

const router = express.Router();

router.post("/payment-proof", handlePaymentProofUpload);

export default router;
