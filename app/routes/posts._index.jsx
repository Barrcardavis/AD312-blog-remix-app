import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostsIndex() {
  return (
    <>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <footer style={{ marginTop: "40px", opacity: 0.6 }}>
        <p>Copyright 2026 My Blog</p>
      </footer>
    </>
  );
}
