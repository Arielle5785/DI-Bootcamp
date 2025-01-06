import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import Posts from '../../posts/state/Posts'

const POST_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
    users : [],
    status : ''
}



export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
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



const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      const { id, name } = action.payload
      state.users.map(user => user.id === id ? post: user)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'success'

        const loadedUsers = action.payload.map(user => {
          // post.reactions = {
          //     thumbsUp: 0,
          //     wow: 0,
          //     heart: 0,
          //     rocket: 0,
          //     coffee: 0,
          // }
          // return post
          return {
            ...user,
            Posts
          }
        })
        state.users = loadedUsers
      })
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUsrs.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const {addPosts} = userSlice.actions
export default usersSlice.reducer