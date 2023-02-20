import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row clearfix pb-2">
            <div id="input-group" class="wd-search-container clearfix col-11 float-start">
                <i class="pt-2 ps-3 fa-solid fa-magnifying-glass"></i>
                <input type="text" class="wd-search-field form-control" aria-label="Search Twitter">
            </div>
            <i class="col-1 float-end fa-solid fa-gear text-primary ps-3 pt-1"></i>
        </div>
        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html" tabindex="-1">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
            </li>
        </ul>
        <div id="image-container">
            <p id="image-description">SpaceX's Starship</p>
            <image class="image-sizing" src="spaceX.jpg"></image>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
