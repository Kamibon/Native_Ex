import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { newFakeService } from './fakeServiceInt'

interface UserDto{
    id:number,
    email: string,
    password:string,
    name:string,
    avatar:string
  }

  interface PostDto{
    id:number,
    title:string,
    price:number,
    description:string,
    images: string[]
}

interface stateType{
    users: UserDto[],
    posts: PostDto[]

}

const initialState : stateType = {
       users:[],
       posts:[]
}

const dataService = newFakeService()

export const getUsers = createAsyncThunk('users/get', async(thunkApi)=>{
    return dataService.getUsers()
})

export const getPosts = createAsyncThunk('posts/get', async(thunkApi)=>{
    return dataService.getPosts()
})

export const stateSlice = createSlice({
      name:'fakeGram',
      initialState,
      reducers:{},
      extraReducers: (builder)=>builder.addCase(getUsers.fulfilled, (state, action)=> {state.users = action.payload.filter(
        (el:UserDto)=>el.id<30);
        
      }).
      addCase(getPosts.fulfilled, (state, action)=> {state.posts = (action.payload).filter((el:PostDto)=>el.id<100)})

})

export default stateSlice.reducer