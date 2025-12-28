import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => {
  const token = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");

  return {
    user: null,
    token: token || null,
    refreshToken: refreshToken || null,
    isAuthenticated: !!token,
    isLoginModalOpen: false
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    setCredentials: (state, action) => {
      const { access_token, refresh_token } = action.payload;
      state.token = access_token;
      state.refreshToken = refresh_token || null;
      state.isAuthenticated = true;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);


    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoginModalOpen: (state, action) => {
      state.isLoginModalOpen = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;

      // Clear localStorage
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },


  },
});

export const { setCredentials, logout, setIsLoginModalOpen } = authSlice.actions;

export default authSlice.reducer;
