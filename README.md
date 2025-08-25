# MyBlog React App

A technical interview project: a responsive blog platform built with React, Redux Toolkit, and Tailwind CSS.

## Features

- **Login page**: Phone number validation (+254 format), error handling, and mock authentication.
- **Posts list**: Fetches posts, displays in a responsive grid, supports dark/light mode, and includes a search bar with live suggestions.
- **Post details**: View full post details, with navigation and theme support.
- **Theme toggle**: Switch between dark and light mode (state managed by Redux).
- **Navigation**: React Router for page navigation, including back button and search-based navigation.

## Tech Stack & Architecture

- **React**: Functional components and hooks for UI and state logic.
- **Redux Toolkit**: Manages global state for theme and selected post (see `src/features/postSlice.js`).
- **React Router DOM**: Handles routing between login, posts list, and post detail pages.
- **Tailwind CSS**: Utility-first CSS for responsive and modern UI.
- **Vite**: Fast build tool and dev server.

## File Structure

```
src/
  app/           # Redux store setup
  components/    # Reusable UI components (Navbar, PostsCard, etc.)
  features/      # Redux slices (postSlice.js)
  pages/         # Page components (LoginPage, PostsListMainPage, PostDetailPage)
  App.jsx        # Main app and routes
  index.js(x)    # Entry point
```

## Redux Usage

- **Theme state**: `state.theme.dark` toggled via Navbar, affects all pages except login.
- **Selected post**: `state.posts.selectedPost` set when a post is clicked, used for detail view.
- **Slices**: Defined in `features/postSlice.js` and combined in `app/store.js`.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- **Login**: Enter a valid phone number (e.g. +254712345678) to access the main page.
- **Browse posts**: View, search, and filter posts. Click a post or a suggestion to view details.
- **Theme**: Toggle dark/light mode from the navbar.

## Notes

- Posts are fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) (first 6 posts).
- State is not persisted across reloads (selected post is lost on refresh).

---
