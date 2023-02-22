import React from "react";
import hpostsArray from './hposts.json';
import PostItem from "./post-item";
import RepostItem from "./repost-item";


const HomeComponent = () => {
    return (
        <ul className="list-group">
            {
                hpostsArray.map(hpost =>
                    <PostItem
                        key={hpost._id} hpost={hpost}/>)
            }
        </ul>
    );
};
export default HomeComponent;