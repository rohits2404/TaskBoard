import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { taskService } from '../../services/taskService.js';
import { 
  Plus, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  TrendingUp,
  Filter,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { TaskCard } from '../../components/TaskCard';
import { StatsCard } from '../../components/StatsCard';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import toast from 'react-hot-toast';

const Dashboard = () => {

    const { user } = useAuth();
  
    const [tasks, setTasks] = useState([]);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        status: '',
        priority: '',
        search: '',
    });

    useEffect(() => {
        fetchData();
    }, [filters]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [tasksData, statsData] = await Promise.all([
                taskService.getTasks(filters),
                taskService.getTaskStats(),
            ]);
            setTasks(tasksData);
            setStats(statsData);
        } catch (error) {
            toast.error('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await taskService.deleteTask(id);
            setTasks(tasks.filter(task => task._id !== id));
            toast.success('Task deleted successfully');
            fetchData(); // Refresh stats
        } catch (error) {
            toast.error('Failed to delete task');
        }
    };

    const handleUpdateTask = async (id, updates) => {
        try {
            const updatedTask = await taskService.updateTask(id, updates);
            setTasks(tasks.map(task => 
                task._id === id ? updatedTask : task
            ));
            toast.success('Task updated successfully');
            fetchData(); // Refresh stats
        } catch (error) {
            toast.error('Failed to update task');
        }
    };

    const statsCards = [
        {
            title: 'Total Tasks',
            value: stats?.totalTasks || 0,
            icon: <CheckCircle className="w-6 h-6" />,
            color: 'from-blue-500 to-cyan-500',
            change: '+12%',
        },
        {
            title: 'In Progress',
            value: tasks.filter(t => t.status === 'in-progress').length,
            icon: <Clock className="w-6 h-6" />,
            color: 'from-amber-500 to-orange-500',
            change: '+5%',
        },
        {
            title: 'Completed',
            value: stats?.completedTasks || 0,
            icon: <CheckCircle className="w-6 h-6" />,
            color: 'from-emerald-500 to-green-500',
            change: `+${Math.round(stats?.completionRate || 0)}%`,
        },
        {
            title: 'High Priority',
            value: tasks.filter(t => t.priority === 'high').length,
            icon: <AlertCircle className="w-6 h-6" />,
            color: 'from-rose-500 to-pink-500',
            change: '+8%',
        },
    ];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-12">
            {/* Header */}
            <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-3xl font-bold gradient-text">
                            Welcome back, {user?.name}!
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                            Here's what's happening with your tasks today.
                        </p>
                    </div>
                    <Link
                    to="/dashboard/tasks/new"
                    className="btn-primary flex items-center"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        New Task
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {statsCards.map((stat, index) => (
                        <StatsCard key={index} {...stat} />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="dashboard-card mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-semibold">Monthly Progress</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {stats?.completedTasks || 0} of {stats?.totalTasks || 0} tasks completed
                            </p>
                        </div>
                        <TrendingUp className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                        className="h-full gradient-bg rounded-full transition-all duration-500"
                        style={{ width: `${stats?.completionRate || 0}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="dashboard-card mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search tasks..."
                                className="input-field pl-10"
                                value={filters.search}
                                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <select
                        className="input-field"
                        value={filters.status}
                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                        >
                            <option value="">All Status</option>
                            <option value="todo">To Do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                        <select
                        className="input-field"
                        value={filters.priority}
                        onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
                        >
                            <option value="">All Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <button className="btn-secondary flex items-center">
                            <Filter className="w-5 h-5 mr-2" />
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            {/* Tasks Grid */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Your Tasks</h2>
                    <span className="text-gray-600 dark:text-gray-400">
                        {tasks.length} tasks
                    </span>
                </div>

                {tasks.length === 0 ? (
                    <div className="dashboard-card text-center py-12">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                            <Plus className="w-10 h-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No tasks found</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            {filters.search || filters.status || filters.priority 
                            ? 'Try changing your filters' 
                            : 'Get started by creating your first task'}
                        </p>
                        <Link to="/dashboard/tasks/new" className="btn-primary">
                            Create New Task
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tasks.map((task) => (
                            <TaskCard
                            key={task._id}
                            task={task}
                            onDelete={handleDeleteTask}
                            onUpdate={handleUpdateTask}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;