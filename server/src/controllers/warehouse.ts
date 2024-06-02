import { Request, Response, NextFunction } from "express";
import { prisma } from ".."; // Ensure this path aligns with your Prisma client setup
import { Prisma } from "@prisma/client";
import { ReqUser } from "../middlewares/auth-middleware";
import { getGeocodingData } from "../services/page";

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
      const { warehouse_name, location, city_id, province_id } = req.body;
      const geoData = await getGeocodingData(location, city_id, province_id);

      const newWarehouse: Prisma.WarehouseCreateInput = {
        warehouse_name,
        location,
        longitude: geoData.longitude,
        latitude: geoData.latitude,
        user: {
          connect: {
            id: req.user?.id,
          },
        },
        city: {
          connect: {
            id: Number(city_id),
          },
        },
        province: {
          connect: {
            id: Number(province_id),
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

  async editWarehouse(req: Request, res: Response, next: NextFunction) {
    try {
      const { warehouse_name, location, city_id, province_id } = req.body;
      const geoData = await getGeocodingData(location, city_id, province_id);

      const editWarehouse: Prisma.WarehouseUpdateInput = {
        warehouse_name,
        location,
        longitude: geoData.longitude,
        latitude: geoData.latitude,
        user: {
          connect: {
            id: Number(req.params.id),
          },
        },
        city: {
          connect: {
            id: Number(city_id),
          },
        },
        province: {
          connect: {
            id: Number(province_id),
          },
        },
      };

      await prisma.warehouse.update({
        data: editWarehouse,
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
  async deleteWarehouse(req: Request, res: Response, next: NextFunction) {
    try {
      const data: Prisma.WarehouseUncheckedUpdateInput = {
        deleted_at: new Date(),
      };
      await prisma.warehouse.update({
        data: data,
        where: { id: Number(req.params.id) },
      });
      res.send({
        success: true,
        message: "SOFT DELETED",
      });
    } catch (error) {
      next(error);
    }
  },

  async assignWarehouseAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const { warehouse_id, user_id } = req.body;

      await prisma.warehouse.update({
        where: { id: Number(warehouse_id) },
        data: {
          user: {
            connect: { id: Number(user_id) },
          },
        },
      });

      res.send({
        success: true,
        message: "Warehouse admin assigned successfully",
      });
    } catch (error) {
      next(error);
    }
  },
};
