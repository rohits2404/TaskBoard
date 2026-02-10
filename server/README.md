# Modern Auth Dashboard - Backend API

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A scalable, production-ready backend API for modern authentication dashboards**

[Features](#-features) • [Quick Start](#-quick-start) • [API Docs](#-api-documentation) • [Deployment](#-deployment) • [Security](#-security-best-practices)

</div>

---

## 📖 Table of Contents

- [Overview](#overview)
- [Architecture](#️-architecture)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [API Documentation](#-api-documentation)
- [Configuration](#-configuration)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Performance Optimization](#-performance-optimization)
- [Security Best Practices](#-security-best-practices)
- [Monitoring & Logging](#-monitoring--logging)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## Overview

Modern Auth Dashboard Backend is a robust REST API built with security, performance, and scalability at its core. It provides comprehensive authentication and task management capabilities suitable for production environments.

### Key Highlights

✅ **Production-Ready** - Battle-tested architecture with security best practices  
✅ **Fully Documented** - Comprehensive API documentation and examples  
✅ **Type-Safe** - Built with TypeScript for reliability  
✅ **Highly Performant** - Optimized queries with database indexing  
✅ **Secure by Default** - JWT auth, rate limiting, and encryption  

---

## 🏗️ Architecture

```
backend/
├── src/
│   ├── config/                # Configuration files
│   │   └── database.js        # MongoDB connection setup
│   ├── controllers/           # Business logic layer
│   │   ├── authController.js  # Authentication handlers
│   │   └── taskController.js  # Task management handlers
│   ├── middleware/            # Custom middleware
│   │   ├── auth.js           # JWT verification
│   │   ├── asyncHandler.js   # Async error wrapper
│   │   └── errorHandler.js   # Centralized error handling
│   ├── models/               # MongoDB schemas
│   │   ├── User.js          # User data model
│   │   └── Task.js          # Task data model
│   ├── routes/              # API route definitions
│   │   ├── authRoutes.js    # Authentication endpoints
│   │   └── taskRoutes.js    # Task CRUD endpoints             
│   └── app.js              # Express app configuration
├── tests/                   # Test suites
│   ├── unit/               # Unit tests
│   ├── integration/        # Integration tests
│   └── fixtures/           # Test data
├── logs/                   # Application logs
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
├── Dockerfile           # Docker configuration
└── server.js           # Application entry point
```

---

## ✨ Features

### 🔐 Authentication & Security

- **JWT-based Authentication** - Stateless, scalable token-based auth
- **Secure Password Hashing** - bcryptjs with configurable salt rounds
- **Role-based Access Control (RBAC)** - User and Admin roles
- **Rate Limiting** - Protection against brute force attacks
- **Security Headers** - Helmet.js for comprehensive HTTP security
- **CORS Protection** - Configurable cross-origin policies
- **Input Validation** - Express-validator for robust request validation
- **XSS Protection** - Input sanitization against cross-site scripting

### 📊 Task Management

- **Full CRUD Operations** - Complete task lifecycle management
- **Advanced Filtering** - Filter by status, priority, tags, and search terms
- **Task Analytics** - Statistics and completion rate tracking
- **Pagination Support** - Efficient handling of large datasets
- **Tag System** - Flexible categorization and organization
- **Priority Management** - High, medium, and low priority levels
- **Due Date Tracking** - Time-based task organization

### 🚀 Performance & Scalability

- **Database Indexing** - Optimized MongoDB query performance
- **Connection Pooling** - Efficient database connection management
- **Async/Await Pattern** - Non-blocking request handling
- **Error Handling** - Centralized error management system
- **Request Logging** - Morgan for detailed HTTP logging
- **Environment-based Config** - 12-factor app methodology
- **Response Compression** - Reduced payload sizes

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Version | Download |
|------------|---------|----------|
| **Node.js** | v16.x or higher | [nodejs.org](https://nodejs.org/) |
| **MongoDB** | v4.4 or higher | [mongodb.com](https://www.mongodb.com/try/download/community) |
| **npm/yarn** | Latest | Included with Node.js |

Optional but recommended:
- **Docker** (for containerized deployment)
- **PM2** (for production process management)
- **Redis** (for caching layer)

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/modern-auth-dashboard.git
cd modern-auth-dashboard/backend
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 3. Environment Setup

```bash
# Copy the example environment file
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/modern_auth_db

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_min_32_chars
JWT_EXPIRE=7d

# CORS
FRONTEND_URL=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
```

> ⚠️ **Security Note**: Always use strong, unique secrets in production!

### 4. Start MongoDB

```bash
# macOS (Homebrew)
brew services start mongodb-community

# Ubuntu/Debian
sudo systemctl start mongod

# Windows (Run as Administrator)
net start MongoDB

# Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### 5. Run the Application

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start

# With debugging
npm run debug
```

The server will start at `http://localhost:5000`

### 6. Verify Installation

```bash
# Check health endpoint
curl http://localhost:5000/health

# Expected response:
# {
#   "status": "healthy",
#   "timestamp": "2024-02-10T10:30:00.000Z",
#   "uptime": 123.45,
#   "database": "connected"
# }
```

---

## 📡 API Documentation

### Base URL

```
http://localhost:5000/api
```

### Authentication Required

Protected endpoints require a JWT token in the Authorization header:

```bash
Authorization: Bearer <your_jwt_token>
```

---

### 🔑 Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/register` | Register new user | ❌ |
| `POST` | `/auth/login` | User login | ❌ |
| `GET` | `/auth/me` | Get current user profile | ✅ |
| `PUT` | `/auth/update` | Update user profile | ✅ |

#### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2024-02-10T10:30:00.000Z"
  }
}
```

#### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

#### Get Current User

```http
GET /api/auth/me
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2024-02-10T10:30:00.000Z"
  }
}
```

---

### 📝 Task Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/tasks` | Get all tasks (with filters) | ✅ |
| `GET` | `/tasks/stats` | Get task statistics | ✅ |
| `GET` | `/tasks/:id` | Get single task by ID | ✅ |
| `POST` | `/tasks` | Create new task | ✅ |
| `PUT` | `/tasks/:id` | Update existing task | ✅ |
| `DELETE` | `/tasks/:id` | Delete task | ✅ |

#### Get All Tasks (with Filtering)

```http
GET /api/tasks?status=in-progress&priority=high&search=urgent&tag=work&page=1&limit=10
Authorization: Bearer <token>
```

**Query Parameters:**
- `status` - Filter by status: `todo`, `in-progress`, `completed`
- `priority` - Filter by priority: `low`, `medium`, `high`
- `search` - Search in title and description
- `tag` - Filter by tag name
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

**Response (200 OK):**
```json
{
  "success": true,
  "count": 25,
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalPages": 3
  },
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Complete project documentation",
      "description": "Write comprehensive API docs",
      "status": "in-progress",
      "priority": "high",
      "dueDate": "2024-12-31T23:59:59.999Z",
      "tags": ["work", "urgent"],
      "isImportant": true,
      "user": "507f1f77bcf86cd799439012",
      "createdAt": "2024-02-10T10:30:00.000Z",
      "updatedAt": "2024-02-10T10:30:00.000Z"
    }
  ]
}
```

#### Get Task Statistics

```http
GET /api/tasks/stats
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "stats": {
    "total": 50,
    "completed": 20,
    "inProgress": 15,
    "todo": 15,
    "completionRate": 40,
    "byPriority": {
      "high": 10,
      "medium": 25,
      "low": 15
    }
  }
}
```

#### Create Task

```http
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the backend implementation",
  "status": "in-progress",
  "priority": "high",
  "dueDate": "2024-12-31T23:59:59.999Z",
  "tags": ["work", "urgent"],
  "isImportant": true
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Complete project",
    "description": "Finish the backend implementation",
    "status": "in-progress",
    "priority": "high",
    "dueDate": "2024-12-31T23:59:59.999Z",
    "tags": ["work", "urgent"],
    "isImportant": true,
    "user": "507f1f77bcf86cd799439012",
    "createdAt": "2024-02-10T10:30:00.000Z",
    "updatedAt": "2024-02-10T10:30:00.000Z"
  }
}
```

#### Update Task

```http
PUT /api/tasks/507f1f77bcf86cd799439011
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "completed",
  "priority": "medium"
}
```

#### Delete Task

```http
DELETE /api/tasks/507f1f77bcf86cd799439011
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

---

### Error Responses

All errors follow a consistent format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

**Common HTTP Status Codes:**
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (missing or invalid token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `429` - Too Many Requests (rate limit exceeded)
- `500` - Internal Server Error

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `NODE_ENV` | Environment mode (`development`/`production`) | `development` | No |
| `PORT` | Server port number | `5000` | No |
| `MONGODB_URI` | MongoDB connection string | - | **Yes** |
| `JWT_SECRET` | Secret key for JWT signing (min 32 chars) | - | **Yes** |
| `JWT_EXPIRE` | JWT token expiration time | `7d` | No |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` | No |
| `RATE_LIMIT_WINDOW` | Rate limit time window (ms) | `900000` (15 min) | No |
| `RATE_LIMIT_MAX` | Max requests per window | `100` | No |

### Database Indexes

The application automatically creates these indexes for optimal performance:

```javascript
// Task Model Indexes
taskSchema.index({ user: 1, status: 1 });        // User task filtering
taskSchema.index({ dueDate: 1 });                // Due date sorting
taskSchema.index({ user: 1, priority: 1 });      // Priority filtering
taskSchema.index({ user: 1, tags: 1 });          // Tag-based queries
taskSchema.index({ createdAt: -1 });             // Recent tasks first

// User Model Indexes
userSchema.index({ email: 1 }, { unique: true }); // Email uniqueness
```

---

## 🧪 Testing

### Run Tests

```bash
# Run all tests
npm test

# Run with coverage report
npm run test:coverage

# Run specific test suite
npm test -- auth.test.js

# Run in watch mode
npm run test:watch
```

### Test Structure

```
tests/
├── unit/                          # Unit tests
│   ├── controllers/
│   │   ├── authController.test.js
│   │   └── taskController.test.js
│   └── middleware/
│       └── auth.test.js
├── integration/                   # Integration tests
│   ├── auth.test.js
│   └── tasks.test.js
└── fixtures/                      # Test data
    ├── users.js
    └── tasks.js
```

### Writing Tests

Example test structure:

```javascript
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/User');

describe('Auth Controller', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          password: 'Password123!'
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.token).toBeDefined();
    });
  });
});
```

---

## 🚀 Deployment

### Docker Deployment

#### 1. Build Docker Image

```bash
docker build -t modern-auth-backend:latest .
```

#### 2. Run Container

```bash
docker run -d \
  -p 5000:5000 \
  -e MONGODB_URI=mongodb://host.docker.internal:27017/modern_auth_db \
  -e JWT_SECRET=your_production_secret_key \
  --name modern-auth-backend \
  modern-auth-backend:latest
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  backend:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongodb:27017/modern_auth_db
      - JWT_SECRET=${JWT_SECRET}
      - FRONTEND_URL=${FRONTEND_URL}
    depends_on:
      - mongodb
    restart: unless-stopped
    networks:
      - app-network

  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
    restart: unless-stopped
    networks:
      - app-network

volumes:
  mongodb_data:

networks:
  app-network:
    driver: bridge
```

Run with:

```bash
docker-compose up -d
```

### PM2 Production Setup

```bash
# Install PM2 globally
npm install -g pm2

# Start application with PM2
pm2 start server.js --name modern-auth-backend

# Enable auto-restart on system boot
pm2 startup

# Save current process list
pm2 save

# Monitor application
pm2 monit

# View logs
pm2 logs modern-auth-backend

# Restart application
pm2 restart modern-auth-backend
```

### Cloud Deployment

#### Heroku

```bash
# Login to Heroku
heroku login

# Create new app
heroku create your-app-name

# Add MongoDB addon
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set JWT_SECRET=your_secret_key
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

#### AWS EC2

1. Launch an EC2 instance (Ubuntu 20.04 LTS)
2. SSH into instance
3. Install dependencies:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

4. Clone and setup application:

```bash
git clone your-repo-url
cd modern-auth-dashboard/backend
npm install
npm install -g pm2

# Setup environment
cp .env.example .env
nano .env  # Edit with production values

# Start with PM2
pm2 start server.js --name backend
pm2 startup
pm2 save
```

---

## 📊 Performance Optimization

### 1. Database Query Optimization

```javascript
// ✅ Good: Use lean() for read-only queries
const tasks = await Task.find(query)
  .select('title status priority dueDate tags')
  .sort('-createdAt')
  .limit(20)
  .lean();  // Returns plain JS objects (faster)

// ✅ Good: Use projection to limit fields
const user = await User.findById(userId).select('name email');

// ❌ Bad: Fetching unnecessary data
const tasks = await Task.find(query);  // Returns Mongoose documents with methods
```

### 2. Caching Strategy (Redis)

```javascript
const redis = require('redis');
const client = redis.createClient();

// Cache frequently accessed data
async function getTasksWithCache(userId, filters) {
  const cacheKey = `tasks:${userId}:${JSON.stringify(filters)}`;
  
  // Try cache first
  const cached = await client.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // Query database
  const tasks = await Task.find({ user: userId, ...filters });
  
  // Cache for 5 minutes
  await client.setex(cacheKey, 300, JSON.stringify(tasks));
  
  return tasks;
}
```

### 3. Response Compression

```javascript
const compression = require('compression');

app.use(compression({
  level: 6,  // Compression level (0-9)
  threshold: 1024,  // Only compress responses > 1KB
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));
```

### 4. Connection Pooling

```javascript
// MongoDB connection with pooling
mongoose.connect(process.env.MONGODB_URI, {
  maxPoolSize: 10,  // Maximum number of connections
  minPoolSize: 5,   // Minimum number of connections
  socketTimeoutMS: 45000,
  serverSelectionTimeoutMS: 5000
});
```

---

## 🔒 Security Best Practices

### Implemented Security Features

#### 1. Password Security

```javascript
// bcryptjs with appropriate salt rounds
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);

// Password validation
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/;
```

#### 2. JWT Security

```javascript
// Short expiration times
const token = jwt.sign(
  { id: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: process.env.JWT_EXPIRE || '7d' }
);

// Token verification with error handling
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
} catch (error) {
  throw new Error('Invalid or expired token');
}
```

#### 3. Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);
```

#### 4. Input Sanitization

```javascript
const { body, validationResult } = require('express-validator');

// Validation middleware
const validateRegister = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('name').trim().escape()
];
```

#### 5. Security Headers (Helmet)

```javascript
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));
```

### Additional Security Recommendations

#### Environment-Specific Secrets

```env
# Development
JWT_SECRET_DEV=dev_secret_minimum_32_characters_long

# Production (use strong, random strings)
JWT_SECRET_PROD=prod_secret_use_cryptographically_secure_random_string_here
```

#### Implement Refresh Tokens

```javascript
// Generate refresh token
const refreshToken = jwt.sign(
  { id: user._id },
  process.env.REFRESH_TOKEN_SECRET,
  { expiresIn: '30d' }
);

// Store refresh token in httpOnly cookie
res.cookie('refreshToken', refreshToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
});
```

#### Enable HTTPS in Production

```javascript
// Redirect HTTP to HTTPS
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}
```

---

## 📈 Monitoring & Logging

### Logging Configuration

```javascript
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Create logs directory
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Production logging
if (process.env.NODE_ENV === 'production') {
  const accessLogStream = fs.createWriteStream(
    path.join(logsDir, 'access.log'),
    { flags: 'a' }
  );
  
  app.use(morgan('combined', { stream: accessLogStream }));
}
```

### Health Check Endpoint

```javascript
app.get('/health', (req, res) => {
  const healthcheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + ' MB',
      total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024) + ' MB'
    }
  };
  
  res.status(200).json(healthcheck);
});
```

### Application Monitoring

Consider integrating:

- **New Relic** - Full-stack application monitoring
- **Datadog** - Infrastructure and application monitoring
- **Sentry** - Error tracking and performance monitoring
- **LogRocket** - Session replay and error tracking

Example Sentry integration:

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
```

---

## 🔧 Troubleshooting

### Common Issues

#### MongoDB Connection Failed

```bash
# Check if MongoDB is running
sudo systemctl status mongod

# Check MongoDB logs
sudo tail -f /var/log/mongodb/mongod.log

# Restart MongoDB
sudo systemctl restart mongod
```

#### Port Already in Use

```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>

# Or use a different port
PORT=5001 npm start
```

#### JWT Token Invalid

- Ensure `JWT_SECRET` is the same across restarts
- Check token expiration time
- Verify token format in Authorization header: `Bearer <token>`

#### Rate Limit Exceeded

- Wait for the rate limit window to reset (default: 15 minutes)
- Adjust `RATE_LIMIT_MAX` in `.env` for development

#### Database Queries Slow

```bash
# Check MongoDB query performance
mongo
> use modern_auth_db
> db.tasks.explain("executionStats").find({ user: ObjectId("...") })

# Ensure indexes are created
> db.tasks.getIndexes()
```

### Debug Mode

Run the application with debugging enabled:

```bash
# Enable debug logs
DEBUG=* npm run dev

# Debug specific modules
DEBUG=express:* npm run dev
```

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork the repository**

```bash
git clone https://github.com/yourusername/modern-auth-dashboard.git
cd modern-auth-dashboard/backend
```

2. **Create a feature branch**

```bash
git checkout -b feature/amazing-feature
```

3. **Make your changes**

- Write clean, documented code
- Follow existing code style
- Add tests for new features
- Update documentation

4. **Run tests**

```bash
npm test
npm run test:coverage
```

5. **Commit your changes**

```bash
git add .
git commit -m "feat: add amazing feature"
```

6. **Push to your fork**

```bash
git push origin feature/amazing-feature
```

7. **Open a Pull Request**

### Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Code Style

- Use ES6+ features
- Follow ESLint configuration
- Write descriptive variable names
- Add JSDoc comments for functions
- Keep functions small and focused

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Modern Auth Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Support

### Get Help

- 📧 Email: support@example.com
- 💬 Discord: [Join our community](https://discord.gg/yourserver)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/modern-auth-dashboard/issues)
- 📖 Docs: [Full Documentation](https://docs.example.com)

### Useful Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [JWT Introduction](https://jwt.io/introduction)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## 🙏 Acknowledgments

- Express.js team for the excellent framework
- MongoDB team for the robust database
- All contributors who have helped improve this project

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/modern-auth-dashboard?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/modern-auth-dashboard?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/modern-auth-dashboard)
![GitHub license](https://img.shields.io/github/license/yourusername/modern-auth-dashboard)

---

<div align="center">

**[⬆ Back to Top](#modern-auth-dashboard---backend-api)**

Made with ❤️ by the Modern Auth Team

**Star this repo if you find it helpful!** ⭐

</div>