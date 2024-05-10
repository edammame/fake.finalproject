import { Response, Request, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";
import { ReqUser } from "../middlewares/auth-middleware";

export const stockController = {
  async getStocks(req: Request, res: Response, next: NextFunction) {
    try {
      const stocks = await prisma.stock.findMany({});
      //tambahin where untuk warehouse id
      res.send({
        success: true,
        result: stocks,
        message: "get stock is success",
      });
    } catch (error) {
      next(error);
    }
  },
  async getStockId(req: Request, res: Response, next: NextFunction) {
    try {
      const stockId = await prisma.stock.findUnique({
        where: { id: Number(req.params.id) },
      });

      res.send({
        success: true,
        result: stockId,
        message: "get stock by id is success",
      });
    } catch (error) {
      next(error);
    }
  },
  async addstock(req: ReqUser, res: Response, next: NextFunction) {
    try {
      const { quantity } = req.body;
      const newStock: Prisma.StockCreateInput = {
        quantity,
        product: {
          connect: {
            id: Number(req.params.id),
          },
        },
        warehouse: {
          connect: {
            id: Number(req.params.id),
          },
        },
      };

      await prisma.stock.create({
        data: newStock,
      });
      res.send({
        success: true,
        message: "Adding New stock",
      });
    } catch (error) {
      next(error);
    }
  },
  async updateStock(req: Request, res: Response, next: NextFunction) {
    try {
      const { product, warehouse, quantity } = req.body;

      const editStock: Prisma.StockUpdateInput = {
        product,
        warehouse,
        quantity,
      };
      await prisma.stock.update({
        data: editStock,
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
  async deleteStock(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.stock.delete({
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
