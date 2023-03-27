import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import TuitStats from "./tuitStats";

const TuitItem = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "time": "2h",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what " +
                "being a spacefaring civilization is all about. It’s about believing in the future and thinking that " +
                "the future will be better than the past. And I can’t think of anything more exciting than going out " +
                "there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row mt-2">
                <div className="col-2">
                    <img className="wd-avatar-img" src={`/images/${tuit.image}`} alt=''/>
                </div>
                <div className="col-10">
                    <div className="d-flex justify-content-between">
                        <div className="col-11">{tuit.userName}
                            <span className="fa-stack override-bs fa-fw">
                                <i className="fa-solid fa-stack-1x fa-certificate text-primary"></i>
                                <i className="fa fa-stack-1x fa-check fa-xs fa-inverse"></i>
                            </span>
                            <span className="text-muted small">{tuit.handle} · {tuit.time}</span>
                        </div>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    {tuit.tuit}
                    <TuitStats/>
                    {/*<div className="d-flex text-muted my-2">
                        <div className="flex-fill">
                            <i className="far fa-comment"></i>
                            <span className="mx-2">{tuit.replies}</span>
                        </div>
                        <div className="flex-fill">
                            <i className="fa fa-retweet"></i>
                            <span className="mx-2">{tuit.retuits}</span>
                        </div>
                        <div className="flex-fill">
                            <i className="far fa-heart"></i>
                            <span className="mx-2">{tuit.likes}</span>
                        </div>
                        <div className="flex-fill">
                            <i className="fas fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>*/}
                </div>
            </div>
        </li>
    );
};
export default TuitItem;