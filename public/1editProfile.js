import React, {useState} from "react";
/*import {createTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";*/

const EditProfile = () => {
    let [profile, setProfile] = useState('');
    /* const dispatch = useDispatch();*/
    const saveProfileClick = () => {

    }
    const onEditBannerPicChange = (profile, event) => {
        setProfile(profile.map(t => t.Name === profile.Name ? {...t, Banner: event.target.value} : t))
    }
    const onEditNameChange = (profile, event) => {
        setProfile(profile.map(t => t.Name === profile.Name ? {...t, Name: event.target.value} : t))
    }
    const onEditBioChange = (profile, event) => {
        setProfile(profile.map(t => t.Name === profile.Name ? {...t, Bio: event.target.value} : t))
    }
    const onEditDOBChange = (profile, event) => {
        setProfile(profile.map(t => t.Name === profile.Name ? {...t, DOB: event.target.value} : t))
    }
    /*    const tuitClickHandler = () => {
            const newTuit = {
                tuit: EditProfile
            }
            dispatch(createTuit(newTuit));
        }*/
    return (
        <>
            <div className="d-flex justify-content-between">
                <i className="bi bi-x-lg col-2 align-items-center"></i>
                <h3 className="col-8 mx-4">Edit Profile</h3>
                <button className="btn btn-dark rounded-pill float-end" onClick={saveProfileClick}>Save</button>
            </div>
            <div className="row">
                <div className="col-auto">
                    <img src={profile.bannerPic} width={60} alt="" onChange={(event) => onEditBannerPicChange(profile, event)}/>
                </div>
                <div className="row">
                    <label for="inputName">Name</label>
                    <input name="inputName" value={profile.name} onChange={(event) => onEditNameChange(profile, event)}/>
                </div>
                <textarea value={profile.bio} onChange={(event) => onEditBioChange(profile, event)}/>
                <input value={profile.dateOfBirth} onChange={(event) => onEditDOBChange(profile, event)}/>
            </div>
        </>
    );
}
export default EditProfile;
