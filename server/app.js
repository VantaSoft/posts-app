const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Create a new post
app.post("/posts", async (req, res) => {
  const { title, content } = req.body;
  const post = await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  res.json(post);
});

// Get all posts
app.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany({
    include: { author: true },
  });
  res.json(posts);
});

// Get a single post by ID
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
    include: { author: true },
  });
  res.json(post);
});

// Update a post
app.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, published } = req.body;
  const post = await prisma.post.update({
    where: { id: parseInt(id) },
    data: { title, content, published },
  });
  res.json(post);
});

// Delete a post
app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: { id: parseInt(id) },
  });
  res.json(post);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
