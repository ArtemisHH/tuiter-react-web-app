import React from "react";
import {replyTuit, retuitTuit, likeTuit} from "./tuits-reducer";
import {useDispatch, useSelector} from "react-redux";
import {updateTuitsThunk} from "../../services/tuits-thunks";

const TuitStats = () => {
    const TuitStat = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    const replyClick = (TuitStat) => {
        dispatch(replyTuit(TuitStat))
    }
    const retuitClick = (TuitStat) => {
        dispatch(retuitTuit(TuitStat))
    }
    const likeClick = (TuitStat) => {
        dispatch(likeTuit(TuitStat))
    }

    return (
        <div className="row">
            <div className="d-flex text-muted my-2">
                <div className="flex-fill">
                    <i className="far fa-comment" onClick={replyClick}></i>
                    <span className="mx-2">{TuitStat.replies}</span>
                </div>
                <div className="flex-fill">
                    <i className="fa fa-retweet" onClick={retuitClick}></i>
                    <span className="mx-2">{TuitStat.retuits}</span>
                </div>
                <div className="flex-fill">
                    <i className="far fa-heart" onClick={likeClick}></i>
                    <span className="mx-2">{TuitStat.likes}</span>
                </div>
                <div className="flex-fill">
                    <i className="fas fa-arrow-up-from-bracket"></i>
                </div>
            </div>
        </div>
    );
}
export default TuitStats;

