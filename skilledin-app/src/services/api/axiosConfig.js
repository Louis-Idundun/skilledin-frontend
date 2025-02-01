import axios from 'axios';

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://your-backend-api.com', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authentication token or other headers here
    const token = localStorage.getItem('token'); // Example: Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response && error.response.status === 401) {
      // Redirect to login if unauthorized
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;