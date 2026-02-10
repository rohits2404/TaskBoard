import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConfirmDeleteModal } from "./Modals/ConfirmDeleteModal"
import { 
  Edit, 
  Trash2, 
  Flag, 
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreVertical
} from 'lucide-react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

export const TaskCard = ({ task, onDelete, onUpdate }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleStatusChange = async (newStatus) => {
        try {
            await onUpdate(task._id, { status: newStatus });
            toast.success(`Task marked as ${newStatus}`);
        } catch (error) {
            toast.error('Failed to update task status');
        }
    };

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await onDelete(task._id);
            setShowConfirm(false);
        } catch (error) {
            setIsDeleting(false);
        }
    };


    const priorityColors = {
        high: 'bg-red-500',
        medium: 'bg-yellow-500',
        low: 'bg-green-500',
    };

    const statusColors = {
        todo: 'bg-gray-500',
        'in-progress': 'bg-blue-500',
        completed: 'bg-green-500',
    };

    const statusIcons = {
        todo: '📝',
        'in-progress': '⚡',
        completed: '✅',
    };

    return (
        <>
            <ConfirmDeleteModal
            open={showConfirm}
            onClose={() => setShowConfirm(false)}
            onConfirm={handleDelete}
            loading={isDeleting}
            />
            <div className="dashboard-card group">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{statusIcons[task.status]}</span>
                            <h3 className="font-bold text-lg truncate">{task.title}</h3>
                            {task.isImportant && (
                                <Flag className="w-4 h-4 text-red-500 shrink-0" />
                            )}
                        </div>
            
                        <div className="flex items-center gap-2 mb-3">
                            <span className={`text-xs px-2 py-1 rounded-full ${statusColors[task.status]}/10 text-${statusColors[task.status].replace('bg-', '')} capitalize`}>
                                {task.status}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority]}/10 text-${priorityColors[task.priority].replace('bg-', '')} capitalize`}>
                                {task.priority} priority
                            </span>
                        </div>
                    </div>

                    {/* Menu Button */}
                    <div className="relative">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="p-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/50 transition-colors"
                        >
                            <MoreVertical className="w-5 h-5" />
                        </button>

                        {/* Dropdown Menu */}
                        {showMenu && (
                            <div className="absolute right-0 mt-2 w-48 dropdown-panel rounded-lg shadow-xl py-2 z-10">
                                <Link
                                    to={`/dashboard/tasks/${task._id}/edit`}
                                    className="flex items-center px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-700/50 transition-colors"
                                    onClick={() => setShowMenu(false)}
                                >
                                    <Edit className="w-4 h-4 mr-3" />
                                    Edit Task
                                </Link>
                
                                <button
                                    onClick={() => {
                                    handleStatusChange(task.status === 'completed' ? 'todo' : 'completed');
                                    setShowMenu(false);
                                    }}
                                    className="flex items-center px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-700/50 w-full transition-colors text-left"
                                >
                                    <CheckCircle className="w-4 h-4 mr-3" />
                                    {task.status === 'completed' ? 'Mark as Todo' : 'Mark Complete'}
                                </button>
                
                                <button
                                    onClick={() => {
                                        setShowConfirm(true)
                                        setShowMenu(false);
                                    }}
                                    disabled={isDeleting}
                                    className="flex items-center px-4 py-2 text-red-500 hover:bg-red-500/10 w-full transition-colors text-left disabled:opacity-50"
                                >
                                    <Trash2 className="w-4 h-4 mr-3" />
                                    {isDeleting ? 'Deleting...' : 'Delete Task'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Description */}
                {task.description && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {task.description}
                    </p>
                )}

                {/* Tags */}
                {task.tags && task.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {task.tags.slice(0, 3).map((tag) => (
                            <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-linear-to-r from-primary-500/10 to-purple-500/10 text-primary-600 dark:text-primary-400"
                            >
                            {tag}
                            </span>
                        ))}
                        {task.tags.length > 3 && (
                            <span className="text-xs px-2 py-1 rounded-full bg-gray-500/10 text-gray-500">
                            +{task.tags.length - 3} more
                            </span>
                        )}
                    </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                        {task.dueDate && (
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            {format(new Date(task.dueDate), 'MMM dd')}
                            </div>
                        )}
            
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Clock className="w-4 h-4 mr-1" />
                            {format(new Date(task.createdAt), 'MMM dd')}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex items-center gap-2">
                        {task.status !== 'completed' && (
                            <button
                            onClick={() => handleStatusChange('completed')}
                            className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
                            title="Mark as completed"
                            >
                            <CheckCircle className="w-4 h-4" />
                            </button>
                        )}
            
                        {task.status !== 'in-progress' && (
                            <button
                            onClick={() => handleStatusChange('in-progress')}
                            className="p-2 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors"
                            title="Mark as in progress"
                            >
                            <AlertCircle className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};