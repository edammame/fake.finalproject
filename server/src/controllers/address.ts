import { Request, Response, NextFunction } from "express";

export const addressController = {
  async getAddresses(req: Request, res: Response, next: NextFunction) {
    try {
      const {} = req.query;
    } catch (error) {}
  },
};
