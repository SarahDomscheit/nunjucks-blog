import express from "express";
import { contactController } from "../controllers/contactController";
import { aboutController } from "../controllers/aboutController";
import { homeController } from "../controllers/homeController";
import {
  postController,
  postDetailController,
} from "../controllers/postController";

const router = express.Router();

router
  .get("/", homeController)
  .get("/post/:id", postDetailController)
  .get("/about", aboutController)
  .get("/contact", contactController)
  .get("/post", postController);

export default router;
