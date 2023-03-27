import React, {useState} from "react";
import {createTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";

const EditProfile = () => {
    let [EditProfile, setEditProfile] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: EditProfile
        }
        dispatch(createTuit(newTuit));
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="/images/nasa.jpg" width={60} alt=""/>
            </div>
            <div className="col-10">
                <textarea value={EditProfile} placeholder="What's happening?"
                          className="form-control border-0"
                          onChange={(event) => setEditProfile(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default EditProfile;
