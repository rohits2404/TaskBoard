import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User, Mail, Lock, Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react';
import { AnimatedBackground } from '../../components/AnimatedBackground.jsx';

const registerSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.email('Invalid email address'),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters')
        .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Must contain at least one number'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

const Register = () => {

    const { register: registerUser } = useAuth();
    const navigate = useNavigate();
  
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        uppercase: false,
        number: false,
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const password = watch('password', '');

    const checkPasswordStrength = (password) => {
        setPasswordStrength({
            length: password.length >= 6,
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
        });
    };

    const calculateStrengthScore = () => {
        const score = Object.values(passwordStrength).filter(Boolean).length;
        return (score / 3) * 100;
    };

    const getStrengthColor = () => {
        const score = calculateStrengthScore();
        if (score < 33) return 'bg-red-500';
        if (score < 66) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const { confirmPassword, ...userData } = data;
            await registerUser(userData);
            navigate('/dashboard');
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            <AnimatedBackground />
      
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-linear-to-r from-primary-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-56 h-56 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
      
            <div className="w-full max-w-2xl relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Info */}
                    <div className="dashboard-card">
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <User className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl font-bold gradient-text mb-2">
                                Join ModernAuth
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Create your account and unlock powerful features
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Secure Authentication</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Enterprise-grade security with JWT tokens
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Beautiful Dashboard</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Modern UI with real-time updates
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Task Management</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Full CRUD operations with search & filter
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                Already have an account?{' '}
                                    <Link
                                    to="/login"
                                    className="font-medium text-primary-600 hover:text-primary-500"
                                    >
                                        Sign in here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="dashboard-card">
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
                                    {...register('password', {
                                        onChange: (e) => checkPasswordStrength(e.target.value),
                                    })}
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

                                {/* Password strength */}
                                {password && (
                                    <div className="mt-3 space-y-2">
                                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                            className={`h-full ${getStrengthColor()} transition-all duration-300`}
                                            style={{ width: `${calculateStrengthScore()}%` }}
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className={`flex items-center space-x-1 ${passwordStrength.length ? 'text-green-500' : 'text-gray-500'}`}>
                                                {passwordStrength.length ? <CheckCircle size={14} /> : <XCircle size={14} />}
                                                <span className="text-xs">6+ chars</span>
                                            </div>
                                            <div className={`flex items-center space-x-1 ${passwordStrength.uppercase ? 'text-green-500' : 'text-gray-500'}`}>
                                                {passwordStrength.uppercase ? <CheckCircle size={14} /> : <XCircle size={14} />}
                                                <span className="text-xs">Uppercase</span>
                                            </div>
                                            <div className={`flex items-center space-x-1 ${passwordStrength.number ? 'text-green-500' : 'text-gray-500'}`}>
                                                {passwordStrength.number ? <CheckCircle size={14} /> : <XCircle size={14} />}
                                                <span className="text-xs">Number</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                    {...register('confirmPassword')}
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className="input-field pl-10 pr-10"
                                    placeholder="••••••••"
                                    />
                                    <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
                                )}
                            </div>

                            {/* Terms */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                    required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="text-gray-700 dark:text-gray-300">
                                        I agree to the{' '}
                                        <Link to="/terms" className="text-primary-600 hover:text-primary-500">
                                        Terms of Service
                                        </Link>{' '}
                                        and{' '}
                                        <Link to="/privacy" className="text-primary-600 hover:text-primary-500">
                                        Privacy Policy
                                        </Link>
                                    </label>
                                </div>
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
                                        Creating account...
                                    </div>
                                ) : (
                                    'Create Account'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;