import React, {useState} from "react";
import {replyTuit, retuitTuit, likeTuit} from "./tuits-reducer";
import {useDispatch, useSelector} from "react-redux";
import tuits from "./index";

const TuitStats = () => {
    const TuitStat = useSelector(state => state.tuits);
    /*const [tuitStat, setTuitState] = useState({tuits:''});*/
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
                <div className="flex-fill" onClick={replyClick}>
                    <i className="far fa-comment"></i>
                    <span className="mx-2">{tuits.replies}</span>
                </div>
                <div className="flex-fill" onClick={retuitClick}>
                    <i className="fa fa-retweet"></i>
                    <span className="mx-2">{tuits.retuits}</span>
                </div>
                <div className="flex-fill" onClick={likeClick}>
                    <i className="far fa-heart"></i>
                    <span className="mx-2">{tuits.likes}</span>
                </div>
                <div className="flex-fill">
                    <i className="fas fa-arrow-up-from-bracket"></i>
                </div>
            </div>
        </div>
    );
}
export default TuitStats;
