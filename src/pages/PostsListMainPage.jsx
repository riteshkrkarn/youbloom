import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPost } from "../features/postSlice";
import PostsCard from "../components/PostsCard.jsx";
import Navbar from "../components/Navbar.jsx";
import { useNavigate } from "react-router-dom";

const PostListMainPage = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.dark);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

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

  const filteredPosts = search
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const handlePostClick = (post) => {
    dispatch(setSelectedPost(post));
  };

  const handleSuggestionClick = (post) => {
    dispatch(setSelectedPost(post));
    navigate("/postdetail");
  };

  if (loading)
    return (
      <div className="text-center p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
        Loading posts...
      </div>
    );

  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen py-8 px-2 ${
          dark
            ? "bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-900"
            : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
        }`}
      >
        <div className="max-w-6xl mx-auto p-6">
          {/* Search bar and suggestions */}
          <div className="flex justify-center mb-8 relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search posts by title..."
              className={`w-96 max-w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200 ${
                dark
                  ? "border-blue-900 bg-blue-950 text-blue-100 placeholder-blue-300"
                  : "border-blue-100 bg-blue-50 text-gray-700 placeholder-gray-400"
              }`}
            />
            {search && filteredPosts.length > 0 && (
              <ul
                className={`absolute top-12 left-1/2 -translate-x-1/2 w-96 max-w-full rounded-lg shadow-lg z-10 border ${
                  dark
                    ? "bg-gray-900 border-blue-900"
                    : "bg-white border-blue-100"
                }`}
              >
                {filteredPosts.map((post) => (
                  <li
                    key={post.id}
                    className={`px-4 py-2 cursor-pointer transition hover:bg-blue-50 dark:hover:bg-blue-950 ${
                      dark ? "text-white" : "text-gray-800"
                    }`}
                    onClick={() => handleSuggestionClick(post)}
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <header className="mb-8 text-center">
            <h1
              className={`text-4xl font-bold mb-2 drop-shadow-sm ${
                dark ? "text-white" : "text-gray-800"
              }`}
            >
              Latest Posts
            </h1>
            <p className={dark ? "text-gray-300" : "text-gray-600"}>
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
    </>
  );
};

export default PostListMainPage;
