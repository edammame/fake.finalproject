import express, { Router } from "express";
// import { eventController } from "../controllers/event";
// import { verifyAdmin, verifyUser } from "../middlewares/auth-middleware";
// import { fileUploader } from "../middlewares/multer";

export const route: Router = express.Router();

route.get("/");
route.post("/");
route.patch("/:id");
route.delete("/:id");
// route.get("/", eventController.getEvents);
// route.get("/:id", eventController.getEventsById);
// route.post(
//   "/",
//   verifyUser,
//   verifyAdmin,
//   fileUploader({
//     destinationFolder: "/images/event_images",
//     prefix: "EVENT",
//     filetype: "image",
//   }).single("image"),
//   eventController.addEvent
// );
// route.patch(
//   "/:id",
//   verifyUser,
//   verifyAdmin,
//   fileUploader({
//     destinationFolder: "/images/event_images",
//     prefix: "EVENT",
//     filetype: "image",
//   }).single("image"),
//   eventController.editEvent
// );
// route.delete("/:id", verifyUser, verifyAdmin, eventController.deleteEvent);
