import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostsListMainPage from "./pages/PostsListMainPage";
import PostDetailPage from "./pages/PostDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/postslistmainpage" element={<PostsListMainPage />} />
        <Route path="/postdetail" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
