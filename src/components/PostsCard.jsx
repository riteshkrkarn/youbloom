import React from "react";

const PostsCard = ({ post, onClick }) => {
  return (
    <article
      onClick={() => onClick && onClick(post)}
      className="bg-white border border-blue-100 rounded-2xl p-6 cursor-pointer hover:shadow-xl hover:border-indigo-300 transition-all duration-200 shadow-md flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
          #{post.id}
        </span>
        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
          Post
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 capitalize">
        {post.title}
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
        {post.body.length > 120
          ? post.body.substring(0, 120) + "..."
          : post.body}
      </p>

      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="text-indigo-600 text-sm font-medium hover:underline">
          Read more
        </span>
        <span className="text-xs text-gray-400">→</span>
      </div>
    </article>
  );
};

export default PostsCard;
