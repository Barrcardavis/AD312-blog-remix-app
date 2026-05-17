import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id.toString() === postId);

  if (!post) {
    return (
      <>
        <h1>Post not found</h1>
        <p>The requested post does not exist.</p>
      </>
    );
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <Link
        to="/posts"
        style={{
          display: "inline-block",
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          borderRadius: "4px",
          textDecoration: "none",
          marginTop: "20px"
        }}
      >
        Return to Posts
      </Link>
    </>
  );
}
