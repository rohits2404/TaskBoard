import { asyncHandler } from '../middleware/asyncHandler.js';
import Task from '../models/Task.js';

// @desc    Get all tasks for user
// @route   GET /api/tasks
// @access  Private
export const getTasks = asyncHandler(async (req, res) => {
    const { status, priority, search, tag } = req.query;
    
    let query = { user: req.user.id };
    
    // Filter by status
    if (status) {
        query.status = status;
    }
    
    // Filter by priority
    if (priority) {
        query.priority = priority;
    }
    
    // Filter by tag
    if (tag) {
        query.tags = tag;
    }
    
    // Search in title and description
    if (search) {
        query.$or = [
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
        ];
    }
    
    const tasks = await Task.find(query).sort('-createdAt');
    res.json(tasks);
});

// @desc    Get single task
// @route   GET /api/tasks/:id
// @access  Private
export const getTaskById = asyncHandler(async (req, res) => {
    const task = await Task.findOne({
        _id: req.params.id,
        user: req.user.id,
    });

    if (task) {
        res.json(task);
    } else {
        res.status(404);
        throw new Error('Task not found');
    }
});

// @desc    Create new task
// @route   POST /api/tasks
// @access  Private
export const createTask = asyncHandler(async (req, res) => {
    const task = new Task({
        ...req.body,
        user: req.user.id,
    });

    const createdTask = await task.save();
    res.status(201).json(createdTask);
});

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Private
export const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findOne({
        _id: req.params.id,
        user: req.user.id,
    });

    if (task) {
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.status = req.body.status || task.status;
        task.priority = req.body.priority || task.priority;
        task.dueDate = req.body.dueDate || task.dueDate;
        task.tags = req.body.tags || task.tags;
        task.isImportant = req.body.isImportant !== undefined ? req.body.isImportant : task.isImportant;

        const updatedTask = await task.save();
        res.json(updatedTask);
    } else {
        res.status(404);
        throw new Error('Task not found');
    }
});

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
export const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findOne({
        _id: req.params.id,
        user: req.user.id,
    });

    if (task) {
        await task.deleteOne();
        res.json({ message: 'Task removed' });
    } else {
        res.status(404);
        throw new Error('Task not found');
    }
});

// @desc    Get task statistics
// @route   GET /api/tasks/stats
// @access  Private
export const getTaskStats = asyncHandler(async (req, res) => {
    const stats = await Task.aggregate([
        {
            $match: { user: req.user._id }
        },
        {
            $group: {
                _id: '$status',
                count: { $sum: 1 }
            }
        }
    ]);
  
    const totalTasks = await Task.countDocuments({ user: req.user.id });
    const completedTasks = await Task.countDocuments({ 
        user: req.user.id, 
        status: 'completed' 
    });
    const importantTasks = await Task.countDocuments({ 
        user: req.user.id, 
        isImportant: true 
    });
  
    res.json({
        stats,
        totalTasks,
        completedTasks,
        importantTasks,
        completionRate: totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
    });
});