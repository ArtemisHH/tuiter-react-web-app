import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="d-felx">
            <div class="row">
                <div class="col col-11 d-flex">
                    <i class="fa fa-search position-relative ps-3 pt-3"></i>
                    <input class="form-control-lg rounded-pill w-100 wd-searchbar ps-5 border border-secondary"
                           placeholder="Search Tuiter" value="Search Tuiter"/>
                </div>
                <div class="col col-1 d-flex justify-content-end align-items-center">
                    <a href="#" class="fa fa-cog fa-2x text-decoration-none"></a>
                </div>
           </div>
           <ul class="nav my-2 nav-tabs">
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
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div class="img-fluid flex-column mb-2">
                <img class="img-fluid" src="../../images/starship.jpg"/>
                <div class="text-over-image lh-base">
                    SpaceX's Starship
                </div>
           </div>
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
