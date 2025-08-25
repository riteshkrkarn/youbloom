import React from "react";
import { useSelector } from "react-redux";

const PostDetailPage = () => {
  const { selectedPost } = useSelector((state) => state.posts);

  if (!selectedPost) {
    return <div className="text-center p-8">No post selected</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        // onClick={() => setCurrentPage('list')}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back to Posts
      </button>

      <article className="bg-white border rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 capitalize">
          {selectedPost.title}
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          {selectedPost.body}
        </p>

        <div className="mt-6 text-sm text-gray-500">
          Post ID: {selectedPost.id} | User ID: {selectedPost.userId}
        </div>
      </article>
    </div>
  );
};

export default PostDetailPage;
