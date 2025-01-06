import React from "react";
import Posts from "./features/posts/state/Posts";
import "./features/posts/state/posts.css";
import PostList from "./features/posts/state/POstList";
import UsersBox from "./features/users/UserBox"

function App() {
  return (
    <div >
      <UsersBox />
      <PostList />
    </div>
  );
}

export default App;
