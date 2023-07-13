import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  savedCourses: [],
  myCourses: [],
  changed: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    replaceUser: (state, action) => {
      state.savedCourses = action.payload.savedCourses;
      state.myCourses = action.payload.myCourses;
    },
    setUser: (state, action) => {
      if (state.email === "") {
        state.email = action.payload;
      }
    },
    setSavedCourses: (state, action) => {
      const existedCourse = state.savedCourses.find(
        (course) => course === action.payload
      );
      if (!existedCourse) {
        state.savedCourses.push(action.payload);
        state.changed = true;
      }
    },
    setMyLearning: (state, action) => {
      const existedMyLearning = state.myCourses.find(
        (course) => course === action.payload
      );
      if (!existedMyLearning) {
        state.myCourses.push(action.payload);
        state.changed = true;
      }
    },
    removeSavedCourse: (state, action) => {
      state.savedCourses = state.savedCourses.filter(
        (course) => course.id !== action.payload
      );
    },
  },
});

export const { setUser, setSavedCourses, setMyLearning, replaceUser } =
  userSlice.actions;
export default userSlice.reducer;
