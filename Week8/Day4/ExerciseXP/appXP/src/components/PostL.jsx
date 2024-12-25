import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import data from "./data.json"

const PostList = () => {
    const [postList, setPostList] = useState([]);
    const params = useParams();

    useEffect(() => {
    setPostList(data);
    }, []);
    
    return (
        <div>
            <h1>Hi This is a Title </h1>
            {postList.map((post) => {
                return (
                    <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    </div>
                )
            }
                
            )}
        </div>
  );
}
export default PostList;