

const WhoToFollowListItem = (who) => {
    console.log("hellow");
    return(`
        <div class="wd-rec-account clearfix py-2">
            <div class="wd-account-info float-start">
                <image class="wd-rec-image-sizing float-start" src=${who.avatarIcon}></image>
                <div class="wd-account-text float-start ps-2">
                    <div class="wd-rec-account-name">
                        <strong class="text-white">${who.userName}</strong>
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="wd-rec-account-handle text-white">
                        @${who.handle}
                    </div>
                </div>
            </div>
            <button class="float-end btn btn-primary mt-2 me-3 rounded-pill">Follow</button>
        </div>
    `);
}

export default WhoToFollowListItem;