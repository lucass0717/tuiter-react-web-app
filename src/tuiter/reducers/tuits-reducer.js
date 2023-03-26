import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/posts.js';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits
});

export default tuitsSlice.reducer;