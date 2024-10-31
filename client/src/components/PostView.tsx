import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost, Post } from "../api/posts";

function PostView() {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getData = async () => {
      try {
        if (id) {
          const res = await getPost(parseInt(id));
          setPost(res);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getData();
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
