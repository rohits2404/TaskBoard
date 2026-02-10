import api from './api';

export const authService = {
    // Register user
    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response));
        }
        return response;
    },

    // Login user
    login: async (credentials) => {
        const response = await api.post('/auth/login', credentials);
        if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response));
        }
        return response;
    },

    // Get current user
    getCurrentUser: async () => {
        const response = await api.get('/auth/me');
        return response;
    },

    // Update profile
    updateProfile: async (userData) => {
        const response = await api.put('/auth/update', userData);
        if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response));
        }
        return response;
    },

    // Logout
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    // Check if user is authenticated
    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },

    // Get stored user data
    getStoredUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },
};