import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: []
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPosts: (state, action) => {
            state.posts = [...state.posts, action.payload]
        },
        removePosts: (state, action) => {
            const index = state.posts.findIndex(
                (postDel) => postDel.id === action.payload.id
            );

            let newPosts = [...state.posts];

            if(index >= 0){
                newPosts.splice(index, 1);
            }
            state.posts = newPosts;
        }
    }
})

export const { addPosts, removePosts } = postSlice.actions

export const selectPosts = (state) => state.post.posts;

export default postSlice.reducer;