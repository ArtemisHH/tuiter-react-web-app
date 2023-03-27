import counterReducer from "./counter-reducer";
import whoReducer from "./who-reducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    whoList: whoReducer
})

export default allReducers;