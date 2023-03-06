import React from "react";
import './index.css';
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "node.jpg"
        }
    }
) => {
    return(
        <div className="wd-tweet-container p-2 pt-3">
            <div className="wd-tweet clearfix">
                <div className="wd-tweet-content float-start col-9">
                    <div className="wd-category">
                        <strong className="text-muted">
                            {post.topic}
                        </strong>
                    </div>
                    <div className="wd-tweet-title">
                        <span className="wd-tweet-author">
                            <strong className="text-black">
                                {post.userName}
                            </strong>
                        </span>
                        <span>
                            <i className="bi bi-check2 text-black"></i>
                        </span>
                        <span className="wd-tweet-time text-muted">
                             - {post.time}
                        </span>
                    </div>
                    <div className="wd-tweet-description">
                        <strong className="text-black">
                            {post.title}
                        </strong>
                    </div>
                </div>
                <img className="float-end wd-tweet-image-sizing col-3" src={post.image}></img>
            </div>
        </div>
    );
};
export default PostSummaryItem;