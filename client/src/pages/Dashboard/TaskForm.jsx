import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Save, 
  X, 
  Calendar, 
  Tag, 
  Flag, 
  Clock,
  AlertCircle,
  CheckCircle,
  ListChecks,
  Plus,
  Trash2
} from 'lucide-react';
import { taskService } from '../../services/taskService';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

const taskSchema = z.object({
    title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
    description: z.string().max(500, 'Description is too long').optional(),
    status: z.enum(['todo', 'in-progress', 'completed']),
    priority: z.enum(['low', 'medium', 'high']),
    dueDate: z.string().optional(),
    tags: z.array(z.string()).default([]),
    isImportant: z.boolean().default(false),
});

const TaskForm = () => {

    const { id } = useParams();
    const navigate = useNavigate();
  
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tagInput, setTagInput] = useState('');
    const [existingTasks, setExistingTasks] = useState([]);

    const isEditMode = !!id;

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors, isDirty },
    } = useForm({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            title: '',
            description: '',
            status: 'todo',
            priority: 'medium',
            dueDate: '',
            tags: [],
            isImportant: false,
        },
    });

    const tags = watch('tags');
    const status = watch('status');
    const priority = watch('priority');

    useEffect(() => {
        if (isEditMode) {
            fetchTask();
        }
        fetchExistingTasks();
    }, [id]);

    const fetchTask = async () => {
        try {
            setIsLoading(true);
            const task = await taskService.getTaskById(id);
            reset({
                ...task,
                dueDate: task.dueDate ? format(new Date(task.dueDate), 'yyyy-MM-dd') : '',
            });
        } catch (error) {
            toast.error('Failed to load task');
            navigate('/dashboard');
        } finally {
            setIsLoading(false);
        }
    };

    const fetchExistingTasks = async () => {
        try {
            const tasks = await taskService.getTasks({ limit: 5 });
            setExistingTasks(tasks);
        } catch (error) {
            console.error('Failed to fetch existing tasks:', error);
        }
    };

    const handleAddTag = () => {
        if (tagInput.trim() && !tags.includes(tagInput.trim())) {
            setValue('tags', [...tags, tagInput.trim()], { shouldDirty: true });
            setTagInput('');
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setValue('tags', tags.filter(tag => tag !== tagToRemove), { shouldDirty: true });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddTag();
        }
    };

    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true);
      
            const taskData = {
                ...data,
                dueDate: data.dueDate || undefined,
            };

            if (isEditMode) {
                await taskService.updateTask(id, taskData);
                toast.success('Task updated successfully!');
            } else {
                await taskService.createTask(taskData);
                toast.success('Task created successfully!');
            }
      
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.message || 'Failed to save task');
        } finally {
            setIsSubmitting(false);
        }
    };

    const statusOptions = [
        { value: 'todo', label: 'To Do', icon: '📝', color: 'bg-gray-500' },
        { value: 'in-progress', label: 'In Progress', icon: '⚡', color: 'bg-blue-500' },
        { value: 'completed', label: 'Completed', icon: '✅', color: 'bg-green-500' },
    ];

    const priorityOptions = [
        { value: 'low', label: 'Low', icon: '⬇️', color: 'bg-gray-500' },
        { value: 'medium', label: 'Medium', icon: '↔️', color: 'bg-yellow-500' },
        { value: 'high', label: 'High', icon: '⬆️', color: 'bg-red-500' },
    ];

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading task...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold gradient-text">
                                {isEditMode ? 'Edit Task' : 'Create New Task'}
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                {isEditMode 
                                ? 'Update your task details below'
                                : 'Fill in the details to create a new task'
                                }
                            </p>
                        </div>
                        <Link
                        to="/dashboard"
                        className="flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <X className="w-5 h-5 mr-2" />
                            Cancel
                        </Link>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="dashboard-card">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Task Title *
                                    </label>
                                    <input
                                        {...register('title')}
                                        type="text"
                                        className="input-field"
                                        placeholder="What needs to be done?"
                                    />
                                    {errors.title && (
                                        <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
                                    )}
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        {...register('description')}
                                        rows="4"
                                        className="input-field resize-none"
                                        placeholder="Add more details about this task..."
                                    />
                                    <div className="flex justify-between mt-1">
                                        {errors.description && (
                                            <p className="text-sm text-red-500">{errors.description.message}</p>
                                        )}
                                        <p className="text-sm text-gray-500 ml-auto">
                                            {watch('description')?.length || 0}/500 characters
                                        </p>
                                    </div>
                                </div>

                                {/* Status & Priority */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Status */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Status
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {statusOptions.map((option) => (
                                                <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => setValue('status', option.value, { shouldDirty: true })}
                                                className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                                                    status === option.value
                                                    ? 'bg-linear-to-r from-primary-500 to-purple-500 text-white shadow-lg'
                                                    : 'bg-white/5 dark:bg-gray-800/50 hover:bg-white/10 dark:hover:bg-gray-700/50'
                                                }`}
                                                >
                                                    <span className="text-xl mb-1">{option.icon}</span>
                                                    <span className="text-sm font-medium">{option.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                        <input type="hidden" {...register('status')} />
                                    </div>

                                    {/* Priority */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Priority
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {priorityOptions.map((option) => (
                                                <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => setValue('priority', option.value, { shouldDirty: true })}
                                                className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                                                    priority === option.value
                                                    ? 'bg-linear-to-r from-primary-500 to-purple-500 text-white shadow-lg'
                                                    : 'bg-white/5 dark:bg-gray-800/50 hover:bg-white/10 dark:hover:bg-gray-700/50'
                                                }`}
                                                >
                                                    <span className="text-xl mb-1">{option.icon}</span>
                                                    <span className="text-sm font-medium">{option.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                        <input type="hidden" {...register('priority')} />
                                    </div>
                                </div>

                                {/* Due Date & Important */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Due Date */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <Calendar className="w-4 h-4 inline mr-2" />
                                            Due Date
                                        </label>
                                        <input
                                        {...register('dueDate')}
                                        type="date"
                                        className="input-field"
                                        min={format(new Date(), 'yyyy-MM-dd')}
                                        />
                                    </div>

                                    {/* Important */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <Flag className="w-4 h-4 inline mr-2" />
                                            Mark as Important
                                        </label>
                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                onClick={() => setValue('isImportant', !watch('isImportant'), { shouldDirty: true })}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                                watch('isImportant') ? 'bg-linear-to-r from-primary-500 to-purple-500' : 'bg-gray-300 dark:bg-gray-600'
                                                }`}
                                            >
                                                <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                    watch('isImportant') ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                                />
                                            </button>
                                            <span className="ml-3 text-sm font-medium">
                                                {watch('isImportant') ? 'Important' : 'Normal'}
                                            </span>
                                        </div>
                                        <input type="hidden" {...register('isImportant')} />
                                    </div>
                                </div>

                                {/* Tags */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <Tag className="w-4 h-4 inline mr-2" />
                                        Tags
                                    </label>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-linear-to-r from-primary-500/10 to-purple-500/10 text-primary-600 dark:text-primary-400"
                                            >
                                                {tag}
                                                <button
                                                type="button"
                                                onClick={() => handleRemoveTag(tag)}
                                                className="ml-2 hover:text-red-500"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <input
                                        type="text"
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        className="input-field flex-1"
                                        placeholder="Add a tag and press Enter"
                                        />
                                        <button
                                        type="button"
                                        onClick={handleAddTag}
                                        className="btn-secondary flex items-center"
                                        >
                                            <Plus className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Press Enter or click + to add tags
                                    </p>
                                </div>

                                {/* Submit Buttons */}
                                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-between">
                                        <button
                                        type="button"
                                        onClick={() => navigate('/dashboard')}
                                        className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                                                bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
                                                text-gray-700 dark:text-gray-300 active:scale-95"
                                        >
                                        Cancel
                                        </button>
                                        <div className="flex gap-4">
                                            {isEditMode && (
                                                <button
                                                type="button"
                                                onClick={async () => {
                                                    if (window.confirm('Are you sure you want to delete this task?')) {
                                                    try {
                                                        await taskService.deleteTask(id);
                                                        toast.success('Task deleted successfully!');
                                                        navigate('/dashboard');
                                                    } catch (error) {
                                                        toast.error('Failed to delete task');
                                                    }
                                                    }
                                                }}
                                                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                                                        bg-red-500/10 hover:bg-red-500/20 text-red-500 active:scale-95 flex items-center"
                                                >
                                                    <Trash2 className="w-5 h-5 mr-2" />
                                                    Delete
                                                </button>
                                            )}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting || !isDirty}
                                                className="btn-primary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <div className="flex items-center">
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                                        {isEditMode ? 'Updating...' : 'Creating...'}
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Save className="w-5 h-5 mr-2" />
                                                        {isEditMode ? 'Update Task' : 'Create Task'}
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Quick Stats */}
                        <div className="dashboard-card mb-6">
                            <h3 className="font-bold text-lg mb-4 flex items-center">
                                <ListChecks className="w-5 h-5 mr-2 text-primary-500" />
                                Quick Stats
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Tasks Created</span>
                                    <span className="font-bold text-xl gradient-text">
                                        {existingTasks.length}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Completion Rate</span>
                                    <span className="font-bold text-xl">
                                        {existingTasks.length > 0 
                                        ? Math.round((existingTasks.filter(t => t.status === 'completed').length / existingTasks.length) * 100)
                                        : 0
                                        }%
                                    </span>
                                </div>
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        Priority Distribution
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                                <span className="text-sm">High</span>
                                            </div>
                                            <span className="text-sm font-medium">
                                                {existingTasks.filter(t => t.priority === 'high').length}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                                <span className="text-sm">Medium</span>
                                            </div>
                                            <span className="text-sm font-medium">
                                                {existingTasks.filter(t => t.priority === 'medium').length}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                                <span className="text-sm">Low</span>
                                            </div>
                                            <span className="text-sm font-medium">
                                                {existingTasks.filter(t => t.priority === 'low').length}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tips */}
                        <div className="dashboard-card mb-6">
                            <h3 className="font-bold text-lg mb-4 flex items-center">
                                <AlertCircle className="w-5 h-5 mr-2 text-amber-500" />
                                Tips
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Use clear and specific titles
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Set realistic due dates
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Use tags for better organization
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Mark important tasks for quick access
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Recent Tasks */}
                        <div className="dashboard-card">
                            <h3 className="font-bold text-lg mb-4 flex items-center">
                                <Clock className="w-5 h-5 mr-2 text-primary-500" />
                                Recent Tasks
                            </h3>
                            <div className="space-y-3">
                                {existingTasks.slice(0, 3).map((task) => (
                                    <Link
                                        key={task._id}
                                        to={`/dashboard/tasks/${task._id}/edit`}
                                        className="block p-3 rounded-lg bg-white/5 dark:bg-gray-800/50 hover:bg-white/10 dark:hover:bg-gray-700/50 transition-colors"
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-medium truncate">{task.title}</span>
                                            <span className={`text-xs px-2 py-1 rounded-full ${
                                                task.status === 'completed' ? 'bg-green-500/10 text-green-500' :
                                                task.status === 'in-progress' ? 'bg-blue-500/10 text-blue-500' :
                                                'bg-gray-500/10 text-gray-500'
                                            }`}>
                                                {task.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <Flag className={`w-3 h-3 mr-1 ${
                                                task.priority === 'high' ? 'text-red-500' :
                                                task.priority === 'medium' ? 'text-yellow-500' :
                                                'text-green-500'
                                            }`} />
                                            <span className="capitalize">{task.priority} priority</span>
                                            {task.dueDate && (
                                                <>
                                                <span className="mx-2">•</span>
                                                <Calendar className="w-3 h-3 mr-1" />
                                                <span>{format(new Date(task.dueDate), 'MMM dd')}</span>
                                                </>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                                {existingTasks.length === 0 && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                                        No tasks yet
                                    </p>
                                )}
                                {existingTasks.length > 3 && (
                                    <Link
                                        to="/dashboard"
                                        className="block text-center text-primary-500 hover:text-primary-600 text-sm font-medium pt-2"
                                    >
                                        View all tasks →
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskForm;