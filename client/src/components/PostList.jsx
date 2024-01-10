import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listPosts } from "../api/posts";

function PostList() {
  const [posts, setPosts] = useState([]);

  console.log("posts", posts);

  useEffect(() => {
    listPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Posts</h1>
      <Link
        to="/create"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Create Post
      </Link>
      <div className="mt-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-3 rounded border border-gray-200 p-3"
          >
            <Link to={`/post/${post.id}`} className="text-lg font-semibold">
              {post.title}
            </Link>
            <p>{post.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
