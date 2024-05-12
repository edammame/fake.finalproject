import express, { Router } from "express";
import { productController } from "../controllers/product";
import { fileUploader } from "../middlewares/multer";
import { verifyUser } from "../middlewares/auth-middleware";

export const route: Router = express.Router();
route.get("/", productController.getProducts);
route.get("/:id", productController.getProductById);
route.post(
  "/",
  verifyUser,
  fileUploader({
    destinationFolder: "product_images",
    prefix: "PRODUCT",
    filetype: "image",
  }).single("image"),
  productController.addProduct
);
route.patch(
  "/:id",
  fileUploader({
    destinationFolder: "product_images",
    prefix: "PRODUCT",
    filetype: "image",
  }).single("image"),
  productController.editProduct
);
route.delete("/:id", productController.deleteProduct);
