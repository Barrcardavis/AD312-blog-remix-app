import { route } from "@react-router/dev/routes";

export default [
  route("/", "routes/_index.jsx"),
  route("/about", "routes/about.jsx"),
  route("/posts", "routes/posts._index.jsx"),
  route("/posts/:postId", "routes/posts.$postId.jsx"),
];


