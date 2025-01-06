import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
    posts : [],
    status : ''
}



export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    // try {
    //     const response = await fetch (POST_URL)
    //     const data = await response.json ()
    //     return data
    // } catch (error) {
    //     console.log(error)
    //     throw new Error ('Something went wront in the fetch of the todos')
    // }

    const response = await axios.get(POST_URL)
    return response.data
})



const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addReaction: (state, action) => {
      const { id, name } = action.payload
      state.posts.map(post => post.id === id ? post.reactions[name]++ : post)
      const post = state.posts.find(
        item => item.id === id);
      if (post) { post.reactions[name]++ }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'success'

        const loadedPosts = action.payload.map(post => {
          // post.reactions = {
          //     thumbsUp: 0,
          //     wow: 0,
          //     heart: 0,
          //     rocket: 0,
          //     coffee: 0,
          // }
          // return post
          return {
            ...post,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            }
          }
        })
        state.posts = loadedPosts
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const stateReducer = (state) => state.producer
export const postState = (state) => state.postReducer.posts;


export const {addReaction} = postSlice.actions
export default postSlice.reducer