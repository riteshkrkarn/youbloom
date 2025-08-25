import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostsCard = ({ post, onClick }) => {
  const navigate = useNavigate();
  const dark = useSelector((state) => state.theme.dark);

  const handleReadMore = (e) => {
    e.stopPropagation();
    if (onClick) onClick(post);
    navigate("/postdetail");
  };

  return (
    <article
      onClick={() => onClick && onClick(post)}
      className={`rounded-2xl p-6 hover:shadow-xl hover:border-indigo-300 transition-all duration-200 shadow-md flex flex-col h-full border ${
        dark ? "bg-gray-900 border-blue-900" : "bg-white border-blue-100"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={`text-sm font-medium px-2 py-1 rounded-full ${
            dark ? "text-blue-200 bg-blue-950" : "text-blue-600 bg-blue-50"
          }`}
        >
          #{post.id}
        </span>
        <div
          className={`text-xs px-2 py-1 rounded ${
            dark ? "text-gray-400 bg-gray-800" : "text-gray-500 bg-gray-100"
          }`}
        >
          Post
        </div>
      </div>

      <h2
        className={`text-xl font-semibold mb-3 line-clamp-2 capitalize ${
          dark ? "text-white" : "text-gray-800"
        }`}
      >
        {post.title}
      </h2>

      <p
        className={`text-sm leading-relaxed mb-4 flex-1 ${
          dark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {post.body.length > 120
          ? post.body.substring(0, 120) + "..."
          : post.body}
      </p>

      <div className="flex items-center justify-between mt-auto pt-2 ">
        <button
          onClick={handleReadMore}
          className={`px-4 py-2 rounded-lg font-semibold shadow flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 hover:cursor-pointer ${
            dark
              ? "bg-gradient-to-r from-indigo-800 to-blue-800 text-white hover:from-indigo-900 hover:to-blue-900"
              : "bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600"
          }`}
        >
          <span className="group-hover:underline">Read more</span>
          <span className="text-xs text-white group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    </article>
  );
};

export default PostsCard;
