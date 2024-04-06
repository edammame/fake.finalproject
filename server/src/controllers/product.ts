import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { prisma } from "..";

export const productController = {
  //   async addProduct(req: Request, res: Response, next: NextFunction) {
  //     try {
  //       const { productName, description, price, image_url } = req.body;
  //       const newProduct: Prisma.ProductCreateInput = {
  //         productName,
  //         image_url,
  //         price,
  //         description,
  //       };
  //       await prisma.product.create({
  //         data: newProduct,
  //       });
  //       res.send({
  //         success: true,
  //         message: "data berhasil ditambahkan",
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },
};
