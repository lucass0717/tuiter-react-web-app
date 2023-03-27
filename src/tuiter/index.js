import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
// IMPORT REDUCERS
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import exploreReducer from "./reducers/explore-reducer";

// PROVIDER
import {Provider} from "react-redux";

// IMPORT STORE AND INITIALIZE STORE
import { configureStore }
    from '@reduxjs/toolkit';
import HomeComponent from "./home";
import {Route, useParams} from "react-router";
import Explore from "./explore";
const store = configureStore({
    reducer: {who: whoReducer, tuits:tuitsReducer, explorePosts:exploreReducer}
});


function Tuiter() {
    const {page} = useParams();

    const renderMainPage = (page) => {
        if(page === 'explore') {
            return <ExploreComponent/>
        }
        return <HomeComponent/>
    }

    return (
        <Provider store = {store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="Explore"/>

                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    {renderMainPage(page)}
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter