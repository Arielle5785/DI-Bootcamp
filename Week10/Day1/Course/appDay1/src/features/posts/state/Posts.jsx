import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";
import "./posts.css";

const Posts = () => {
  const { posts, status, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === "loading") return <h2>Loading posts...</h2>;
  if (status === "failed") return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Posts List</h2>
      {posts.map((post) => (
        <div key={post.id} >
          <h3>{post.name}</h3>
            <p><strong>Title:</strong> {post.title}</p>
            <p><strong>body:</strong> {post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
