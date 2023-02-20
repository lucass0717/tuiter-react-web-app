const PostSummaryItem = (post) => {
    return(`
        <div class="wd-tweet-container pt-3">
            <div class="wd-tweet clearfix">
                <div class="wd-tweet-content float-start col-9">
                    <div class="wd-category">
                        <strong class="text-muted">
                            ${post.topic}
                        </strong>
                    </div>
                    <div class="wd-tweet-title">
                        <span class="wd-tweet-author">
                            <strong class="text-white">
                                ${post.userName}
                            </strong>
                        </span>
                        <span>
                            <i class="fa-solid fa-check text-white"></i>
                        </span>
                        <span class="wd-tweet-time text-muted">
                             - ${post.time}
                        </span>
                    </div>
                    <div class="wd-tweet-description">
                        <strong class="text-white">
                            ${post.title}
                        </strong>
                    </div>
                </div>
                <image class="float-end wd-tweet-image-sizing col-3" src=${post.image}></image>
            </div>
        </div>
    `);
}

export default PostSummaryItem;