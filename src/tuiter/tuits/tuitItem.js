import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuitStats";

const TuitItem = (
    {
        tuit = {
            _id: 234,
            topic: 'Space',
            userName: 'SpaceX',
            time: '2h',
            title: '100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1',
            image: 'spacex.png',
            liked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
            dislikes: 123,
            handle: '@spacex',
            tuit: 'You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars'
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        console.log(id);
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className={"row"}>
                <div className="col-auto">
                    <img width={50}
                         className="float-end rounded-circle"
                         src={"/pictures/" + tuit.image}>
                    </img>
                </div>
                <div className="float-end col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div>
                        <strong className="pe-2">
                            {tuit.userName}
                        </strong>
                        <i className="bi bi-check-circle-fill pe-2"></i>
                        <span>· </span>
                        {tuit.handle} {tuit.time}
                    </div>

                    <div>
                        {tuit.tuit}
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;