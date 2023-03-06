import React from "react";
import whoArray from './who.js';
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <>
            <div className={"pb-3"}><strong className="text-black pt-4">Who to follow</strong></div>

            <ul className="list-group">
                {
                    whoArray.map(who =>
                        <WhoToFollowListItem
                            key={who._id}
                            who={who}/>
                    )
                }
            </ul>

        </>
    );
};

export default WhoToFollowList;