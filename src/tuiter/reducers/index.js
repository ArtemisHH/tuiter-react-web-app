
import whoReducer from "./who-reducer";
import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";

const allReducers = combineReducers({
    whoList: whoReducer,
    user: profileReducer,
})

export default allReducers;