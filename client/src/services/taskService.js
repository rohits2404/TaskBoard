import api from './api';

export const taskService = {
    // Get all tasks
    getTasks: async (filters = {}) => {
        const params = new URLSearchParams(filters).toString();
        return await api.get(`/tasks${params ? `?${params}` : ''}`);
    },

    // Get task by ID
    getTaskById: async (id) => {
        return await api.get(`/tasks/${id}`);
    },

    // Create task
    createTask: async (taskData) => {
        return await api.post('/tasks', taskData);
    },

    // Update task
    updateTask: async (id, taskData) => {
        return await api.put(`/tasks/${id}`, taskData);
    },

    // Delete task
    deleteTask: async (id) => {
        return await api.delete(`/tasks/${id}`);
    },

    // Get task statistics
    getTaskStats: async () => {
        return await api.get('/tasks/stats');
    },
};