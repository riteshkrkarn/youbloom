import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar.jsx";

const PostDetailPage = () => {
  const { selectedPost } = useSelector((state) => state.posts);
  const dark = useSelector((state) => state.theme.dark);

  if (!selectedPost) {
    return (
      <div
        className={`text-center p-8 ${
          dark ? "bg-gray-900 text-white min-h-screen" : ""
        }`}
      >
        No post selected
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div
        className={`flex-1 overflow-hidden p-2 ${
          dark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div
          className={`rounded-2xl p-8 border max-w-5xl mx-auto mt-8 shadow-md flex flex-col h-full ${
            dark ? "bg-gray-900 border-blue-900" : "bg-white border-blue-100"
          }`}
        >
          <h1
            className={`text-3xl font-bold mb-4 capitalize ${
              dark ? "text-white" : "text-gray-800"
            }`}
          >
            {selectedPost.title}
          </h1>
          <p
            className={`text-lg leading-relaxed ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {selectedPost.body}
          </p>

          <div
            className={`mt-6 text-sm ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Post ID: {selectedPost.id}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
