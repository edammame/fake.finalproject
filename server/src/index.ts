import express, { Application, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { routes } from "./routes";
import { config } from "dotenv";
import cors from "cors";

config();

export const prisma = new PrismaClient();

export const secretKey = String(process.env.secretKey);
const app: Application = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use(
//   "/public/events/",
//   express.static(`${__dirname}/public/images/event_images`)
// );

//routes
app.use("/products", routes.productsRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: error.message || "internal server error" });
}); //error handler

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("page not found"); //page not found handler
});

app.listen(PORT, () => {
  console.log("api is running on port", PORT);
});
