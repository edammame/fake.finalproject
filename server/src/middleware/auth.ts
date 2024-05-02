import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  userId: number;
  iat: number;
  exp: number;
}

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({ message: "Token tidak ditemukan." });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).send({ message: "Token tidak ditemukan." });
    }
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fake"
    ) as TokenPayload;
    (req as any).user = { id: decoded.userId };
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ message: "Token tidak valid atau telah kadaluarsa." });
  }
};
