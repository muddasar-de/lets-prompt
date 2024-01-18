"use client";
import { useEffect, useState } from "react";
import { PromptCard } from "@components";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const PromptCardList = ({ data, handleTagClick }) => {
    return (
      <div className="mt-10 prompt_layout">
        {data?.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for tags or username..."
          value={searchText}
          required
          onChange={handleSearchChange}
          className="search_input"
        />
      </form>
      <PromptCardList data={posts} />
    </section>
  );
};

export default Feed;
