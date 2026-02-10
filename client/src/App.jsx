import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Navbar } from './components/Navbar';
import { AnimatedBackground } from './components/AnimatedBackground';

// Pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Dashboard/Profile';
import TaskForm from './pages/Dashboard/TaskForm';

function App() {
    return (
        <AuthProvider>
            <AnimatedBackground />
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
        
                {/* Protected Routes */}
                <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                    <div className="min-h-screen">
                        <Navbar />
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <Dashboard />
                        </div>
                    </div>
                    </ProtectedRoute>
                }
                />
        
                <Route
                path="/dashboard/profile"
                element={
                    <ProtectedRoute>
                    <div className="min-h-screen">
                        <Navbar />
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <Profile />
                        </div>
                    </div>
                    </ProtectedRoute>
                }
                />
        
                <Route
                path="/dashboard/tasks/new"
                element={
                    <ProtectedRoute>
                    <div className="min-h-screen">
                        <Navbar />
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <TaskForm />
                        </div>
                    </div>
                    </ProtectedRoute>
                }
                />
        
                <Route
                path="/dashboard/tasks/:id/edit"
                element={
                    <ProtectedRoute>
                    <div className="min-h-screen">
                        <Navbar />
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <TaskForm />
                        </div>
                    </div>
                    </ProtectedRoute>
                }
                />
        
                {/* Redirect root to dashboard if authenticated, else to login */}
                <Route
                path="/"
                element={<Navigate to="/dashboard" replace />}
                />
        
                {/* 404 */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;