import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.jpg' }
    }
) => {
    return(
        <div className="list-group-item wd-rec-account clearfix ">
            <div className="wd-account-info float-start">
                <img className="wd-rec-image-sizing float-start" src={`/pictures/${who.avatarIcon}`}></img>
                <div className="wd-account-text float-start ps-2">
                    <div className="wd-rec-account-name">
                        <strong className="text-black">{who.userName}</strong>
                        <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="wd-rec-account-handle text-black">
                        @{who.handle}
                    </div>
                </div>
            </div>
            <button className="float-end btn btn-primary mt-2 rounded-pill">Follow</button>
        </div>
    );
};
export default WhoToFollowListItem;