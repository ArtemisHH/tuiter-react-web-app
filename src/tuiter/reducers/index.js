import counterReducer from "./counter-reducer";
import whoReducer from "./who-reducer";
import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";

const allReducers = combineReducers({
    counter: counterReducer,
    whoList: whoReducer,
    user: profileReducer,
})

export default allReducers;