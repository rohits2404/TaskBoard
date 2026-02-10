import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { AnimatedBackground } from '../../components/AnimatedBackground';

const loginSchema = z.object({
    email: z.email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            await login(data);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            <AnimatedBackground />
      
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-linear-to-r from-primary-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-linear-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-2xl"></div>
      
            <div className="w-full max-w-md relative z-10">
                {/* Card */}
                <div className="glass-effect rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <LogIn className="text-white" size={32} />
                        </div>
                        <h2 className="text-3xl font-bold gradient-text mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Sign in to your account to continue
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                {...register('password')}
                                type={showPassword ? 'text' : 'password'}
                                className="input-field pl-10 pr-10"
                                placeholder="••••••••"
                                />
                                <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                    Remember me
                                </label>
                            </div>
                            <Link
                                to="/forgot-password"
                                className="text-sm font-medium text-primary-600 hover:text-primary-500"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-primary w-full py-3 flex items-center justify-center"
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                Signing in...
                                </div>
                            ) : (
                                <>
                                <LogIn className="w-5 h-5 mr-2" />
                                Sign In
                                </>
                            )}
                        </button>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                                Or continue with
                                </span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                            type="button"
                            className="btn-secondary flex items-center justify-center"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.695 32.657 29.24 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                                    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 16.108 19.003 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                                    <path fill="#4CAF50" d="M24 44c5.183 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.216 0-9.656-3.314-11.278-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                                    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.07 12.07 0 0 1-4.084 5.571l6.19 5.238C36.971 41.205 44 36 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                                </svg>
                                Google
                            </button>
                            <button
                                type="button"
                                className="btn-secondary flex items-center justify-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </button>
                        </div>

                        {/* Sign up link */}
                        <div className="text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Don't have an account?{' '}
                                <Link
                                to="/register"
                                className="font-medium text-primary-600 hover:text-primary-500"
                                >
                                    Sign up for free
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Features */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 rounded-xl glass-effect">
                        <div className="text-primary-600 font-bold text-lg">100%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Secure</div>
                    </div>
                    <div className="p-4 rounded-xl glass-effect">
                        <div className="text-primary-600 font-bold text-lg">24/7</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                    </div>
                    <div className="p-4 rounded-xl glass-effect">
                        <div className="text-primary-600 font-bold text-lg">1M+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Users</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;