import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";
/*import {useSelector} from "react-redux";*/

const initialState = {
    tuits: [],
    loading: false
}
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
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    /*reducers: {
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
          const tuit = state.find((tuit) => tuit._id === action.payload._id)
            tuit.replies += 1;
        },
        retuitTuit(state, action) {
            const tuit = state.find((tuit) => tuit._id === action.payload._id)
            tuit.retuits += 1;
        },
        likeTuit(state, action) {
            const tuit = state.find((tuit) => tuit._id === action.payload._id)
            if (!tuit.liked) {
                tuit.likes += 1;
                tuit.liked = true;
            } else {
                tuit.likes -= 1;
                tuit.liked = false;
            }
        }
    }*/
});

export const {createTuit, deleteTuit, replyTuit, retuitTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;