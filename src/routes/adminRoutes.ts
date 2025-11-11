import express from "express";
import {
  createPostController,
  deletePostController,
  entriesListing,
  showCreatePage,
  showEditPage,
  updatePostController,
} from "../controllers/admin/blogController";

const router = express.Router();

router
  .get("/", entriesListing)

  .get("/create", showCreatePage)
  .post("/create", createPostController)

  .get("/edit/:id", showEditPage)
  .post("/edit/:id", updatePostController)

  .post("/delete/:id", deletePostController);

export default router;
