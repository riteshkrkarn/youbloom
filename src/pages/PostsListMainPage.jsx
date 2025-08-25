import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../features/postSlice";
import PostsCard from "../components/PostsCard.jsx";

const PostListMainPage = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data.slice(0, 6));
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post) => {
    dispatch(setSelectedPost(post));
  };

  if (loading)
    return (
      <div className="text-center p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
        Loading posts...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-2">
      <div className="max-w-6xl mx-auto p-6">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 drop-shadow-sm">
            Latest Posts
          </h1>
          <p className="text-gray-600">
            Discover amazing content from our community
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostsCard key={post.id} post={post} onClick={handlePostClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostListMainPage;
