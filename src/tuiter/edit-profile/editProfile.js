import React, {useState} from "react";
import {useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const [fname, setfName] = useState(profile.firstName);
    const [lname, setlName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [dob, setDob] = useState(profile.dateOfBirth);
    const [loc,setLoc] = useState(profile.location);


    const saveProfileClick = () => {
        dispatch(updateProfile());
    }
/*    const onEditBannerPicChange = (profile, event) => {
        setBanner(profile.map(t => t.id === profile.id ? {...t, [banner]: event.target.value} : t))
    }*/
/*    const onEditNameChange = (profile, event) => {
        setName(profile.map(t => t.id === profile.id ? {...t, [name]: event.target.value} : t))
    }
    const onEditBioChange = (profile, event) => {
        setBio(profile.map(t => t.id === profile.id ? {...t, [bio]: event.target.value} : t))
    }
    const onEditDOBChange = (profile, event) => {
        setDob(profile.map(t => t.id === profile.id ? {...t, [dateOfBirth]: event.target.value} : t))
    }
    const onEditLocChange = (profile, event) => {
        setLoc(profile.map(t => t.id === profile.id ? {...t, [location]: event.target.value} : t))
    }*/

    return (
        <>
            <div className="d-inline-flex align-content-between">
                <i className="bi bi-x-lg col-2"></i>
                <h3 className="col-8">Edit Profile</h3>
                <button className="btn rounded-pill form-control justify-content-between btn-dark" onClick={saveProfileClick}>
                    <Link to="../profile">Save</Link></button>
            </div>
            <div className="row mt-2">
                <div className="col-auto d-inline-flex">
                    <img src={profile.bannerPic} className="col-12" alt=""/>
                </div>
                <div className="mb-5">
                    <img src={profile.profilePic} className="wd-profile-img" alt=''/>
                </div>

                <label className="mt-5">
                    First Name:
                    <input value={fname} className="col-12"
                           onChange={(e) => setfName(e.target.value)}/>
                </label>
                <label className="my-2">
                    Last Name:
                    <input value={lname} className="col-12"
                           onChange={(e) => setlName(e.target.value)}/>
                </label>
                <label className="my-2">
                    Bio:
                    <textarea value={bio} className="col-12"
                              onChange={(e) => setBio(e.target.value)}/>
                </label>
                <label className="my-2">
                    Location:
                    <textarea value={loc} className="col-12"
                              onChange={(e) => setLoc(e.target.value)}/>
                </label>
                <label className="my-2">
                    Birth Date:
                    <input defaultValue={dob} className="col-12"
                           onChange={(e) => setDob(e.target.value)}/>
                </label>
            </div>
        </>
    );
}
export default EditProfile;
