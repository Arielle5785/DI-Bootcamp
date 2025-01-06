import { useDispatch } from "react-redux";
import { addReaction } from "./state/postsSlice";


const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const reactionButton = ({post}) => {
    const { id, reactions } = post;
    const dispatch = useDispatch()
    const renderReation = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (<button
        key={name}
        className="reactionButton" 
        onClick={
        ()=> dispatch (addReaction)({id,name})
    }>
        {emoji} {reactions[name]}</button>)
});
    return (
        <>
            <div>{ renderReation}</div>
        </>
    )
};
export default reactionButton