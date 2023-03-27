import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

function NavigationSidebar() {
    const {pathname} = useLocation();
    /*const paths = pathname.split('/');
    const active = paths[2];*/
    const isActive = (path) =>
        pathname.indexOf(path) >= 0 ? 'active':'';

    return (
        <>
        <div className="list-group">
            <a href="/" className="list-group-item">
                <i className="fab fa-twitter fa-2x"></i></a>
            <Link to="/tuiter/home" className={`list-group-item d-inline-flex align-items-center ${isActive('home')}`}>
                <i className="fa fa-home"></i>
                <span className="d-none d-xl-block ms-3">Home</span></Link>
            <Link to="/tuiter/explore" className={`list-group-item d-inline-flex align-items-center ${isActive('explore')}`}>
                <i className="fa fa-hashtag"></i>
                <span className="d-none d-xl-block ms-3">Explore</span></Link>
            <Link to="/" className={`list-group-item d-inline-flex align-items-center ${isActive('labs')}`}>
                <i className="fa fa-pencil"></i>
                <span className="d-none d-xl-block ms-3">Labs</span></Link>
            <Link to="/" className={`list-group-item d-inline-flex align-items-center ${isActive('notifications')}`}>
                <i className="fa fa-bell"></i>
                <span className="d-none d-xl-block ms-3">Notifications</span></Link>
            <Link to="/" className={`list-group-item d-inline-flex align-items-center ${isActive('messages')}`}>
                <i className="far fa-envelope"></i>
                <span className="d-none d-xl-block ms-3">Messages</span></Link>
            <Link to="/" className={`list-group-item d-inline-flex align-items-center ${isActive('bookmarks')}`}>
                <i className="fa fa-bookmark"></i>
                <span className="d-none d-xl-block ms-3">Bookmarks</span></Link>
            <Link to="/" className={`list-group-item d-inline-flex align-items-center ${isActive('lists')}`}>
                <i className="fa fa-list"></i>
                <span className="d-none d-xl-block ms-3">Lists</span></Link>
            <Link to="/tuiter/profile" className={`list-group-item d-inline-flex align-items-center ${isActive('profile')}`}>
                <i className="fa fa-user"></i>
                <span className="d-none d-xl-block ms-3">Profile</span></Link>
            <a href="/" className={`list-group-item d-inline-flex align-items-center ${isActive('more')}`}>
                <i className="fa fa-ellipsis"></i>
                <span className="d-none d-xl-block ms-3">More</span></a>
        </div>
        <div className="d-grid mt-2">
            <a href="/" className="btn btn-primary btn-block rounded-pill">Tuit</a>
        </div>
        </>
    );
};
export default NavigationSidebar;