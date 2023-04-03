import React from "react";
import {replyTuit, retuitTuit, likeTuit} from "./tuits-reducer";
import {useDispatch, useSelector} from "react-redux";

const TuitStats = () => {
    const tuit = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    const replyClick = (tuit) => {
        dispatch(replyTuit(tuit))
    }
    const retuitClick = (tuit) => {
        dispatch(retuitTuit(tuit))
    }
    const likeClick = (tuit) => {
        dispatch(likeTuit(tuit))
    }
    return (
            <div className="row">
                <div className="d-flex text-muted my-2">
                    <div className="flex-fill">
                        <i className="far fa-comment me-2" onClick={() => replyClick(tuit)}></i>
                        <span className="mx-2">{tuit.replies}</span>
                    </div>
                    <div className="flex-fill">
                        <i className="fa fa-retweet" onClick={() => retuitClick(tuit)}></i>
                        <span className="mx-2">{tuit.retuits}</span>
                    </div>
                    <div className="flex-fill">
                        {tuit.liked && <i className="bi bi-heart-fill me-2 text-danger" onClick={() => likeClick(tuit)}>
                            <span className="mx-2">{tuit.likes}</span></i>
                        }
                        {!tuit.liked && <i className="bi bi-heart me-2" onClick={() => likeClick(tuit)}>
                            <span className="mx-2">{tuit.likes}</span></i> }
                    </div>
                    <div className="flex-fill">
                        <i className="bi bi-upload"></i>
                    </div>
                </div>
            </div>
    );
}
export default TuitStats;
