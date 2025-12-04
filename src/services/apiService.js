import axiosInstance from '../config/axios'

/**
 * Generic API Service
 * Use this as a template for other API services
 */

// Example: Get all items
export const getAllItems = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// Example: Get single item by ID
export const getItemById = async (endpoint, id) => {
  try {
    const response = await axiosInstance.get(`${endpoint}/${id}/`)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// Example: Create new item
export const createItem = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// Example: Update item
export const updateItem = async (endpoint, id, data) => {
  try {
    const response = await axiosInstance.put(`${endpoint}/${id}/`, data)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// Example: Delete item
export const deleteItem = async (endpoint, id) => {
  try {
    const response = await axiosInstance.delete(`${endpoint}/${id}/`)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

// Example: Custom request
export const customRequest = async (method, endpoint, data = null, config = {}) => {
  try {
    const response = await axiosInstance.request({
      method,
      url: endpoint,
      data,
      ...config,
    })
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

