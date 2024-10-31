import axios from "axios";

const { VITE_API_BASE_URL } = import.meta.env;

export type Post = {
  id: number;
  title: string;
  content: string;
};

async function listPosts(): Promise<Post[]> {
  const { data } = await axios.get<Post[]>(`${VITE_API_BASE_URL}/posts`);
  return data;
}

async function getPost(id: number): Promise<Post> {
  const { data } = await axios.get<Post>(`${VITE_API_BASE_URL}/posts/${id}`);
  return data;
}

async function createPost(payload: Omit<Post, "id">): Promise<Post> {
  const { data } = await axios.post<Post>(
    `${VITE_API_BASE_URL}/posts`,
    payload,
  );
  return data;
}

export { listPosts, getPost, createPost };
