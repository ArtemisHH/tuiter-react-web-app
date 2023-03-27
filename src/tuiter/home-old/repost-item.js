import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css"

const RepostItem = (
    {
        repost= {
                "_id": 345,
                "avatarIcon": "spacex.png",
                "userName": "SpaceX",
                "handle": "SpaceX",
                "time": "15h",
                "tuitLink": "starlink.com/tv",
                "image": "",
                "content": "Starlink for RV's now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage",

        }
    }

) => {
    return(
        <li className="list-group-item rounded-5">
            <div className="d-flex align-items-center">
                <img className="wd-repost-avatar me-2" src={`/images/${repost.avatarIcon}`} alt=''/>
                <div className="d-flex justify-content-between">
                <div>{repost.userName}
                    <span className="fa-stack override-bs fa-fw">
                        <i className="fa-solid fa-stack-1x fa-certificate text-primary"></i>
                        <i className="fa fa-stack-1x fa-check fa-xs fa-inverse"></i>
                    </span>
                    <span className="text-muted small">@{repost.handle} · {repost.time}</span>
                </div>
                </div>
            </div>
            {repost.content}
            {repost.tuitLink && <span><i className="fa fa-arrow-right mx-1"></i>{repost.tuitLink}</span>}
            {!repost.tuitLink && ''}
            {repost.image && <img className="rounded-5 mt-2 w-100" src={`/images/${repost.image}`} alt=''/>}
        </li>
    );
};
export default RepostItem;
