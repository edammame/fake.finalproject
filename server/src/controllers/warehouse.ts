import { Response, Request, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";
import { ReqUser } from "../middlewares/auth-middleware";

export const warehouseController = {
  async getWarehouses(req: Request, res: Response, next: NextFunction) {
    try {
      const { city_name, province_name } = req.query;
      const warehouse = await prisma.warehouse.findMany({
        include: {
          city: {
            select: {
              city_name: true,
            },
          },
          user: {
            select: {
              id: true,
              email: true,
              first_name: true,
              last_name: true,
            },
          },
          province: {
            select: {
              province_name: true,
            },
          },
        },
        where: {
          AND: [
            {
              city: {
                city_name: {
                  contains: String(city_name).toLowerCase(),
                },
              },
            },
            {
              province: {
                province_name: {
                  contains: String(province_name).toLocaleLowerCase(),
                },
              },
            },
          ],
        },
      });
      res.send({
        success: true,
        result: warehouse,
        message: "Get Warehouse is success",
      });
    } catch (error) {
      next(error);
    }
  },

  async getwarehouseById(req: Request, res: Response, next: NextFunction) {
    try {
      const warehouse = await prisma.warehouse.findUnique({
        include: {
          city: {
            select: {
              city_name: true,
            },
          },
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
        result: warehouse,
        message: "Get Warehouse by Id is success",
      });
    } catch (error) {
      next(error);
    }
  },

  async addWarehouse(req: ReqUser, res: Response, next: NextFunction) {
    try {
      const { warehouse_name, location, city, province, longtitude, latitude } =
        req.body;
      const newWarehouse: Prisma.WarehouseCreateInput = {
        warehouse_name,
        location,
        city,
        province,
        longtitude,
        latitude,
        user: {
          connect: {
            id: req.user?.id,
          },
        },
      };

      await prisma.warehouse.create({
        data: newWarehouse,
      });
      res.send({
        success: true,
        message: "Adding New Warehouse",
      });
    } catch (error) {
      next(error);
    }
  },

  async editwarehouse(req: Request, res: Response, next: NextFunction) {
    try {
      const { warehouse_name, longtitude, latitude, location, city } = req.body;

      const editwarehouse: Prisma.WarehouseUpdateInput = {
        warehouse_name,
        longtitude,
        latitude,
        location,
        user: {
          connect: {
            id: Number(req.params.id),
          },
        },
        city: {
          connect: {
            id: Number(city),
          },
        },
      };

      await prisma.warehouse.update({
        data: editwarehouse,
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
  // async deleteWarehouse(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const warehouseid 
  //     await prisma.warehouse.update({
  //       data: warehouseid
  //       where: { 
          
  //       },
  //     });
  //     res.send({
  //       success: true,
  //       message: "SOFT DELETED",
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // },
};
