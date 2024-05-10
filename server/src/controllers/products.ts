import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { prisma } from "..";

export const productsController = {
  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.query;
      // const whereCategory = {} as Prisma.CategoryWhereInput;
      // if (categories) whereCategory.id = Number(categories);
      // const product = product_name as Prisma.ProductWhereInput;
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
          // categories: true,
        },
        where: {
          name: {
            contains: String(name),
          },
          // categories: { ...whereCategory },
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
