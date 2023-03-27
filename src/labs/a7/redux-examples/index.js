import React from "react";
/*import the component that consumes the data*/
import HelloReduxExampleComponent from "./hello-redux-example-component";
/*import reducer that calculates/generates the data*/
import hello from "./reducers/hello";
/*import the new reducer*/
import todos from "./reducers/todos-reducer";
/*import createStore to store data from reducers*/
/*instead of createStore, import the configureStore function*/
/*import {createStore} from "redux";*/
import {configureStore} from "@reduxjs/toolkit";
/*import Provider which will deliver the data*/
import {Provider} from "react-redux";
/*import new component to render todos*/
import Todos from "./todos-component";
/*create data storage*/
/*const store = createStore(hello);*/
/*combine all reducers into a single store each available through these namespaces*/
const store = configureStore({
    reducer: {hello, todos}
});

const ReduxExamples = () => {
    return (
        /*Provider delivers data in store to child elements*/
        <Provider store={store}>
        <div>
            <h2>Redux Examples</h2>
            <Todos/>
            <HelloReduxExampleComponent/>
        </div>
        </Provider>
    );
};

export default ReduxExamples;