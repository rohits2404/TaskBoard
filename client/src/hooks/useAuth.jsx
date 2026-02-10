import { useState, useEffect, createContext, useContext } from 'react';
import { authService } from '../services/authService';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        if (authService.isAuthenticated()) {
            try {
                const userData = await authService.getCurrentUser();
                setUser(userData);
            } catch (error) {
                authService.logout();
            }
        }
        setLoading(false);
    };

    const login = async (credentials) => {
        try {
            setLoading(true);
            const userData = await authService.login(credentials);
            setUser(userData);
            toast.success('Login successful!');
            return userData;
        } catch (error) {
            toast.error(error.message || 'Login failed');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        try {
            setLoading(true);
            const newUser = await authService.register(userData);
            setUser(newUser);
            toast.success('Registration successful!');
            return newUser;
        } catch (error) {
            toast.error(error.message || 'Registration failed');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const updateProfile = async (userData) => {
        try {
            setLoading(true);
            const updatedUser = await authService.updateProfile(userData);
            setUser(updatedUser);
            toast.success('Profile updated successfully!');
            return updatedUser;
        } catch (error) {
            toast.error(error.message || 'Update failed');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
        toast.success('Logged out successfully');
    };

    return (
        <AuthContext.Provider
        value={{
            user,
            loading,
            login,
            register,
            updateProfile,
            logout,
            isAuthenticated: !!user,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};