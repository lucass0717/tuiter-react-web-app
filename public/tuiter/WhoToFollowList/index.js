import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return (`
        <strong class="text-white pt-4">Who to follow</strong>
        <ul class="list-group pt-3">
            ${
                who.map(whoData => {
                    return(WhoToFollowListItem(whoData));
                }).join("")
            }
        </ul>
    `);
}

export default WhoToFollowList;