import express, { Application, Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import { config } from "dotenv";
import { routes } from "./routes";
// import { routes } from "./routes";

config();

export const prisma = new PrismaClient();
export const secretKey = String(process.env.secretKey);
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  "/public/event",
  express.static(`${__dirname}/public/images/product_images`)
);

const PORT = process.env.PORT;

//routes
app.use("/products", routes.productRoutes);
app.use("/categories", routes.categoryRoutes);
app.use("/stocks", routes.stockRoutes);
app.use("/warehouses", routes.warehouseRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: error.message || "internal server error" });
});

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("page not found");
});

app.listen(PORT, () => {
  console.log("api is running on port", PORT);
});
