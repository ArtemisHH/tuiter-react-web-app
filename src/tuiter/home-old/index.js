import React from "react";
import hpostsArray from './hposts.json';
import PostItem from "./post-item";


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