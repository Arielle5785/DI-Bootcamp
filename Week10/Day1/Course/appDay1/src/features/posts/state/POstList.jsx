import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";
import { useEffect } from "react";
import reactionButton from "../ReactionButton";
import { postState } from "./postsSlice";
import { selectorPostState, selectorStatus } from "./selector";

const PostList = (props) => {
    // const postState = (state) => state.postsReducer
    // const posts = useSelector(state => state.postsReducer.posts)
    // const posts = useSelector (postState)
    // const status = useSelector(state => state.postsReducer.status)
    const status = useSelector(postState.status)
    const dispatch = useDispatch()
    useEffect(() => {
        return (
            <>
                <h2>Posts</h2>
                <p>{posts.body}</p>
                <reactionButton />
            </>
        )
    }
    )
}
export default PostList;