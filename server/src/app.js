import "dotenv/config";
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

// Import routes
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

// Import middleware
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Enable CORS
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET","POST","PUT","DELETE"]
}));

// Security headers
app.use(helmet());

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
});

app.use('/api', limiter);

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString(),
    });
});

// Error handler
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`,
    });
});

export default app;