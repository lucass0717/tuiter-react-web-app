import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuitItem";

const TuitList = () => {
    const tuitsArray = useSelector(state => state.tuits);
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitList;