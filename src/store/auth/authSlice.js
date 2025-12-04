import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => {
  const token = localStorage.getItem("access_token");
  const user = localStorage.getItem("user");

  return {
    user: user ? JSON.parse(user) : null,
    token: token || null,
    refreshToken: localStorage.getItem("refresh_token") || null,
    isAuthenticated: !!token,
    isLoading: false,
    error: null,
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
