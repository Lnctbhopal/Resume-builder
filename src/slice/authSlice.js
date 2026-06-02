import { createSlice } from "@reduxjs/toolkit";

const usersFromStorage =
  JSON.parse(localStorage.getItem("users")) || [];

const currentUser =
  JSON.parse(localStorage.getItem("currentUser")) || null;

const initialState = {
  users: usersFromStorage,
  currentUser: currentUser,
  isAuthenticated: currentUser ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    register: (state, action) => {
      const userExists = state.users.find(
        (user) => user.email === action.payload.email
      );

      if (userExists) {
        alert("User already exists");
        return;
      }

      state.users.push(action.payload);

      localStorage.setItem(
        "users",
        JSON.stringify(state.users)
      );

      alert("Registration Successful");
    },

    login: (state, action) => {
      const user = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );

      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;

        localStorage.setItem(
          "currentUser",
          JSON.stringify(user)
        );

        alert("Login Successful");
      } else {
        alert("Invalid Credentials");
      }
    },

    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;

      localStorage.removeItem("currentUser");
    },
  },
});

export const { register, login, logout } =
  authSlice.actions;

export default authSlice.reducer;
