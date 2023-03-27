import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitLikes} from "../reducers/tuits-reducer";

const TuitStats = (props) => {
    const {tuit} = props;
    const dispatch = useDispatch();
    const updateLikesTuitHandler = (id) => {
        dispatch(updateTuitLikes(id));
    }
    return(
        <div className="row">
            <div className="col-3">
                <i className="bi bi-chat pe-2"></i>
                {tuit.replies}
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat pe-2"></i>
                {tuit.retuits}
            </div>
            <div className="col-3"
                onClick={ () => updateLikesTuitHandler(tuit._id)}>
                <i className={`bi bi-heart${tuit.liked ? '-fill' : ''} pe-2`}></i>
                {tuit.likes}
            </div>
            <div className="col-3">
                <i className="bi bi-share-fill"></i>
            </div>
        </div>
    );
};

export default TuitStats;