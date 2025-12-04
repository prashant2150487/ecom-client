import axiosInstance from '../../config/axios'

/**
 * Authentication Service
 * Handles all authentication-related API calls
 */

// Sign up a new user
export const signup = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/register/', {
      email: userData.email,
      first_name: userData.first_name,
      last_name: userData.last_name,
      password: userData.password,
      password_confirm: userData.password_confirm,
      phone_number: userData.phone_number,
    })
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// Sign in an existing user
export const signin = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login/', {
      email: credentials.email,
      password: credentials.password,
    })
    
    // Store tokens if provided
    if (response.data.access_token) {
      localStorage.setItem('access_token', response.data.access_token)
    }
    if (response.data.refresh_token) {
      localStorage.setItem('refresh_token', response.data.refresh_token)
    }
    
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// Sign out current user
export const signout = async () => {
  try {
    await axiosInstance.post('/auth/logout/')
    // Clear tokens from localStorage
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    return true
  } catch (error) {
    // Clear tokens even if API call fails
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    throw error.response?.data || error.message
  }
}

// Refresh access token
export const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refresh_token')
    if (!refreshToken) {
      throw new Error('No refresh token available')
    }
    
    const response = await axiosInstance.post('/auth/refresh/', {
      refresh: refreshToken,
    })
    
    if (response.data.access_token) {
      localStorage.setItem('access_token', response.data.access_token)
    }
    
    return response.data
  } catch (error) {
    // Clear tokens if refresh fails
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    throw error.response?.data || error.message
  }
}

// Get current user profile
export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get('/auth/user/')
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// Update user profile
export const updateProfile = async (userData) => {
  try {
    const response = await axiosInstance.put('/auth/user/', userData)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// Request password reset
export const requestPasswordReset = async (email) => {
  try {
    const response = await axiosInstance.post('/auth/password/reset/', {
      email,
    })
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// Reset password with token
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axiosInstance.post('/auth/password/reset/confirm/', {
      token,
      password: newPassword,
    })
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// Verify email with token
export const verifyEmail = async (token) => {
  try {
    const response = await axiosInstance.post('/auth/token/verify/', {
      token,
    })
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

