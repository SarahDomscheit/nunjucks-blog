import { Request, Response } from "express";
import { getPosts } from "../models/blogEntriesModel";

export const homeController = (req: Request, res: Response) => {
  const posts = getPosts();
  res.render("index.html", { posts });
};
