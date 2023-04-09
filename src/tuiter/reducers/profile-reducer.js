import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {
    _id: 1,
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePic: 'profile1.jpg',
    bannerPic: 'header.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223
}

const profileSlice = createSlice({
    name: "user",
    initialState: initialProfile,
    reducers: {
        updateProfile: (state, action) => {
            const {firstName, lastName, bio} = action.payload;
            return {
                ...state,
                firstName,
                lastName,
                bio,
            }
        }
    }

});


export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;