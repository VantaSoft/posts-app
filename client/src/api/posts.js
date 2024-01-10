import axios from "axios";

const { VITE_API_BASE_URL } = import.meta.env;

async function listPosts() {
  const { data } = await axios.get(`${VITE_API_BASE_URL}/posts`);
  return data;
}
async function getPost(id) {
  const { data } = await axios.get(`${VITE_API_BASE_URL}/posts/${id}`);
  return data;
}

async function createPost(payload) {
  const { data } = await axios.post(`${VITE_API_BASE_URL}/posts`, payload);
  return data;
}

export { listPosts, getPost, createPost };
