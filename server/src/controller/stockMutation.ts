import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createStockMutation = async (req: Request, res: Response) => {
  const { origin_id, destination_id, qty, status } = req.body;
  try {
    const mutation = await prisma.stockMutation.create({
      data: { origin_id, destination_id, qty, status },
    });
    res.json(mutation);
  } catch (error) {
    res.status(500).send({ message: "Error creating stock mutation", error });
  }
};

export const getStockMutations = async (req: Request, res: Response) => {
  try {
    const mutations = await prisma.stockMutation.findMany({});
    res.json(mutations);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error retrieving stock mutations", error });
  }
};

export const updateStockMutation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { qty, status } = req.body;
  try {
    const mutation = await prisma.stockMutation.update({
      where: { id: Number(id) },
      data: { qty, status },
    });
    res.json(mutation);
  } catch (error) {
    res.status(500).send({ message: "Error updating stock mutation", error });
  }
};

export const deleteStockMutation = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.stockMutation.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ message: "Error deleting stock mutation", error });
  }
};
