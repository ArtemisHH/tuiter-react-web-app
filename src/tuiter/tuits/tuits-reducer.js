import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';


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
            const index = state.findIndex((tuit) => tuit._id === action.payload);
            state.splice(index, 1);
        },
        replyTuit(state, action) {
          const currentTuit = state.find((tuit) => tuit._id === action.payload._id);
          currentTuit.replies += 1;
        },
        retuitTuit(state, action) {
            const currentTuit = state.find((tuit) => tuit._id === action.payload._id);
            currentTuit.retuits += 1;
        },
        likeTuit(state, action) {
            const currentTuit = state.find((tuit) => tuit._id === action.payload._id);
            if (!currentTuit.liked) {
                currentTuit.replies += 1;
                currentTuit.liked = true;
            } else {
                currentTuit.replies -= 1;
                currentTuit.liked = false;
            }
        }


    }
});
export const {createTuit, deleteTuit, replyTuit, retuitTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;