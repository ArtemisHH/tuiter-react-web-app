import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function UserProfile() {
    const profile = useSelector((state) => state.profile);

    return (
        <>
            <h3 className="d-inline-flex align-content-center">
                <i className="fa fa-arrow-left align-content-center"></i>
                <span className="mx-4">{profile.firstName} {profile.lastName}</span>
                <button className="btn rounded-pill mt-2 btn-dark d-flex justify-content-end float-end" type="button">
                    <Link to="/tuiter/edit-profile">Edit profile</Link></button>
            </h3>
            <div>
                <img src={profile.bannerPic} className="w-100 h-25" alt=''/>
            </div>
            <div className="d-inline-flex align-content-center mb-5">
                <img src={profile.profilePic} className="ms-3 wd-profile-img" alt=''/>
            </div>
            <div className="mt-5">
                <h3>{profile.firstName} {profile.lastName}</h3>
                <span className="text-muted">{profile.handle}</span>
                <div className="my-2">{profile.bio}</div>
                <div className="my-2 d-inline-flex">
                    <div className="me-2">
                        <i className="fa fa-location"></i>
                        <span className="mx-2">{profile.location}</span>
                    </div>
                    <div className="me-2">
                        <i className="far fa-star"></i>
                        <span className="mx-2">{profile.dateOfBirth}</span>
                    </div>
                    <div className="me-2">
                        <i className="far fa-calendar"></i>
                        <span className="mx-2">Joined: {profile.dateJoined}</span>
                    </div>
                </div>
                <div className="my-2">
                    <div className="d-inline-flex">
                        <span className="fw-bold">{profile.followingCount}</span>
                        <span className="mx-2">Following</span>
                    </div>
                    <div className="d-inline-flex">
                        <span className="fw-bold">{profile.followersCount}</span>
                        <span className="mx-2">Followers</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserProfile;