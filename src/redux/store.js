import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../slice/resumeSlice.js";
import authReducer from "../slice/authSlice.js";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
     auth: authReducer,
  },
});