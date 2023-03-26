import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import {createStore} from "redux";
import {Provider} from "react-redux"; // get the reducer
import todos from "./reducers/todos-reducer"; // get the other reducer
import {configureStore} from "@reduxjs/toolkit";
import Todos from "./todos-component";
// initialize both reducers in the store
const store = configureStore({
    reducer: {hello, todos}
})
const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <HelloReduxExampleComponent/>
                {/*// this component requires data from a store*/}
                {/*// must pass data from the store down from this context*/}
                <Todos />
            </div>
        </Provider>
    );
};

export default ReduxExamples;