import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];

    return (
        <>
        <div className="list-group">
            <a href="/" className="list-group-item">
                <i className="fab fa-twitter fa-2x"></i></a>
            <Link to="/tuiter/home" className={`list-group-item d-inline-flex align-items-center ${active ==='home'?'active':''}`}>
                <i className="fa fa-home"></i>
                <span className="d-none d-xl-block ms-3">Home</span></Link>
            <Link to="/tuiter/explore" className={`list-group-item d-inline-flex align-items-center ${active ==='explore'?'active':''}`}>
                <i className="fa fa-hashtag"></i>
                <span className="d-none d-xl-block ms-3">Explore</span></Link>
            <Link to="/" className={`list-group-item d-inline-flex align-items-center ${active ==='labs'?'active':''}`}>
                <i className="fa fa-pencil"></i>
                <span className="d-none d-xl-block ms-3">Labs</span></Link>
            <Link to="/" className={`list-group-item d-inline-flex align-items-center ${active ==='notifications'?'active':''}`}>
                <i className="fa fa-bell"></i>
                <span className="d-none d-xl-block ms-3">Notifications</span></Link>
            <Link to="/" className={`list-group-item d-inline-flex align-items-center ${active ==='messages'?'active':''}`}>
                <i className="far fa-envelope"></i>
                <span className="d-none d-xl-block ms-3">Messages</span></Link>
            <Link to="/" className={`list-group-item d-inline-flex align-items-center ${active ==='bookmarks'?'active':''}`}>
                <i className="fa fa-bookmark"></i>
                <span className="d-none d-xl-block ms-3">Bookmarks</span></Link>
            <Link to="/" className={`list-group-item d-inline-flex align-items-center ${active ==='lists'?'active':''}`}>
                <i className="fa fa-list"></i>
                <span className="d-none d-xl-block ms-3">Lists</span></Link>
            <Link to="/" className={`list-group-item d-inline-flex align-items-center ${active ==='profile'?'active':''}`}>
                <i className="fa fa-user"></i>
                <span className="d-none d-xl-block ms-3">Profile</span></Link>
            <a href="/" className={`list-group-item d-inline-flex align-items-center ${active ==='more'?'active':''}`}>
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