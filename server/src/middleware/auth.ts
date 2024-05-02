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
      return res.status(401).send({ message: "Token not found" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).send({ message: "Token not found" });
    }
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fake"
    ) as TokenPayload;
    (req as any).user = { id: decoded.userId };
    next();
  } catch (error) {
    return res.status(401).send({ message: "Token is invalid or has expired" });
  }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if ((req as any).user.role === "admin") {
    next();
  } else {
    return res.status(403).send({ message: "You are not an admin" });
  }
};
