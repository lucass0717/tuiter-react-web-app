import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {updateTuitLikes} from "../reducers/tuits-reducer";

const TuitStats = ({tuit}) => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData);

    const dispatch = useDispatch();
    const updateLikesTuitHandler = (tuit) => {
        let updatedTuit = {
            ...tuit,
            likes: tuit.likes + 1
        }

        dispatch(updateTuitThunk(updatedTuit));
    };

    const updateDislikesTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1
        }));
    };

    return(
        <div className="row">
            <div className="col-2">
                <i className="bi bi-chat pe-2"></i>
                {tuit.replies}
            </div>
            <div className="col-2">
                <i className="bi bi-arrow-repeat pe-2"></i>
                {tuit.retuits}
            </div>
            <div className="col-3">
                <i onClick={ () => updateLikesTuitHandler(tuit)}
                   className={`bi bi-heart-fill text-danger pe-2`}></i>
                {tuit.likes}
            </div>
            <div className={"col-3"}>
                <i onClick={() => updateDislikesTuitHandler(tuit)}
                   className="bi bi-hand-thumbs-down px-2"></i>
                {tuit.dislikes}
            </div>
            <div className="col-2 float-end">
                <i className="bi bi-share-fill"></i>
            </div>
        </div>
    );
};

export default TuitStats;