import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import multer from "multer";
import path from "path";

const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, "proof_payment-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(null, false);
    }
    cb(null, true);
  },
}).single("paymentProof");

export const handlePaymentProofUpload = async (req: Request, res: Response) => {
  upload(req, res, async (error) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: "Failed to upload proof of payment",
        error: error.message,
      });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ success: false, message: "No file uploaded" });
      } else {
        const { orderId } = req.body;
        const paymentProofUrl = req.file.path;

        try {
          const order = await prisma.orderProduct.update({
            where: { id: Number(orderId) },
            data: {
              payment_img: paymentProofUrl,
              status_order: "payment_confirmation",
            },
          });

          res.json({ success: true, order });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: "Failed to update the order with payment proof",
            error: error.message,
          });
        }
      }
    }
  });
};
