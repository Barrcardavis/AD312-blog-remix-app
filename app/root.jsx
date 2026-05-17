import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px"
      }}
    >
      <header
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: "10px 20px",
          borderRadius: "8px",
          maxWidth: "800px",
          margin: "0 auto"
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </header>

      <main
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "800px",
          margin: "40px auto"
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
