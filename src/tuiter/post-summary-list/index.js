import React, {useEffect} from "react";
/*import postsArray from './posts.json';*/
import PostSummaryItem from "./post-summary-item";
import {useSelector, useDispatch} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData);
    /*const postsArray = useSelector(state => state.tuits)*/
    const dispatch = useDispatch();
    useEffect(() => {dispatch((findTuitsThunk()))}, [dispatch]);
    return (
        <ul className="list-group">
            { loading &&
                <li className="list-group-item">
                    loading...
                </li>
            }
            {
                tuits.map(post =>
                <PostSummaryItem
                    key={post._id}
                    post={post}/>)
            }
        </ul>
    );
};
export default PostSummaryList;