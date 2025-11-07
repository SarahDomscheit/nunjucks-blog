import { Request, Response } from "express";
import { getPosts } from "../models/blogEntriesModel";

export const postDetailController = (req: Request, res: Response) => {
  const posts = getPosts();
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("postdetail.html", { post });
};

export const postController = (req: Request, res: Response) => {
  const posts = getPosts();
  const firstPost = posts[0];
  res.render("post.html", { post: firstPost });
};
