import React from "react";
// import TuitsList from "../tuits/tuits-list";
import TuitItem from "../tuits/tuitItem";
import TuitList from "../tuits/tuitList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;