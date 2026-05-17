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

📹 Assignment Demo
This project is used for the AD312 assignment requiring:

A multi‑page layout

Dynamic routing

Navigation links

Basic styling

A short walkthrough video

📄 License
This project is for educational use as part of the AD312 course.








