import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  User, 
  Mail, 
  Camera, 
  Save, 
  Shield, 
  Calendar,
  Clock,
  Edit,
  X,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

const profileSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    avatar: z.string().url('Invalid URL').optional(),
});

const Profile = () => {

    const { user, updateProfile } = useAuth();
  
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState(user?.avatar || '');
    const [accountStats, setAccountStats] = useState({
        lastLogin: user?.lastLogin,
        memberSince: user?.createdAt,
        tasksCompleted: 0,
        totalTasks: 0,
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty },
        watch,
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            avatar: user?.avatar || '',
        },
    });

    const watchedAvatar = watch('avatar');

    useEffect(() => {
        if (watchedAvatar) {
            setAvatarPreview(watchedAvatar);
        }
    }, [watchedAvatar]);

    useEffect(() => {
        // In a real app, you would fetch these stats from the backend
        setAccountStats({
            lastLogin: user?.lastLogin,
            memberSince: user?.createdAt,
            tasksCompleted: 42, // Mock data
            totalTasks: 68, // Mock data
        });
    }, [user]);

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            await updateProfile(data);
            setIsEditing(false);
            toast.success('Profile updated successfully!');
        } catch (error) {
            toast.error(error.message || 'Failed to update profile');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        reset({
            name: user?.name || '',
            email: user?.email || '',
            avatar: user?.avatar || '',
        });
        setIsEditing(false);
        setAvatarPreview(user?.avatar || '');
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result);
                // In a real app, you would upload to cloud storage and get URL
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen pb-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold gradient-text">Profile Settings</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Manage your account settings and preferences
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="dashboard-card">
                            {/* Avatar Section */}
                            <div className="flex flex-col items-center mb-6">
                                <div className="relative group mb-4">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                                        <img
                                        src={avatarPreview || `https://ui-avatars.com/api/?name=${user?.name}&background=667eea&color=fff`}
                                        alt={user?.name}
                                        className="w-full h-full object-cover"
                                        />
                                    </div>
                  
                                    {isEditing && (
                                        <label className="absolute bottom-2 right-2 w-10 h-10 bg-linear-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                                            <Camera className="w-5 h-5 text-white" />
                                            <input
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleAvatarChange}
                                            />
                                        </label>
                                    )}
                                </div>

                                <h2 className="text-2xl font-bold text-center">{user?.name}</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-center mt-1">
                                    {user?.email}
                                </p>
                                <div className="mt-2 px-4 py-1 bg-linear-to-r from-primary-500/10 to-purple-500/10 rounded-full">
                                    <span className="text-sm font-medium gradient-text">
                                        {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                                    </span>
                                </div>
                            </div>

                            {/* Account Stats */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg flex items-center">
                                    <Shield className="w-5 h-5 mr-2 text-primary-500" />
                                    Account Information
                                </h3>
                
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Member Since</span>
                                        <span className="font-medium">
                                            {accountStats.memberSince 
                                                ? format(new Date(accountStats.memberSince), 'MMM dd, yyyy')
                                                : 'N/A'
                                            }
                                        </span>
                                    </div>
                  
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Last Login</span>
                                        <span className="font-medium">
                                            {accountStats.lastLogin 
                                                ? format(new Date(accountStats.lastLogin), 'MMM dd, yyyy HH:mm')
                                                : 'N/A'
                                            }
                                        </span>
                                    </div>
                  
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Tasks Completed</span>
                                        <span className="font-medium">{accountStats.tasksCompleted} / {accountStats.totalTasks}</span>
                                    </div>
                  
                                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-gray-600 dark:text-gray-400">Completion Rate</span>
                                            <span className="font-medium">
                                                {accountStats.totalTasks > 0 
                                                ? Math.round((accountStats.tasksCompleted / accountStats.totalTasks) * 100)
                                                : 0
                                                }%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                            className="h-full gradient-bg rounded-full transition-all duration-500"
                                            style={{
                                                width: `${accountStats.totalTasks > 0 
                                                    ? Math.round((accountStats.tasksCompleted / accountStats.totalTasks) * 100)
                                                    : 0
                                                }%`
                                            }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Security Status */}
                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <h4 className="font-semibold mb-3 flex items-center">
                                    <Shield className="w-5 h-5 mr-2 text-green-500" />
                                    Security Status
                                </h4>
                                <div className="space-y-2">
                                    <div className="flex items-center text-green-500">
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        <span className="text-sm">Email verified</span>
                                    </div>
                                    <div className="flex items-center text-green-500">
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        <span className="text-sm">Strong password</span>
                                    </div>
                                    <div className="flex items-center text-amber-500">
                                        <AlertCircle className="w-4 h-4 mr-2" />
                                        <span className="text-sm">2FA not enabled</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-2">
                        <div className="dashboard-card">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold">Personal Information</h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Update your personal details here
                                    </p>
                                </div>
                
                                <button
                                onClick={() => setIsEditing(!isEditing)}
                                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                                    isEditing 
                                    ? 'bg-linear-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white'
                                    : 'btn-primary'
                                }`}
                                >
                                    {isEditing ? (
                                        <>
                                            <X className="w-4 h-4 mr-2" />
                                            Cancel Editing
                                        </>
                                    ) : (
                                        <>
                                            <Edit className="w-4 h-4 mr-2" />
                                            Edit Profile
                                        </>
                                    )}
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                        {...register('name')}
                                        type="text"
                                        className="input-field pl-10"
                                        placeholder="John Doe"
                                        disabled={!isEditing}
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                        {...register('email')}
                                        type="email"
                                        className="input-field pl-10"
                                        placeholder="you@example.com"
                                        disabled={!isEditing}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Avatar URL */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Avatar URL
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Camera className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                        {...register('avatar')}
                                        type="url"
                                        className="input-field pl-10"
                                        placeholder="https://example.com/avatar.jpg"
                                        disabled={!isEditing}
                                        />
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Enter a direct image URL or upload using the camera icon
                                    </p>
                                    {errors.avatar && (
                                        <p className="mt-1 text-sm text-red-500">{errors.avatar.message}</p>
                                    )}
                                </div>

                                {/* Save Button */}
                                {isEditing && (
                                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                        <div className="flex items-center justify-between">
                                            <button
                                                type="button"
                                                onClick={handleCancel}
                                                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                                                        bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
                                                        text-gray-700 dark:text-gray-300 active:scale-95"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isLoading || !isDirty}
                                                className="btn-primary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isLoading ? (
                                                    <div className="flex items-center">
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                                        Saving...
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Save className="w-5 h-5 mr-2" />
                                                        Save Changes
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </form>

                            {/* Security Section */}
                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold mb-6 flex items-center">
                                    <Shield className="w-6 h-6 mr-2 text-primary-500" />
                                    Security Settings
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Change Password */}
                                    <div className="dashboard-card">
                                        <h4 className="font-semibold mb-4">Change Password</h4>
                                        <div className="space-y-4">
                                            <input
                                                type="password"
                                                className="input-field"
                                                placeholder="Current Password"
                                                disabled
                                            />
                                            <input
                                                type="password"
                                                className="input-field"
                                                placeholder="New Password"
                                                disabled
                                            />
                                            <input
                                                type="password"
                                                className="input-field"
                                                placeholder="Confirm New Password"
                                                disabled
                                            />
                                            <button
                                                className="btn-secondary w-full"
                                                onClick={() => toast.success('Password change feature coming soon!')}
                                            >
                                                Update Password
                                            </button>
                                        </div>
                                    </div>

                                    {/* Two-Factor Authentication */}
                                    <div className="dashboard-card">
                                        <h4 className="font-semibold mb-4">Two-Factor Authentication</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                            Add an extra layer of security to your account
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center text-amber-500 mb-1">
                                                    <AlertCircle className="w-4 h-4 mr-2" />
                                                    <span className="text-sm font-medium">Not Enabled</span>
                                                </div>
                                                <p className="text-xs text-gray-500">Enable for better security</p>
                                            </div>
                                            <button
                                                className="btn-primary text-sm px-4 py-2"
                                                onClick={() => toast.success('2FA setup coming soon!')}
                                            >
                                                Enable 2FA
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Activity Log */}
                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold mb-6 flex items-center">
                                    <Calendar className="w-6 h-6 mr-2 text-primary-500" />
                                    Recent Activity
                                </h3>

                                <div className="space-y-4">
                                    {[
                                        { action: 'Logged in', time: '2 hours ago', icon: '🟢' },
                                        { action: 'Updated profile', time: '1 day ago', icon: '✏️' },
                                        { action: 'Created new task', time: '2 days ago', icon: '➕' },
                                        { action: 'Completed task', time: '3 days ago', icon: '✅' },
                                    ].map((activity, index) => (
                                        <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 dark:bg-gray-800/50 hover:bg-white/10 dark:hover:bg-gray-700/50 transition-colors"
                                        >
                                            <div className="flex items-center">
                                                <span className="text-xl mr-3">{activity.icon}</span>
                                                <div>
                                                    <p className="font-medium">{activity.action}</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                                                        <Clock className="w-3 h-3 mr-1" />
                                                        {activity.time}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-xs px-2 py-1 rounded-full bg-primary-500/10 text-primary-500">
                                                Active
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;