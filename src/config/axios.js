import axios from 'axios'

// Base URL for your Django backend API
// Update this with your actual Django backend URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor - runs before every request
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage (or wherever you store it)
    const token = localStorage.getItem('access_token')
    
    // Add token to headers if it exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - runs after every response
axiosInstance.interceptors.response.use(
  (response) => {
    // Return response data directly
    return response
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          // window.location.href = '/signin'
          break
        case 403:
          // Forbidden
          console.error('Access forbidden')
          break
        case 404:
          // Not found
          console.error('Resource not found')
          break
        case 500:
          // Server error
          console.error('Server error')
          break
        default:
          console.error('An error occurred:', error.response.data)
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request)
    } else {
      // Something else happened
      console.error('Error:', error.message)
    }
    
    return Promise.reject(error)
  }
)

export default axiosInstance

