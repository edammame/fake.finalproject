import { Response, Request, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";
import { ReqUser } from "../middlewares/auth-middleware";

export const categoryController = {
  async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await prisma.category.findMany({});
      res.send({
        success: true,
        result: categories,
        message: "get category is success",
      });
    } catch (error) {
      next(error);
    }
  },
  async getCategoryId(req: Request, res: Response, next: NextFunction) {
    try {
      const categoryId = await prisma.category.findUnique({
        where: { id: Number(req.params.id) },
      });

      res.send({
        success: true,
        result: categoryId,
        message: "get category by id is success",
      });
    } catch (error) {
      next(error);
    }
  },
  async addCategory(req: ReqUser, res: Response, next: NextFunction) {
    try {
      const { category_name } = req.body;
      const newCategory: Prisma.CategoryCreateInput = {
        category_name,
      };

      await prisma.category.create({
        data: newCategory,
      });
      res.send({
        success: true,
        message: "Adding New Category",
      });
    } catch (error) {
      next(error);
    }
  },
  async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { category_name } = req.body;

      const editCategory: Prisma.CategoryUpdateInput = {
        category_name,
      };
      await prisma.category.update({
        data: editCategory,
        where: { id: Number(req.params.id) },
      });
      res.send({
        success: true,
        message: "Edited",
      });
    } catch (error) {
      next(error);
    }
  },
  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.category.delete({
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
