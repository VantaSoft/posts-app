import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/posts";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ title, content })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Title
          </label>
          <input
            type="text"
            className="w-full rounded border px-3 py-2 text-gray-700 shadow"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Content
          </label>
          <textarea
            className="w-full rounded border px-3 py-2 text-gray-700 shadow"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
