import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { 
  Home, 
  LayoutDashboard, 
  PlusCircle, 
  Bell, 
  Settings, 
  LogOut,
  User,
  Menu,
  X
} from 'lucide-react';

export const Navbar = () => {

    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Create Task', path: '/dashboard/tasks/new', icon: <PlusCircle size={20} /> },
        { name: 'Profile', path: '/dashboard/profile', icon: <User size={20} /> },
    ];

    return (
        <nav className="glass-effect sticky top-0 z-1000 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                            <Home className="text-white" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold gradient-text">ModernAuth</h1>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Dashboard</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                                {item.icon}
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        ))}
                        
                        {/* User Menu */}
                        <div className="flex items-center space-x-4">
                            <button className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-700/50 transition-colors">
                                <Bell size={20} />
                            </button>
                        
                            <div className="relative group">
                                <div className="flex items-center space-x-3 cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-linear-to-r from-primary-500 to-purple-500 flex items-center justify-center">
                                        <span className="font-bold text-white">
                                            {user?.name?.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">{user?.name}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
                                    </div>
                                </div>
                            
                                {/* Dropdown Menu */}
                                <div className="absolute right-0 mt-2 w-48 z-1010 dropdown-panel rounded-lg shadow-xl py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                                    <Link
                                    to="/dashboard/profile"
                                    className="flex items-center space-x-2 px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-700/50 transition-colors"
                                    >
                                        <User size={16} />
                                        <span>Profile</span>
                                    </Link>
                                    <Link
                                    to="/dashboard/settings"
                                    className="flex items-center space-x-2 px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-700/50 transition-colors"
                                    >
                                        <Settings size={16} />
                                        <span>Settings</span>
                                    </Link>
                                    <button
                                    onClick={handleLogout}
                                    className="flex items-center space-x-2 px-4 py-2 text-red-500 hover:bg-red-500/10 w-full transition-colors"
                                    >
                                        <LogOut size={16} />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/50"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden glass-effect rounded-lg mt-2 p-4">
                        <div className="space-y-4">
                            {navItems.map((item) => (
                                <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/50 transition-colors"
                                >
                                    {item.icon}
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-linear-to-r from-primary-500 to-purple-500 flex items-center justify-center">
                                        <span className="font-bold text-white">
                                        {user?.name?.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{user?.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
                                    </div>
                                </div>
                                <button
                                onClick={handleLogout}
                                className="flex items-center space-x-2 text-red-500 hover:bg-red-500/10 w-full p-2 rounded-lg transition-colors"
                                >
                                    <LogOut size={16} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};