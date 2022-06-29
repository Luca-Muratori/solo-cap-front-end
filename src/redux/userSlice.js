import { createSlice } from "@reduxjs/toolkit";

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
