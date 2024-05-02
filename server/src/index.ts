import express, { Application, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { routes } from "./routes";
import paymentRoutes from "./routes/payment";
import stockMutationRoutes from "./routes/stockMutation";

export const prisma = new PrismaClient();
export const secretKey = String(process.env.secretKey);
const app: Application = express();

app.use(express.json()); // middleware

const PORT = process.env.PORT;

// Routes
app.use("/api", routes.cartRoutes);
app.use("/api", paymentRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: error.message || "internal server error" });
}); //error handler

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("page not found"); //page not found handler
});

app.use("/api/stock-mutations", stockMutationRoutes); // stock mutations admin routes

app.listen(PORT, () => {
  console.log("api is running on port", PORT);
});
