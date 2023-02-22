import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import repostItem from "./repost-item";
import RepostItem from "./repost-item";

const PostItem = (

    {
        hpost= {
            "avatarIcon": "spacex.png",
            "userName": "SpaceX",
            "handle": "SpaceX",
            "time": "23h",
            "tuitLink": "spacex.com/updates",
            "image": "titos.jpeg",
            "repost": "",
            "content": "Dennis and Akikoo Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon",
            "commentNo": "595",
            "repostNo": "1,168",
            "likeNo": "11.1K"
        }
    }

) => {
    return(
        <li className="list-group-item">
           <div className="row mt-2">
               <div className="col-2">
                   <img className="wd-avatar-img" src={`/images/${hpost.avatarIcon}`}/>
               </div>
               <div className="col-10">
                    <div className="d-flex justify-content-between">
                        <div className="col-11">{hpost.userName}
                            <span className="fa-stack override-bs fa-fw">
                                <i className="fa-solid fa-stack-1x fa-certificate text-primary"></i>
                                <i className="fa fa-stack-1x fa-check fa-xs fa-inverse"></i>
                            </span>
                            <span className="text-muted small">@{hpost.handle} · {hpost.time}</span>
                        </div>
                        <a className="float-end" href="/" className="text-muted"><i className="fa fa-ellipsis"></i></a>
                    </div>
                    {hpost.content}
                    {hpost.tuitLink && <span className="text-primary"><i className="fa fa-arrow-right text-black mx-1"></i>{hpost.tuitLink}</span>}
                    {!hpost.tuitLink && ''}
                    {hpost.image && <img className="rounded-5 mt-2 w-100" src={`/images/${hpost.image}`}/>}
                    {!hpost.image && ''}
                    {hpost.repost && <RepostItem/>}
                    {!hpost.repost && ''}
                    <div className="d-flex text-muted my-2">
                        <div className="flex-fill">
                            <i className="far fa-comment"></i>
                            <span className="mx-2">{hpost.commentNo}</span>
                        </div>
                        <div className="flex-fill">
                            <i className="fa fa-retweet"></i>
                            <span className="mx-2">{hpost.repostNo}</span>
                        </div>
                        <div className="flex-fill">
                            <i className="far fa-heart"></i>
                            <span className="mx-2">{hpost.likeNo}</span>
                        </div>
                        <div className="flex-fill">
                            <i className="fas fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>
                   { hpost.tuitLink && <a href={hpost.tuitLink} className="text-decoration-none">Show this thread</a>}
                   {!hpost.tuitLink && ''}
                </div>
           </div>
        </li>
    );
};
export default PostItem;
