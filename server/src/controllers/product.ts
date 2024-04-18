import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { prisma } from "..";

export const productController = {
  //   async addProduct(req: Request, res: Response, next: NextFunction) {
  //     try {
  //       await prisma.$transaction(async (prisma) => {
  //         const { productName, description, price, image_url, stock } = req.body;
  //         const newProduct: Prisma.ProductCreateInput = {
  //           productName: String(productName),
  //           image_url,
  //           description,
  //           price,
  //           user: {
  //             connect: {
  //               id: req.user.id,
  //             },
  //           },
  //           categories: {
  //             connect: {
  //               id: Number(categories),
  //             },
  //           },
  //         };
  //         const newProducts = await prisma.product.create({
  //           data: newProduct,
  //         });
  //         await prisma.stock.create({
  //           data: {
  //             product: {
  //               connect: {
  //                 id: newProducts.id,
  //               },
  //             },
  //             quantity: stock,
  //           } as Prisma.StockCreateInput,
  //         });
  //         res.send({
  //           success: true,
  //           message: "data berhasil ditambahkan",
  //         });
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },

  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { product_name } = req.query;
      const product = {
        product_name: {
          contains: String(product_name),
        },
      } as Prisma.ProductWhereInput;

      const products = await prisma.product.findMany({
        include: {
          user: {
            select: {
              id: true,
              email: true,
              first_name: true,
              last_name: true,
            },
          },
        },
        where: {
          ...product,
        },
      });

      res.send({
        success: true,
        result: products,
      });
    } catch (error) {
      next(error);
    }
  },
  async getProductsById(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await prisma.product.findUnique({
        include: {
          user: {
            select: {
              id: true,
              email: true,
              first_name: true,
              last_name: true,
            },
          },
        },
        where: {
          id: Number(req.params.id),
        },
      });

      res.send({
        success: true,
        result: products,
      });
      await prisma.product.findMany();
    } catch (error) {
      next(error);
    }
  },
};
