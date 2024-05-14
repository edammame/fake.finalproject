import { Request, Response, NextFunction } from "express";
import { prisma } from ".."; // Ensure this path aligns with your Prisma client setup
import { Prisma } from "@prisma/client";

export const warehouseController = {
  // // Get all warehouses
  // async getAllWarehouses(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<void> {
  //   try {
  //     const warehouses = await prisma.warehouse.findMany({
  //       include: {
  //         user: true, // Includes user details for warehouse admin
  //         city: true,
  //         province: true,
  //       },
  //     });
  //     res.status(200).send(warehouses);
  //   } catch (error) {
  //     console.error("Error fetching warehouses:", error);
  //     res.status(500).send("Failed to fetch warehouses");
  //   }
  // },
  // // Get a single warehouse by ID
  // async getWarehouseById(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<void> {
  //   try {
  //     const warehouse = await prisma.warehouse.findUnique({
  //       where: { id: Number(req.params.id) },
  //       include: {
  //         user: true,
  //         city: true,
  //         province: true,
  //       },
  //     });
  //     if (warehouse) {
  //       res.status(200).send(warehouse);
  //     } else {
  //       res.status(404).send("Warehouse not found");
  //     }
  //   } catch (error) {
  //     console.error("Error getting warehouse by ID:", error);
  //     res.status(500).send("Error retrieving warehouse");
  //   }
  // },
  // // Create a new warehouse
  // async createWarehouse(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<void> {
  //   try {
  //     const {
  //       warehouse_name,
  //       user_id,
  //       city_id,
  //       province_id,
  //       longtitude,
  //       latitude,
  //       location,
  //     } = req.body;
  //     const newWarehouse = await prisma.warehouse.create({
  //       data: {
  //         warehouse_name,
  //         user: { connect: { id: user_id } },
  //         city: { connect: { id: city_id } },
  //         province: { connect: { id: province_id } },
  //         longtitude,
  //         latitude,
  //         location,
  //       },
  //     });
  //     res.status(201).send("Warehouse created successfully");
  //   } catch (error) {
  //     console.error("Error creating warehouse:", error);
  //     res.status(500).send("Failed to create warehouse");
  //   }
  // },
  // // Update an existing warehouse
  // async updateWarehouse(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<void> {
  //   try {
  //     const {
  //       warehouse_name,
  //       user_id,
  //       city_id,
  //       province_id,
  //       longtitude,
  //       latitude,
  //       location,
  //     } = req.body;
  //     const updatedWarehouse = await prisma.warehouse.update({
  //       where: { id: Number(req.params.id) },
  //       data: {
  //         warehouse_name,
  //         user: { connect: { id: user_id } },
  //         city: { connect: { id: city_id } },
  //         province: { connect: { id: province_id } },
  //         longtitude,
  //         latitude,
  //         location,
  //       },
  //     });
  //     res.status(200).send("Warehouse updated successfully");
  //   } catch (error) {
  //     console.error("Error updating warehouse:", error);
  //     res.status(500).send("Failed to update warehouse");
  //   }
  // },
  // // Delete a warehouse
  // async deleteWarehouse(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<void> {
  //   try {
  //     await prisma.warehouse.delete({
  //       where: { id: Number(req.params.id) },
  //     });
  //     res.status(200).send("Warehouse deleted successfully");
  //   } catch (error) {
  //     console.error("Error deleting warehouse:", error);
  //     res.status(500).send("Failed to delete warehouse");
  //   }
  // },

  async assignWarehouseAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const { warehouse_id, user_id } = req.body; // IDs passed in from the client
      const updatedWarehouse = await prisma.warehouse.update({
        where: { id: warehouse_id },
        data: {
          user: {
            connect: { id: user_id }, // Connecting a user to the warehouse
          },
        },
      });
      res.status(200).send("Warehouse admin assigned successfully");
    } catch (error) {
      console.error("Error assigning warehouse admin:", error);
      res.status(500).send("Failed to assign warehouse admin");
    }
  },
};
