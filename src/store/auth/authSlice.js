import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => {
  const token = localStorage.getItem("access_token");
  const user = localStorage.getItem("user");

  return {
    user: user ? JSON.parse(user) : null,
    token: token || null,
    refreshToken: localStorage.getItem("refresh_token") || null,
    isAuthenticated: !!token,
 
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    setCredentials: (state, action) => {
      const { user, access_token, refresh_token } = action.payload;
      state.user = user || null;
      state.token = access_token;
      state.refreshToken = refresh_token || null;
      state.isAuthenticated = true;

      // Persist to localStorage
      if (access_token) {
        localStorage.setItem("access_token", access_token);
      }
      if (refresh_token) {
        localStorage.setItem("refresh_token", refresh_token);
      }
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;

      // Clear localStorage
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setCredentials, logout, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;
