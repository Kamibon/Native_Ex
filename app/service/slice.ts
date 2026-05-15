import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newFakeService } from "./fakeServiceInt";
import { Room } from "@/data/messages";

export interface UserDto {
  id: number;
  email: string;
  password: string;
  name: string;
  avatar: string;
}

export interface PostDto {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export interface creationPost {
  id: Number;
  imageUri: string;
  description: string;
}

interface stateType {
  users: UserDto[];
  posts: PostDto[];
  postCreationStatus: "success" | "failure" | "idle";

  rooms: Room[];
}

const initialState: stateType = {
  users: [],
  posts: [],
  postCreationStatus: "idle",

  rooms: [
    {
      room_id: 200,
      room_users: [1, 2],
      message_list: [
        {
          s_userId: 1,
          text: "Ehila",
          time: "18:55",
        },
        {
          s_userId: 2,
          text: "Salve",
          time: "18:57",
        },
        {
          s_userId: 1,

          text: "Come va?",
          time: "18:59",
        },
      ],
    },
    {
      room_id: 201,
      room_users: [1, 3],
      message_list: [
        {
          s_userId: 1,

          text: "Ehi John?",
          time: "19.21",
        },
      ],
    },
    {
      room_id: 202,
      room_users: [2, 3],
      message_list: [
        {
          s_userId: 2,

          text: "Ehi Maria?",
          time: "19.21",
        },
        {
          s_userId: 3,

          text: "Ci vediamo presto!",
          time: "19.44",
        },
      ],
    },
  ],
};

const dataService = newFakeService();

export const getUsers = createAsyncThunk("users/get", async (thunkApi) => {
  return dataService.getUsers();
});

export const getPosts = createAsyncThunk("posts/get", async (thunkApi) => {
  return dataService.getPosts();
});

export const createPost = createAsyncThunk(
  "posts/post",
  async (body: creationPost, thunkApi) => {
    return dataService.createPost(body);
  },
);

export const stateSlice = createSlice({
  name: "fakeGram",
  initialState,
  reducers: {
    resetPostCreationStatus(state) {
      state.postCreationStatus = "idle";
    },
    addMessage(state, action) {
      const { s_userId, time, text } = action.payload;
      state.rooms
        .find((el) => el.room_id == action.payload.room_id)
        ?.message_list.push({ s_userId, time, text });
    },
    loadPost(state, action) {
      const { id, imageUri, description } = action.payload;
      const newPost: PostDto = {
        id,
        description,
        images: [imageUri],
        title: "New Post",
        price: 0,
      };
      state.posts.push(newPost);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload.filter((el: UserDto) => el.id < 30);
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload.filter((el: PostDto) => el.id < 100);
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.postCreationStatus = "success";
      }),
});

export default stateSlice.reducer;
export const { addMessage, loadPost, resetPostCreationStatus } =
  stateSlice.actions;
