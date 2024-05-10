import express, { Router } from "express";
import { productController } from "../controllers/product";
import { fileUploader } from "../middlewares/multer";

export const route: Router = express.Router();
route.get("/", productController.getProducts);
route.get("/:id", productController.getProductById);
route.post(
  "/",
  fileUploader({
    destinationFolder: "/public/images",
    prefix: "PRODUCT",
    filetype: "image",
  }).single("image"),
  productController.addProduct
);
route.patch(
  "/:id",
  fileUploader({
    destinationFolder: "/public/images",
    prefix: "PRODUCT",
    filetype: "image",
  }).single("image"),
  productController.editProduct
);
route.delete("/:id", productController.deleteProduct);
