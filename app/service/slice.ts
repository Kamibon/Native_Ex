import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { newFakeService } from './fakeServiceInt'

export interface UserDto{
    id:number,
    email: string,
    password:string,
    name:string,
    avatar:string
  }

 export interface PostDto{
    id:number,
    title:string,
    price:number,
    description:string,
    images: string[]
}

export interface creationPost{
    id: Number,
    imageUri: string,
    description:string
}

interface stateType{
    users: UserDto[],
    posts: PostDto[],
    postCreationStatus : 'success'| 'failure'|'idle'

}

const initialState : stateType = {
       users:[],
       posts:[],
       postCreationStatus: 'idle'
}

const dataService = newFakeService()

export const getUsers = createAsyncThunk('users/get', async(thunkApi)=>{
    return dataService.getUsers()
})

export const getPosts = createAsyncThunk('posts/get', async(thunkApi)=>{
    return dataService.getPosts()
})

export const createPost = createAsyncThunk('posts/post', async(body:creationPost, thunkApi)=>{
    return dataService.createPost(body);
})

export const stateSlice = createSlice({
      name:'fakeGram',
      initialState,
      reducers:{
        resetPostCreationStatus(state){
            state.postCreationStatus = 'idle';
        }
      },
      extraReducers: (builder)=>builder.addCase(getUsers.fulfilled, (state, action)=> {state.users = action.payload.filter(
        (el:UserDto)=>el.id<30);
        
      }).
      addCase(getPosts.fulfilled, (state, action)=> {state.posts = (action.payload).filter((el:PostDto)=>el.id<100)}).
      addCase(createPost.fulfilled, (state, action)=>{ state.postCreationStatus = 'success'})

})

export default stateSlice.reducer
export const { resetPostCreationStatus} = stateSlice.actions 