import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listPosts, Post } from "@/api/posts";

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await listPosts();
        setPosts(res);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-5 flex justify-between">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Link
          to="/create"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Create Post
        </Link>
      </div>
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-3 rounded border border-gray-200 p-3"
          >
            <Link to={`/post/${post.id}`} className="text-lg font-semibold">
              {post.title}
            </Link>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
