import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import {useDispatch} from "react-redux";
/*import {deleteTuit} from "./tuits-reducer";*/
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
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
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;