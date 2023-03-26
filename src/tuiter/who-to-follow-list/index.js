import React from "react";
import WhoToFollowListItem
    from "./who-to-follow-list-item";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
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