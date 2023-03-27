import explorePosts from "../data/posts.js";
import {createSlice} from "@reduxjs/toolkit";

const explorePostsSlice = createSlice({
    name: 'explorePosts',
    initialState: explorePosts
});

export default explorePostsSlice.reducer;
