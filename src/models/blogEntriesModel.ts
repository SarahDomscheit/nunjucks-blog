import data from "../data/posts.json";
import { POST } from "../types/Post";
import { formatDate } from "../utils/formatDate";

export const getPosts = (): (Omit<POST, "createdAt"> & {
  createdAt: string;
  id: string;
})[] => {
  return data.map((post: POST, index: number) => {
    if (typeof post.createdAt !== "number") {
      throw new Error(`Ungültiger Timestamp für Post ${index + 1}`);
    }
    return {
      ...post,
      createdAt: formatDate(post.createdAt),
      id: (index + 1).toString(),
    };
  });
};
