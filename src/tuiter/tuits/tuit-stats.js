import React from "react";
import {replyTuit, retuitTuit, likeTuit} from "./tuits-reducer";
import {useDispatch} from "react-redux";


const TuitStats = ({tuit}) => {

    const dispatch = useDispatch();
    const replyClick = () => {
        dispatch(replyTuit());
    }
    const retuitClick = () => {
        dispatch(retuitTuit());
    }
    const likeClick = () => {
        dispatch(likeTuit());
    }
    return (
            <div className="row">
                <div className="d-flex text-muted my-2">
                    <div className="flex-fill">
                        <i className="far fa-comment me-2" onClick={replyClick}></i>
                        <span className="mx-2">{tuit.replies}</span>
                    </div>
                    <div className="flex-fill">
                        <i className="fa fa-retweet" onClick={retuitClick}></i>
                        <span className="mx-2">{tuit.retuits}</span>
                    </div>
                    <div className="flex-fill">
                        {tuit.liked && <i className="bi bi-heart-fill me-2 text-danger" onClick={likeClick}>
                            <span className="mx-2">{tuit.likes}</span></i>
                        }
                        {!tuit.liked && <i className="bi bi-heart me-2" onClick={likeClick}>
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
