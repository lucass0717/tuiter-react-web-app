import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/who.js";

const whoSlice = createSlice({
    name: "who",
    initialState: whoArray
});

export default whoSlice.reducer;