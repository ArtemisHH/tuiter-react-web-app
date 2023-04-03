import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = () => {
    const tuit = useSelector(state => state.tuits);
    const dispatch = useDispatch();
/*    const replyClick = (tuit) => {
        dispatch(replyTuit(tuit))
    }
    const retuitClick = (tuit) => {
        dispatch(retuitTuit(tuit))
    }
    const likeClick = (tuit) => {
        dispatch(likeTuit(tuit))
    }*/
    return (
        <>
            {tuit.tuit}
            <div className="row">
                <div className="d-flex text-muted my-2">
                    <div className="flex-fill">
                        <i className="far fa-comment me-2" onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            replies: tuit.replies + 1
                        }))}></i>
                        <span className="mx-2">{tuit.replies}</span>
                    </div>
                    <div className="flex-fill">
                        <i className="fa fa-retweet me-2" onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            retuits: tuit.retuits + 1
                        }))}></i>
                        <span className="mx-2">{tuit.retuits}</span>
                    </div>
                    <div className="flex-fill">
                        {tuit.liked && <i className="bi bi-heart-fill me-2 text-danger" onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            likes: tuit.likes + 1
                        }))}>
                            <span className="mx-2">{tuit.likes}</span></i>
                        }
                        {!tuit.liked && <i className="bi bi-heart me-2" onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            likes: tuit.likes - 1
                        }))}>
                            <span className="mx-2">{tuit.likes}</span></i> }
                    </div>
                    <div className="flex-fill">
                        <i className="bi bi-upload"></i>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TuitStats;
