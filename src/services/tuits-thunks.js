import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
});
const currentUser = {
        "userName": "NASA",
        "handle": "@nasa",
        "image": "nasa.jpg",
};

const templateTuit = {
        ...currentUser,
        "topic": "Space",
        "time": "0h",
        "liked": false,
        "replies": 0,
        "retuits": 0,
        "likes": 0,
        "dislikes": 0
}
export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuitData) => {
        const {likes, liked, _id, tuit} = tuitData;
        const newTuit = await service.createTuit({...templateTuit, likes, liked, _id, tuit})
        return newTuit;
});

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuitData) => {
                await service.updateTuit(tuitData);
                return tuitData;
        }

    );
