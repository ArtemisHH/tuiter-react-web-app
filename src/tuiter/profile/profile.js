import React from 'react';
import {useSelector} from "react-redux";
/*import profileReducer from "../reducers/profile-reducer";*/
import {Link} from "react-router-dom";


function UserProfile() {
    const profile = useSelector(state => state);
    /*const dispatch = useDispatch();*/
    const editProfileClick = <Link to="/edit-profile"></Link>

    return (
        <div>
            <div className="row">
                <i className="far fa-arrow-left"></i>
                <span>{profile.firstName} {profile.lastName}</span>
            </div>
            <div>
                <img src={profile.bannerPic} className="w-100 h-25"/>
            </div>
            <div className="row">
                <img src={profile.profilePic} className="ms-3"/>
                <button className="form-control float-end" onClick={editProfileClick}>Edit profile</button>
            </div>
            <div className="mx-3">
                <h3>{profile.firstName} {profile.lastName}</h3>
                <span>{profile.handle}</span>
                <span>{profile.bio}</span>
                <div className="row">
                    <div className="flex-fill">
                        <i className="far fa-location"></i>
                        <span className="mx-2">{profile.location}</span>
                    </div>
                    <div className="flex-fill">
                        <i className="far fa-star"></i>
                        <span className="mx-2">{profile.dateOfBirth}</span>
                    </div>
                    <div className="flex-fill">
                        <i className="far fa-calendar"></i>
                        <span className="mx-2">Joined: {profile.dateJoined}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-fill">
                        <>{profile.followingCount}</>
                        <span className="mx-2">Following</span>
                    </div>
                    <div className="flex-fill">
                        <>{profile.followersCount}</>
                        <span className="mx-2">Followers</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default UserProfile;