import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/posts";

function PostView() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPost(id)
      .then((data) => {
        setPost(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostView;
