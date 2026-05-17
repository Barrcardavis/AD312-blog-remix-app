📘 AD312 Blog Remix App
A multi‑page blog application built for AD312 using React Router.
This project demonstrates client‑side routing, dynamic URL parameters, nested layouts, and basic UI styling.

🚀 Features
Multi‑page layout using React Router

Home, About, Posts, and Post Detail pages

Dynamic routing for individual blog posts (/posts/:postId)

Navigation bar with links to all pages

Styled layout with a full‑screen background image

Return to Posts button on each post detail page

Clean, readable UI with a translucent content container

📂 Project Structure
app/
 ├── routes/
 │    ├── _index.jsx          → Home page
 │    ├── about.jsx           → About page
 │    ├── posts._index.jsx    → Posts list page
 │    └── posts.$postId.jsx   → Dynamic post detail page
 ├── root.jsx                 → App layout + navigation
 └── data/
      └── posts.js            → Sample post data

🧭 Routing Overview
| Route | Description |
| --- | --- |
| ``/`` | Home page |
| ``/about`` | About page |
| ``/posts`` | List of all posts |
| ``/posts/:postId`` | Dynamic post detail page |

🎨 Styling
Full‑screen crowd background image

Semi‑transparent white content container for readability

Simple, clean navigation bar

Styled “Return to Posts” button on post detail pages

▶️ Running the App
Install dependencies:
npm install

Start the development server:
npm run dev

Then open
http://localhost:5173

✅ Test Cases
Normal Test Cases

Test Case 1 — Navigate to Posts Page
Action: Click the Posts link in the navigation bar.

Expected Result: The /posts page loads and displays a list of blog posts.

Purpose: Confirms that the navigation bar and routing to the posts index page work correctly.

Test Case 2 — Open a Post Detail Page
Action: On the /posts page, click a post title (e.g., “Post 1”).

Expected Result: The app navigates to /posts/1 and displays the correct post title and content.

Purpose: Verifies dynamic routing using URL parameters (postId).

Test Case 3 — Return to Posts List
Action: On a post detail page, click Return to Posts.

Expected Result: The app navigates back to /posts and shows the full posts list again.

Purpose: Confirms that the Link component correctly navigates back to the posts index.

⚠️ Edge Test Cases
Edge Case 1 — Invalid Post ID
Action: Manually enter an invalid URL such as /posts/999.

Expected Result: The app displays “Post not found” and a short message explaining the post does not exist.

Purpose: Ensures the app handles missing or invalid route parameters gracefully.

Edge Case 2 — Direct URL Access
Action: Refresh the browser while on a post detail page (e.g., /posts/2).

Expected Result: The page reloads correctly and still displays the correct post.

Purpose: Confirms that routing works even when bypassing navigation links.

Edge Case 3 — Navigation Without JavaScript Errors
Action: Rapidly click between Home, About, and Posts multiple times.

Expected Result: No console errors appear, and all pages load correctly.

Purpose: Ensures stable routing and component rendering under repeated navigation.

📹 Assignment Demo
This project is used for the AD312 assignment requiring:

A multi‑page layout

Dynamic routing

Navigation links

Basic styling

A short walkthrough video

📄 License
This project is for educational use as part of the AD312 course.








