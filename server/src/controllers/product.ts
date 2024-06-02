import { Response, Request, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";
import { ReqUser } from "../middlewares/auth-middleware";

export const productController = {
  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { product_name } = req.query;
      const whereCategory = {} as Prisma.CategoryWhereInput;

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
          categories: true,
        },
        where: {
          product_name: {
            contains: String(product_name).toLowerCase(),
          },
          categories: { ...whereCategory },
        },
      });

      res.send({
        success: true,
        result: products,
        message: "Get Product is success",
      });
    } catch (error) {
      next(error);
    }
  },
  async getProductById(req: Request, res: Response, next: NextFunction) {
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
        message: "Get Product by Id is success",
      });
      await prisma.product.findMany();
    } catch (error) {
      next(error);
    }
  },
  async addProduct(req: ReqUser, res: Response, next: NextFunction) {
    try {
      const { product_name, price, categories, description } = req.body;

      const newProduct: Prisma.ProductCreateInput = {
        product_name,
        image_url: String(req.file?.filename),
        price,
        description,
        categories: {
          connect: {
            id: Number(categories),
          },
        },
        user: {
          connect: {
            id: req.user?.id,
          },
        },
      };

      await prisma.product.create({
        data: newProduct,
      });

      res.send({
        success: true,
        message: "Adding New Product",
      });
    } catch (error) {
      next(error);
    }
  },
  async editProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { product_name, image_url, price, description } = req.body;

      const editProduct: Prisma.ProductUpdateInput = {
        product_name,
        image_url,
        price,
        description,
        user: {
          connect: {
            id: Number(req.params.id),
          },
        },
      };

      if (req.file?.filename)
        editProduct.image_url = String(req.file?.filename);

      await prisma.product.update({
        data: editProduct,
        where: {
          id: Number(req.params.id),
        },
      });

      res.send({
        success: true,
        message: "Edited",
      });
    } catch (error) {
      next(error);
    }
  },
  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.product.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      res.send({
        success: true,
        message: "DELETED",
      });
    } catch (error) {
      next(error);
    }
  },
};
