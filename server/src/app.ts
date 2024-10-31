import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Create a new post
app.post("/posts", async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const post: Post = await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  res.json(post);
});

// Get all posts
app.get("/posts", async (req: Request, res: Response) => {
  const posts: Post[] = await prisma.post.findMany();
  res.json(posts);
});

// Get a single post by ID
app.get("/posts/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const post: Post | null = await prisma.post.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(post);
});

// Update a post

// Delete a post
app.delete("/posts/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const post: Post = await prisma.post.delete({
    where: { id: parseInt(id) },
  });
  res.json(post);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
