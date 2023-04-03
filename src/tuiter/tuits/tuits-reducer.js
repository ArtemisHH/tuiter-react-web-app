import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
/*import {deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";*/
/*import {useSelector} from "react-redux";*/

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpg",
};
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        },
        replyTuit(state, action) {
          const tuit = state.find(tuit => tuit._id === action.payload._id);
          return {
              ...tuit,
              replies: tuit.replies + 1,
          }
        },
        retuitTuit(state, action) {
            const tuit = state.find(tuit => tuit._id === action.payload._id);
            return {
                ...tuit,
                retuits: tuit.retuits + 1,
            }
        },
        likeTuit(state, action) {
            const tuit = state.find(tuit => tuit._id === action.payload._id);
            if (!tuit.liked) {
                return {
                    ...tuit,
                    likes: tuit.likes + 1,
                    liked: true,
                }

            } else {
                return {
                    ...tuit,
                    likes: tuit.likes - 1,
                    liked: false,
                }
            }
        }
    }
});
export const {createTuit, deleteTuit, replyTuit, retuitTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;