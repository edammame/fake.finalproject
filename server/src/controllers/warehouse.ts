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
      const { warehouse_name, location, city, province } = req.body;

      // Fetch the geocoding data for the given location
      const { latitude, longitude } = await getGeocodingData(location);

      const newWarehouse = {
        warehouse_name,
        location,
        city,
        province,
        longtitude: longitude.toString(),
        latitude: latitude.toString(),
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

  async editWarehouse(req: Request, res: Response, next: NextFunction) {
    try {
      const { warehouse_name, longtitude, latitude, location, city } = req.body;

      // Fetch the geocoding data for the given location if the location has changed
      const { latitude: newLatitude, longitude: newLongitude } =
        await getGeocodingData(location);

      const editWarehouse = {
        warehouse_name,
        longtitude: newLongitude.toString(),
        latitude: newLatitude.toString(),
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
        delete_at: new Date(),
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
      const { warehouse_id, admin_id } = req.body;

      await prisma.warehouse.update({
        where: { id: Number(warehouse_id) },
        data: {
          user: {
            connect: { id: Number(admin_id) },
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
