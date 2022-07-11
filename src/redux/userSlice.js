import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "user/getUser",
  async (url, thunkAPI) => {
    try {
      console.log("fetching from the userSlice");
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    _id: "",
    email: "",
    name: "",
    username: "",
    avatar: "",
    role: "",
    refreshToken: "",
    photos: [],
    userToDoList: [],
    favoritePhotos: [],
    friends: [],
    favoritePlace: [],
    comments: [],
  },
  reducers: {},
});

export default userSlice.reducer;
