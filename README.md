# 🚀 Modern Auth Dashboard

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

**A Complete, Production-Ready Full-Stack Authentication Dashboard**

*Beautiful UI • Scalable Architecture • Enterprise Security*

[Live Demo](#-demo) • [Documentation](./docs) • [Report Bug](../../issues) • [Request Feature](../../issues)

![GitHub stars](https://img.shields.io/github/stars/yourusername/modern-auth-dashboard?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/modern-auth-dashboard?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/modern-auth-dashboard)
![GitHub license](https://img.shields.io/github/license/yourusername/modern-auth-dashboard)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Highlights](#-highlights)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [API Documentation](#-api-documentation)
- [Design System](#-design-system)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Monitoring & Analytics](#-monitoring--analytics)
- [Security](#-security)
- [Scaling](#-scaling)
- [Contributing](#-contributing)
- [Support](#-support)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

Modern Auth Dashboard is a **production-ready, full-stack application** that combines stunning visual design with robust backend architecture. Built for developers who need a solid foundation for authentication-based applications, it features enterprise-grade security, scalable infrastructure, and a beautiful, responsive user interface.

### Why Modern Auth Dashboard?

🎨 **Design-First Approach** - Meticulously crafted UI with glassmorphism and smooth animations  
🏗️ **Enterprise Architecture** - Scalable, maintainable, and production-tested  
🔐 **Security Hardened** - JWT auth, rate limiting, CORS, and security headers  
⚡ **Performance Optimized** - Code splitting, lazy loading, and database indexing  
📱 **Mobile Ready** - Fully responsive with PWA capabilities  
🚀 **Deploy Anywhere** - Docker, Kubernetes, cloud platforms  
📚 **Well Documented** - Comprehensive guides and API documentation  
🧪 **Fully Tested** - Unit, integration, and E2E tests included  

---

## ✨ Highlights

<table>
<tr>
<td width="50%">

### Frontend
- ⚛️ React 18 with Vite
- 🎨 Tailwind CSS + Framer Motion
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ♿ WCAG 2.1 accessible
- 🎭 Glass morphism effects
- ⚡ Code splitting & lazy loading
- 🔄 Optimistic UI updates

</td>
<td width="50%">

### Backend
- 🟢 Node.js + Express
- 🍃 MongoDB + Mongoose
- 🔒 JWT authentication
- 🛡️ Rate limiting & security
- 📊 Advanced filtering
- 🔍 Full-text search
- 📈 Analytics & statistics
- 🐳 Docker ready

</td>
</tr>
</table>

---

## 🎯 Features

### 🔐 Authentication & Security

<details>
<summary><b>Click to expand security features</b></summary>

- ✅ **JWT Authentication** - Secure, stateless authentication with access tokens
- ✅ **Refresh Tokens** - Long-lived tokens for session persistence
- ✅ **Password Hashing** - bcrypt with configurable salt rounds
- ✅ **Role-Based Access Control (RBAC)** - User and Admin roles
- ✅ **Rate Limiting** - Prevent brute force attacks (100 req/15min)
- ✅ **CORS Protection** - Configurable allowed origins
- ✅ **Security Headers** - Helmet.js for XSS, clickjacking protection
- ✅ **Input Validation** - Server-side validation with express-validator
- ✅ **Input Sanitization** - Prevent NoSQL injection
- ✅ **HTTPS Enforcement** - SSL/TLS in production
- ✅ **Session Management** - Automatic token expiration
- ✅ **Password Strength** - Client and server-side validation

</details>

### 🎨 Modern UI/UX

<details>
<summary><b>Click to expand UI/UX features</b></summary>

- ✅ **Glass Morphism Design** - Frosted glass aesthetic with backdrop blur
- ✅ **Dark/Light Mode** - System preference detection with manual toggle
- ✅ **Smooth Animations** - Framer Motion powered transitions
- ✅ **Responsive Design** - Mobile-first approach (320px to 4K)
- ✅ **Accessibility (A11y)** - WCAG 2.1 Level AA compliant
- ✅ **Loading States** - Skeleton loaders and progress indicators
- ✅ **Toast Notifications** - Non-intrusive feedback system
- ✅ **Error Boundaries** - Graceful error handling and recovery
- ✅ **Keyboard Navigation** - Full keyboard accessibility
- ✅ **Screen Reader Support** - ARIA labels and semantic HTML
- ✅ **Focus Management** - Smart focus trapping in modals
- ✅ **Custom Scrollbars** - Themed scrollbar styling

</details>

### 📊 Dashboard Features

<details>
<summary><b>Click to expand dashboard features</b></summary>

- ✅ **Task Management** - Create, read, update, delete tasks
- ✅ **Advanced Filtering** - Filter by status, priority, tags, date
- ✅ **Full-Text Search** - Instant search with debouncing
- ✅ **Sorting Options** - Multiple sort criteria
- ✅ **Pagination** - Server-side pagination for scalability
- ✅ **Real-Time Statistics** - Task completion rates and analytics
- ✅ **Data Visualization** - Charts and graphs for insights
- ✅ **Profile Management** - Update user information and avatar
- ✅ **Activity Log** - Track all user actions and changes
- ✅ **Tag System** - Flexible categorization with colors
- ✅ **Priority Levels** - High, medium, low priorities
- ✅ **Due Date Tracking** - Calendar integration and reminders
- ✅ **Bulk Actions** - Select multiple tasks for batch operations
- ✅ **Export Data** - CSV/JSON export functionality

</details>

### ⚡ Performance & Optimization

<details>
<summary><b>Click to expand performance features</b></summary>

**Frontend Optimization:**
- ✅ Code splitting with React.lazy()
- ✅ Route-based lazy loading
- ✅ Image optimization and lazy loading
- ✅ Bundle size optimization (< 200KB gzipped)
- ✅ Tree shaking and dead code elimination
- ✅ Memoization with React.memo and useMemo
- ✅ Service workers for offline support
- ✅ Asset compression (Gzip/Brotli)

**Backend Optimization:**
- ✅ Database indexing on frequent queries
- ✅ Connection pooling for MongoDB
- ✅ Query optimization with select() and lean()
- ✅ Response compression middleware
- ✅ Caching strategies (Redis compatible)
- ✅ Async/await pattern throughout
- ✅ Efficient error handling
- ✅ Request batching capabilities

</details>

### 🛠️ Developer Experience

<details>
<summary><b>Click to expand developer features</b></summary>

- ✅ **TypeScript Support** - Type-safe development
- ✅ **ESLint + Prettier** - Code quality and formatting
- ✅ **Hot Module Replacement** - Instant dev updates
- ✅ **Environment Variables** - Secure configuration
- ✅ **Git Hooks** - Pre-commit linting with Husky
- ✅ **VS Code Integration** - Recommended extensions
- ✅ **Debug Configuration** - Built-in debugging support
- ✅ **API Documentation** - Swagger/OpenAPI specs
- ✅ **Component Storybook** - UI component playground
- ✅ **Database Seeding** - Sample data generators

</details>

---

## 🎬 Demo

### Live Demo

🌐 **[View Live Demo](https://modern-auth-dashboard.vercel.app)** *(Coming Soon)*

### Demo Credentials

```
Email: demo@example.com
Password: Demo@123
```

> ⚠️ **Note**: Demo database resets every 24 hours

### Video Walkthrough

[![Demo Video](https://via.placeholder.com/800x450/667eea/ffffff?text=Watch+Demo+Video)](https://youtube.com)

### Screenshots

<details>
<summary><b>View Screenshots</b></summary>

#### Login Page
![Login](https://via.placeholder.com/1920x1080/667eea/ffffff?text=Login+Page)

#### Dashboard
![Dashboard](https://via.placeholder.com/1920x1080/667eea/ffffff?text=Dashboard)

#### Task Management
![Tasks](https://via.placeholder.com/1920x1080/667eea/ffffff?text=Task+Management)

#### Dark Mode
![Dark Mode](https://via.placeholder.com/1920x1080/1e293b/ffffff?text=Dark+Mode)

</details>

---

## 🛠️ Tech Stack

### Frontend Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.2+ | UI framework |
| **Vite** | 5.0+ | Build tool & dev server |
| **Tailwind CSS** | 3.3+ | Utility-first CSS |
| **Framer Motion** | 10.0+ | Animation library |
| **React Router** | 6.20+ | Client-side routing |
| **React Hook Form** | 7.48+ | Form management |
| **Zod** | 3.22+ | Schema validation |
| **Axios** | 1.6+ | HTTP client |
| **Lucide React** | 0.292+ | Icon library |
| **Date-fns** | 2.30+ | Date utilities |

### Backend Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 18+ | Runtime environment |
| **Express** | 4.18+ | Web framework |
| **MongoDB** | 6.0+ | NoSQL database |
| **Mongoose** | 8.0+ | ODM for MongoDB |
| **JWT** | 9.0+ | Token authentication |
| **bcryptjs** | 2.4+ | Password hashing |
| **Helmet** | 7.1+ | Security headers |
| **Express Validator** | 7.0+ | Request validation |
| **Morgan** | 1.10+ | HTTP logging |
| **CORS** | 2.8+ | Cross-origin requests |

### DevOps & Tools

| Tool | Purpose |
|------|---------|
| **Docker** | Containerization |
| **Docker Compose** | Multi-container orchestration |
| **GitHub Actions** | CI/CD pipelines |
| **Nginx** | Reverse proxy & static files |
| **PM2** | Process management |
| **Sentry** | Error tracking |
| **Vitest** | Unit testing |
| **Cypress** | E2E testing |

---

## 🏗️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Layer                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  React   │  │ Tailwind │  │  Vite    │  │  PWA     │   │
│  │  App     │  │   CSS    │  │  Build   │  │  Cache   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ HTTPS/REST
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      Application Layer                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Routes  │→ │  Middle  │→ │  Contro  │→ │  Models  │   │
│  │          │  │  ware    │  │  llers   │  │          │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│       ↓              ↓              ↓              ↓        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │        Authentication & Authorization Layer          │  │
│  │     JWT • Rate Limiting • Input Validation           │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ MongoDB Protocol
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                       Database Layer                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Users   │  │  Tasks   │  │  Indexes │  │  Cache   │   │
│  │  Coll.   │  │  Coll.   │  │          │  │  Redis   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Directory Structure

```
modern-auth-dashboard/
├── 📁 backend/                    # Node.js + Express API
│   ├── 📁 src/
│   │   ├── 📁 config/            # Configuration files
│   │   │   ├── database.js       # MongoDB connection
│   │   │   └── constants.js      # App constants
│   │   ├── 📁 controllers/       # Business logic
│   │   │   ├── authController.js
│   │   │   └── taskController.js
│   │   ├── 📁 middleware/        # Custom middleware
│   │   │   ├── auth.js          # JWT verification
│   │   │   ├── errorHandler.js  # Error handling
│   │   │   └── validators.js    # Input validation
│   │   ├── 📁 models/           # MongoDB schemas
│   │   │   ├── User.js
│   │   │   └── Task.js
│   │   ├── 📁 routes/           # API endpoints
│   │   │   ├── authRoutes.js
│   │   │   └── taskRoutes.js
│   │   ├── 📁 utils/            # Helper functions
│   │   │   ├── logger.js
│   │   │   └── emailService.js
│   │   └── app.js              # Express app setup
│   ├── 📁 tests/                # Test suites
│   │   ├── unit/
│   │   ├── integration/
│   │   └── fixtures/
│   ├── 📄 .env.example
│   ├── 📄 package.json
│   ├── 📄 Dockerfile
│   └── 📄 server.js            # Entry point
│
├── 📁 frontend/                  # React application
│   ├── 📁 public/               # Static assets
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── manifest.json
│   ├── 📁 src/
│   │   ├── 📁 assets/          # Images, fonts, icons
│   │   ├── 📁 components/      # React components
│   │   │   ├── Common/         # Reusable components
│   │   │   ├── Dashboard/      # Dashboard components
│   │   │   ├── Forms/          # Form components
│   │   │   └── Layout/         # Layout components
│   │   ├── 📁 context/         # React Context
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   ├── 📁 hooks/           # Custom hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useTheme.js
│   │   │   └── useDebounce.js
│   │   ├── 📁 pages/           # Page components
│   │   │   ├── Auth/
│   │   │   ├── Dashboard/
│   │   │   └── Error/
│   │   ├── 📁 services/        # API services
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   └── taskService.js
│   │   ├── 📁 styles/          # Global styles
│   │   ├── 📁 utils/           # Utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── 📁 __tests__/           # Test files
│   ├── 📄 .env.example
│   ├── 📄 package.json
│   ├── 📄 vite.config.js
│   ├── 📄 tailwind.config.js
│   └── 📄 Dockerfile
│
├── 📁 docker/                   # Docker configurations
│   ├── nginx.conf
│   └── docker-compose.prod.yml
│
├── 📁 scripts/                  # Utility scripts
│   ├── setup.sh
│   ├── deploy.sh
│   └── seed-db.js
│
├── 📁 docs/                     # Documentation
│   ├── API.md
│   ├── DEPLOYMENT.md
│   └── CONTRIBUTING.md
│
├── 📁 .github/                  # GitHub specific
│   ├── workflows/
│   │   └── deploy.yml
│   └── ISSUE_TEMPLATE/
│
├── 📄 docker-compose.yml        # Development compose
├── 📄 .gitignore
├── 📄 LICENSE
└── 📄 README.md                 # This file
```

### Data Flow

```
User Action (Frontend)
    │
    ├──> 1. User Input (Form/Click)
    │
    ├──> 2. Client-side Validation (Zod Schema)
    │
    ├──> 3. API Request (Axios + JWT Token)
    │
    ├──> 4. Server Middleware (Auth, Validation, Rate Limit)
    │
    ├──> 5. Controller Logic (Business Logic)
    │
    ├──> 6. Database Query (MongoDB + Mongoose)
    │
    ├──> 7. Response Formatting (JSON)
    │
    ├──> 8. Client Update (State Management)
    │
    └──> 9. UI Re-render (React)
```

---

## 🚀 Quick Start

### Prerequisites Checklist

Before you begin, ensure you have:

- ✅ Node.js 18.x or higher ([Download](https://nodejs.org/))
- ✅ MongoDB 6.x or higher ([Download](https://www.mongodb.com/try/download/community))
- ✅ Git ([Download](https://git-scm.com/))
- ✅ npm/yarn/pnpm package manager
- ✅ Code editor (VS Code recommended)

### One-Command Setup

```bash
# Clone and setup everything
git clone https://github.com/yourusername/modern-auth-dashboard.git
cd modern-auth-dashboard
chmod +x scripts/setup.sh
./scripts/setup.sh
```

The setup script will:
1. ✅ Install backend dependencies
2. ✅ Install frontend dependencies
3. ✅ Copy environment templates
4. ✅ Create necessary directories
5. ✅ Setup Git hooks
6. ✅ Initialize database (optional)

### Manual Setup (Alternative)

```bash
# 1. Clone repository
git clone https://github.com/yourusername/modern-auth-dashboard.git
cd modern-auth-dashboard

# 2. Backend setup
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration

# 3. Frontend setup
cd ../frontend
npm install
cp .env.example .env.local
# Edit .env.local with API URL

# 4. Start MongoDB
# macOS: brew services start mongodb-community
# Ubuntu: sudo systemctl start mongod
# Windows: net start MongoDB

# 5. Run development servers
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Docker Quick Start (Recommended)

```bash
# Clone repository
git clone https://github.com/yourusername/modern-auth-dashboard.git
cd modern-auth-dashboard

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Access application
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
# MongoDB: mongodb://localhost:27017
```

### Verify Installation

```bash
# Check backend health
curl http://localhost:5000/health

# Expected output:
# {
#   "status": "healthy",
#   "timestamp": "2024-02-10T10:30:00.000Z",
#   "database": "connected"
# }
```

### First Steps

1. 🌐 Open browser to `http://localhost:5173`
2. 📝 Register a new account
3. 🔐 Login with credentials
4. 📊 Explore the dashboard
5. ✅ Create your first task

---

## 📦 Installation

### Method 1: Docker (Recommended for Production)

```bash
# Clone repository
git clone https://github.com/yourusername/modern-auth-dashboard.git
cd modern-auth-dashboard

# Configure environment
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
# Edit both .env files

# Build and start containers
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Stop services
docker-compose down
```

### Method 2: Local Development

#### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Required environment variables
cat > .env << EOF
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/modern_auth_db
JWT_SECRET=$(openssl rand -base64 32)
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
EOF

# Start MongoDB
# macOS
brew services start mongodb-community

# Ubuntu/Debian
sudo systemctl start mongod

# Windows (as Administrator)
net start MongoDB

# Run database migrations (if any)
npm run migrate

# Seed database with sample data (optional)
npm run seed

# Start development server
npm run dev

# Server will start on http://localhost:5000
```

#### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Configure API URL
cat > .env.local << EOF
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Modern Auth Dashboard
VITE_APP_VERSION=1.0.0
EOF

# Start development server
npm run dev

# App will start on http://localhost:5173
```

### Method 3: Production Build

```bash
# Backend production build
cd backend
npm ci --only=production
npm run build # if you have TypeScript
NODE_ENV=production npm start

# Frontend production build
cd frontend
npm ci
npm run build

# Serve with static server
npm install -g serve
serve -s dist -l 3000

# Or use nginx (see deployment section)
```

### Verification Steps

```bash
# 1. Check backend API
curl http://localhost:5000/health

# 2. Check frontend
curl http://localhost:5173

# 3. Test API endpoint
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "Test@123"
  }'

# 4. Check MongoDB connection
mongo
> use modern_auth_db
> db.users.countDocuments()
```

---

## ⚙️ Configuration

### Backend Environment Variables

Create `backend/.env`:

```env
# ================================
# Application Settings
# ================================
NODE_ENV=development              # development | production | test
PORT=5000                         # Server port
APP_NAME=Modern Auth Dashboard

# ================================
# Database Configuration
# ================================
MONGODB_URI=mongodb://localhost:27017/modern_auth_db
MONGODB_URI_PROD=mongodb+srv://username:password@cluster.mongodb.net/dbname

# MongoDB Options
MONGODB_POOL_SIZE=10
MONGODB_TIMEOUT=5000

# ================================
# JWT Configuration
# ================================
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long_change_in_production
JWT_EXPIRE=7d                     # 7 days
JWT_COOKIE_EXPIRE=7              # 7 days

# Refresh Token (Optional)
REFRESH_TOKEN_SECRET=your_refresh_token_secret_also_minimum_32_characters
REFRESH_TOKEN_EXPIRE=30d         # 30 days

# ================================
# Security Settings
# ================================
# CORS
FRONTEND_URL=http://localhost:5173
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW=900000         # 15 minutes in ms
RATE_LIMIT_MAX=100               # Max 100 requests per window

# Password
PASSWORD_MIN_LENGTH=6
PASSWORD_SALT_ROUNDS=10

# ================================
# Email Configuration (Optional)
# ================================
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_FROM=noreply@yourdomain.com

# ================================
# Cloud Storage (Optional)
# ================================
# AWS S3
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=your-bucket-name

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# ================================
# External Services
# ================================
# Sentry (Error Tracking)
SENTRY_DSN=https://xxxxxx@sentry.io/xxxxxx

# Redis (Caching)
REDIS_URL=redis://localhost:6379

# ================================
# Feature Flags
# ================================
ENABLE_EMAIL_VERIFICATION=false
ENABLE_TWO_FACTOR_AUTH=false
ENABLE_RATE_LIMITING=true
ENABLE_SWAGGER=true

# ================================
# Logging
# ================================
LOG_LEVEL=debug                  # error | warn | info | debug
LOG_FILE=./logs/app.log
```

### Frontend Environment Variables

Create `frontend/.env.local`:

```env
# ================================
# API Configuration
# ================================
VITE_API_URL=http://localhost:5000
VITE_API_TIMEOUT=10000

# ================================
# Application Settings
# ================================
VITE_APP_NAME=Modern Auth Dashboard
VITE_APP_VERSION=1.0.0
VITE_APP_DESCRIPTION=Modern authentication and task management

# ================================
# Feature Flags
# ================================
VITE_ENABLE_PWA=true
VITE_ENABLE_OFFLINE=true
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DARK_MODE=true

# ================================
# Analytics & Monitoring
# ================================
# Google Analytics
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXX-Y
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Sentry (Error Tracking)
VITE_SENTRY_DSN=https://xxxxxx@sentry.io/xxxxxx
VITE_SENTRY_ENVIRONMENT=development

# ================================
# Social Authentication (Optional)
# ================================
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_FACEBOOK_APP_ID=your-facebook-app-id
VITE_GITHUB_CLIENT_ID=your-github-client-id

# ================================
# Map Services (Optional)
# ================================
VITE_MAPBOX_TOKEN=your-mapbox-token
VITE_GOOGLE_MAPS_KEY=your-google-maps-key

# ================================
# Feature Configuration
# ================================
VITE_MAX_UPLOAD_SIZE=5242880     # 5MB in bytes
VITE_SUPPORTED_FILE_TYPES=image/jpeg,image/png,image/gif

# ================================
# Debug Settings
# ================================
VITE_DEBUG=false
VITE_LOG_LEVEL=warn              # error | warn | info | debug
```

### Database Configuration

```javascript
// backend/src/config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // Connection options
      maxPoolSize: parseInt(process.env.MONGODB_POOL_SIZE) || 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      
      // Mongoose specific
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Create indexes
    await createIndexes();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const createIndexes = async () => {
  // User indexes
  await mongoose.connection.collection('users').createIndex(
    { email: 1 },
    { unique: true }
  );

  // Task indexes
  await mongoose.connection.collection('tasks').createIndex({
    user: 1,
    status: 1,
  });
  
  await mongoose.connection.collection('tasks').createIndex({
    user: 1,
    priority: 1,
  });
  
  await mongoose.connection.collection('tasks').createIndex({
    dueDate: 1,
  });
  
  await mongoose.connection.collection('tasks').createIndex({
    user: 1,
    tags: 1,
  });

  console.log('Database indexes created');
};

module.exports = connectDB;
```

### Security Configuration

```javascript
// backend/src/config/security.js
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Rate limiting
const limiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW || 15 * 60 * 1000,
  max: process.env.RATE_LIMIT_MAX || 100,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Security headers
const helmetConfig = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
});

module.exports = { limiter, helmetConfig };
```

---

## 📡 API Documentation

### Base URL

```
Development: http://localhost:5000/api
Production:  https://api.yourdomain.com/api
```

### Authentication Header

All protected endpoints require JWT token:

```http
Authorization: Bearer <your_jwt_token>
```

### API Endpoints

#### Authentication Endpoints

<details>
<summary><b>POST /api/auth/register</b> - Register new user</summary>

**Request:**
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

**Validation Rules:**
- Name: 2-50 characters
- Email: Valid email format
- Password: Minimum 6 characters

</details>

<details>
<summary><b>POST /api/auth/login</b> - User login</summary>

**Request:**
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

**Error Response (401 Unauthorized):**
```json
{
  "success": false,
  "error": "Invalid credentials"
}
```

</details>

<details>
<summary><b>GET /api/auth/me</b> - Get current user</summary>

**Request:**
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
    "createdAt": "2024-02-10T10:30:00.000Z",
    "updatedAt": "2024-02-10T10:30:00.000Z"
  }
}
```

</details>

<details>
<summary><b>PUT /api/auth/update</b> - Update user profile</summary>

**Request:**
```http
PUT /api/auth/update
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "email": "johnupdated@example.com"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Updated",
    "email": "johnupdated@example.com",
    "role": "user"
  }
}
```

</details>

#### Task Endpoints

<details>
<summary><b>GET /api/tasks</b> - Get all tasks with filters</summary>

**Request:**
```http
GET /api/tasks?status=in-progress&priority=high&search=urgent&tag=work&page=1&limit=10
Authorization: Bearer <token>
```

**Query Parameters:**
| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `status` | string | Filter by status (todo, in-progress, completed) | all |
| `priority` | string | Filter by priority (low, medium, high) | all |
| `search` | string | Search in title and description | - |
| `tag` | string | Filter by tag name | - |
| `sort` | string | Sort field (createdAt, dueDate, priority) | -createdAt |
| `page` | number | Page number | 1 |
| `limit` | number | Items per page | 10 |

**Response (200 OK):**
```json
{
  "success": true,
  "count": 25,
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalPages": 3,
    "totalItems": 25
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

</details>

<details>
<summary><b>GET /api/tasks/stats</b> - Get task statistics</summary>

**Request:**
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
    },
    "byTag": {
      "work": 30,
      "personal": 15,
      "urgent": 5
    },
    "overdue": 3,
    "dueToday": 5,
    "dueThisWeek": 12
  }
}
```

</details>

<details>
<summary><b>POST /api/tasks</b> - Create new task</summary>

**Request:**
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

</details>

<details>
<summary><b>PUT /api/tasks/:id</b> - Update task</summary>

**Request:**
```http
PUT /api/tasks/507f1f77bcf86cd799439011
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "completed",
  "priority": "medium"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Complete project",
    "description": "Finish the backend implementation",
    "status": "completed",
    "priority": "medium",
    "dueDate": "2024-12-31T23:59:59.999Z",
    "tags": ["work", "urgent"],
    "isImportant": true,
    "user": "507f1f77bcf86cd799439012",
    "createdAt": "2024-02-10T10:30:00.000Z",
    "updatedAt": "2024-02-10T15:45:00.000Z"
  }
}
```

</details>

<details>
<summary><b>DELETE /api/tasks/:id</b> - Delete task</summary>

**Request:**
```http
DELETE /api/tasks/507f1f77bcf86cd799439011
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Task deleted successfully",
  "data": {}
}
```

</details>

### Interactive API Documentation

When running the backend server:

- **Swagger UI**: `http://localhost:5000/api-docs`
- **OpenAPI Spec**: `http://localhost:5000/api-docs/json`
- **Postman Collection**: Available in `/docs/postman/`

### Error Responses

All API errors follow this format:

```json
{
  "success": false,
  "error": "Error message here",
  "stack": "Error stack trace (development only)"
}
```

**HTTP Status Codes:**

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (validation error) |
| 401 | Unauthorized (invalid/missing token) |
| 403 | Forbidden (insufficient permissions) |
| 404 | Not Found |
| 429 | Too Many Requests (rate limit) |
| 500 | Internal Server Error |

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary-50:  #eff6ff;
--primary-100: #dbeafe;
--primary-200: #bfdbfe;
--primary-300: #93c5fd;
--primary-400: #60a5fa;
--primary-500: #3b82f6;  /* Main primary */
--primary-600: #2563eb;
--primary-700: #1d4ed8;
--primary-800: #1e40af;
--primary-900: #1e3a8a;

/* Secondary Colors */
--secondary-50:  #f8fafc;
--secondary-100: #f1f5f9;
--secondary-200: #e2e8f0;
--secondary-300: #cbd5e1;
--secondary-400: #94a3b8;
--secondary-500: #64748b;  /* Main secondary */
--secondary-600: #475569;
--secondary-700: #334155;
--secondary-800: #1e293b;
--secondary-900: #0f172a;

/* Semantic Colors */
--success: #10b981;    /* Emerald-500 */
--warning: #f59e0b;    /* Amber-500 */
--error:   #ef4444;    /* Red-500 */
--info:    #06b6d4;    /* Cyan-500 */
```

### Typography Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| **Display** | Inter | 4rem (64px) | 800 | 1.1 | -0.02em |
| **H1** | Inter | 3rem (48px) | 700 | 1.2 | -0.01em |
| **H2** | Inter | 2.25rem (36px) | 600 | 1.3 | -0.01em |
| **H3** | Inter | 1.875rem (30px) | 600 | 1.4 | 0em |
| **H4** | Inter | 1.5rem (24px) | 600 | 1.4 | 0em |
| **H5** | Inter | 1.25rem (20px) | 600 | 1.5 | 0em |
| **Body Large** | Inter | 1.125rem (18px) | 400 | 1.6 | 0em |
| **Body** | Inter | 1rem (16px) | 400 | 1.5 | 0em |
| **Body Small** | Inter | 0.875rem (14px) | 400 | 1.5 | 0em |
| **Caption** | Inter | 0.75rem (12px) | 400 | 1.5 | 0.01em |
| **Button** | Inter | 0.875rem (14px) | 600 | 1 | 0.02em |

### Spacing System

Based on 8px grid:

```css
--spacing-1:  0.25rem;  /* 4px */
--spacing-2:  0.5rem;   /* 8px */
--spacing-3:  0.75rem;  /* 12px */
--spacing-4:  1rem;     /* 16px */
--spacing-5:  1.25rem;  /* 20px */
--spacing-6:  1.5rem;   /* 24px */
--spacing-8:  2rem;     /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
```

### Responsive Breakpoints

```css
/* Tailwind CSS Breakpoints */
sm:  640px   /* Small devices (phones) */
md:  768px   /* Medium devices (tablets) */
lg:  1024px  /* Large devices (desktops) */
xl:  1280px  /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

### Component Patterns

#### Buttons

```jsx
// Primary Button
<button className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                   bg-linear-to-r from-primary-500 to-primary-700 
                   hover:from-primary-600 hover:to-primary-800 
                   active:scale-95 text-white shadow-lg hover:shadow-xl
                   disabled:opacity-50 disabled:cursor-not-allowed">
  Primary Button
</button>

// Secondary Button
<button className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                   bg-secondary-100 dark:bg-secondary-800 
                   hover:bg-secondary-200 dark:hover:bg-secondary-700
                   active:scale-95 text-secondary-900 dark:text-white">
  Secondary Button
</button>

// Outline Button
<button className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                   border-2 border-primary-500 text-primary-500
                   hover:bg-primary-500 hover:text-white active:scale-95">
  Outline Button
</button>
```

#### Cards

```jsx
// Standard Card
<div className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg 
                border border-secondary-200 dark:border-secondary-700
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-6">
  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-secondary-600 dark:text-secondary-400">Card content</p>
</div>

// Glass Card
<div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 
                border border-white/20 dark:border-gray-700/30
                rounded-xl p-6 shadow-glass">
  <h3 className="text-xl font-semibold mb-2">Glass Card</h3>
  <p className="text-secondary-600 dark:text-secondary-400">Frosted glass effect</p>
</div>
```

---

## 🧪 Testing

### Test Coverage Goals

- ✅ **Backend**: 80%+ code coverage
- ✅ **Frontend**: 75%+ code coverage
- ✅ **E2E**: Critical user flows

### Running Tests

```bash
# Run all tests
npm run test:all

# Backend tests only
cd backend
npm test

# Frontend tests only
cd frontend
npm test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage

# Watch mode
npm run test:watch

# UI mode (Vitest)
npm run test:ui
```

### Test Structure

```
__tests__/
├── unit/              # Unit tests
│   ├── backend/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── models/
│   └── frontend/
│       ├── components/
│       ├── hooks/
│       └── utils/
├── integration/       # Integration tests
│   ├── api/
│   └── database/
└── e2e/              # End-to-end tests
    ├── auth.spec.js
    └── dashboard.spec.js
```

### Example Tests

```javascript
// Backend - Controller Test
describe('Task Controller', () => {
  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Task',
        description: 'Test Description',
        status: 'todo',
        priority: 'high'
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe('Test Task');
  });
});

// Frontend - Component Test
describe('TaskCard', () => {
  it('renders task information correctly', () => {
    const task = {
      title: 'Test Task',
      description: 'Test Description',
      status: 'todo'
    };

    render(<TaskCard task={task} />);
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
```

---

## 🚀 Deployment

### Docker Deployment (Recommended)

#### Production Docker Compose

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=${MONGODB_URI}
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - mongodb
    restart: unless-stopped
    networks:
      - app-network

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "80:80"
    depends_on:
      - backend
    restart: unless-stopped
    networks:
      - app-network

  mongodb:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=${MONGO_USERNAME}
      - MONGO_INITDB_ROOT_PASSWORD=${MONGO_PASSWORD}
    restart: unless-stopped
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./docker/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./docker/ssl:/etc/nginx/ssl:ro
      - ./frontend/dist:/usr/share/nginx/html:ro
    depends_on:
      - backend
      - frontend
    restart: unless-stopped
    networks:
      - app-network

volumes:
  mongodb_data:

networks:
  app-network:
    driver: bridge
```

#### Deploy with Docker

```bash
# Build and start
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop services
docker-compose -f docker-compose.prod.yml down
```

### Cloud Platform Deployment

#### AWS Elastic Beanstalk

```bash
# Install EB CLI
pip install awsebcli

# Initialize application
eb init -p node.js-18 modern-auth-dashboard

# Create environment
eb create production

# Deploy
eb deploy

# Open application
eb open

# View logs
eb logs

# SSH into instance
eb ssh
```

#### Vercel (Frontend)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd frontend
vercel --prod

# Set environment variables
vercel env add VITE_API_URL
```

#### Heroku (Backend)

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create modern-auth-backend

# Add MongoDB addon
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set JWT_SECRET=your_secret
heroku config:set NODE_ENV=production

# Deploy
git push heroku main

# View logs
heroku logs --tail

# Open app
heroku open
```

#### DigitalOcean App Platform

```bash
# Install doctl
# https://docs.digitalocean.com/reference/doctl/

# Create app spec
cat > app.yaml << EOF
name: modern-auth-dashboard
services:
- name: backend
  github:
    repo: yourusername/modern-auth-dashboard
    branch: main
    deploy_on_push: true
  source_dir: /backend
  environment_slug: node-js
  run_command: npm start
  envs:
  - key: NODE_ENV
    value: production
  - key: JWT_SECRET
    scope: RUN_AND_BUILD_TIME
    type: SECRET

- name: frontend
  github:
    repo: yourusername/modern-auth-dashboard
    branch: main
  source_dir: /frontend
  build_command: npm run build
  output_dir: dist
  routes:
  - path: /
EOF

# Deploy
doctl apps create --spec app.yaml
```

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: cd backend && npm ci
      
      - name: Run tests
        run: cd backend && npm test
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3

  test-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: cd frontend && npm ci
      
      - name: Run tests
        run: cd frontend && npm test

  deploy-backend:
    needs: [test-backend, test-frontend]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Heroku
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: "modern-auth-backend"
          heroku_email: ${{secrets.HEROKU_EMAIL}}
          appdir: "backend"

  deploy-frontend:
    needs: [test-backend, test-frontend]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
          working-directory: ./frontend
```

---

## 📊 Monitoring & Analytics

### Health Check Endpoints

```javascript
// GET /health
{
  "status": "healthy",
  "timestamp": "2024-02-10T10:30:00.000Z",
  "uptime": 12345,
  "environment": "production",
  "version": "1.0.0"
}

// GET /health/db
{
  "status": "connected",
  "responseTime": 5,
  "collections": 2
}

// GET /health/detailed
{
  "status": "healthy",
  "checks": {
    "database": "connected",
    "memory": {
      "used": "150 MB",
      "total": "512 MB",
      "percentage": 29
    },
    "cpu": {
      "usage": 25
    }
  }
}
```

### Logging Strategy

```javascript
// Structured logging with Winston
const logger = require('./utils/logger');

// Info logs
logger.info('User logged in', {
  userId: user._id,
  email: user.email,
  ip: req.ip,
  timestamp: new Date().toISOString()
});

// Error logs
logger.error('Failed to create task', {
  error: error.message,
  stack: error.stack,
  userId: req.user?.id,
  requestId: req.id
});

// Performance logs
logger.performance('API Response Time', {
  endpoint: req.path,
  method: req.method,
  duration: Date.now() - startTime,
  status: res.statusCode
});
```

### Error Tracking (Sentry)

```javascript
// Initialize Sentry
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  beforeSend(event, hint) {
    // Filter sensitive data
    if (event.request) {
      delete event.request.cookies;
      delete event.request.headers['authorization'];
    }
    return event;
  }
});

// Use in Express
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
```

### Analytics Integration

```javascript
// Google Analytics (Frontend)
import ReactGA from 'react-ga4';

ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);

// Track page views
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

// Track events
ReactGA.event({
  category: 'Task',
  action: 'Create',
  label: 'New Task Created'
});
```

---

## 🔒 Security

### Security Checklist

- ✅ **Authentication**
  - JWT tokens with expiration
  - Secure password hashing (bcrypt)
  - Refresh token rotation
  - Account lockout after failed attempts

- ✅ **Authorization**
  - Role-based access control (RBAC)
  - Resource-level permissions
  - API key validation

- ✅ **Data Protection**
  - HTTPS/TLS encryption
  - Environment variable protection
  - Sensitive data masking in logs
  - Database encryption at rest

- ✅ **Input Validation**
  - Server-side validation
  - SQL/NoSQL injection prevention
  - XSS protection
  - CSRF tokens

- ✅ **Rate Limiting**
  - API rate limiting
  - Login attempt limiting
  - DDoS protection

- ✅ **Security Headers**
  - Content Security Policy
  - HSTS
  - X-Frame-Options
  - X-Content-Type-Options

### Security Headers Configuration

```javascript
// Helmet.js configuration
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", process.env.FRONTEND_URL],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  noSniff: true,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
}));
```

### Nginx Security Configuration

```nginx
# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

# Hide server version
server_tokens off;

# Rate limiting
limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;
limit_req zone=one burst=20 nodelay;

# SSL configuration
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers HIGH:!aNULL:!MD5;
ssl_prefer_server_ciphers on;
```

---

## 📈 Scaling

### Horizontal Scaling

```yaml
# Kubernetes Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: backend
        image: modern-auth-backend:latest
        ports:
        - containerPort: 5000
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        env:
        - name: NODE_ENV
          value: "production"
        - name: MONGODB_URI
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: mongodb-uri
```

### Database Scaling

```javascript
// MongoDB Replica Set Connection
mongoose.connect(process.env.MONGODB_URI, {
  replicaSet: 'rs0',
  readPreference: 'secondaryPreferred',
  maxPoolSize: 100,
  minPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});
```

### Caching Strategy (Redis)

```javascript
const redis = require('redis');
const client = redis.createClient({
  url: process.env.REDIS_URL
});

// Cache frequently accessed data
const getCachedTasks = async (userId) => {
  const cacheKey = `user:${userId}:tasks`;
  
  // Try cache first
  const cached = await client.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // Query database
  const tasks = await Task.find({ user: userId });
  
  // Cache for 5 minutes
  await client.setex(cacheKey, 300, JSON.stringify(tasks));
  
  return tasks;
};
```

### Load Balancing (Nginx)

```nginx
upstream backend {
    least_conn;
    server backend1:5000;
    server backend2:5000;
    server backend3:5000;
}

server {
    location /api {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🤝 Contributing

We love contributions! Here's how you can help make this project better.

### Ways to Contribute

- 🐛 **Report Bugs** - Submit detailed bug reports
- 💡 **Suggest Features** - Share your ideas for improvements
- 📝 **Improve Documentation** - Fix typos, add examples
- 🔧 **Submit Pull Requests** - Fix bugs or add features
- ⭐ **Star the Project** - Show your support
- 🗣️ **Spread the Word** - Share with others

### Development Process

1. **Fork the Repository**

```bash
# Fork via GitHub UI, then clone
git clone https://github.com/YOUR_USERNAME/modern-auth-dashboard.git
cd modern-auth-dashboard
```

2. **Create a Branch**

```bash
git checkout -b feature/amazing-feature
# or
git checkout -b fix/bug-fix
```

3. **Make Changes**

- Write clean, documented code
- Follow the existing code style
- Add tests for new features
- Update documentation

4. **Test Your Changes**

```bash
# Run linter
npm run lint

# Run tests
npm test

# Check formatting
npm run format:check
```

5. **Commit Changes**

```bash
git add .
git commit -m "feat: add amazing feature"
```

**Commit Message Convention:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Maintenance tasks

6. **Push and Create PR**

```bash
git push origin feature/amazing-feature
```

Then open a Pull Request on GitHub.

### Code Style Guidelines

```javascript
// Use modern JavaScript features
const asyncFunction = async () => {
  try {
    const result = await someAsyncOperation();
    return result;
  } catch (error) {
    logger.error('Operation failed', { error });
    throw error;
  }
};

// React components
const MyComponent = ({ prop1, prop2 }) => {
  // Hooks at the top
  const [state, setState] = useState(initialValue);
  const { data } = useQuery();
  
  // Event handlers
  const handleClick = useCallback(() => {
    // Logic
  }, [dependencies]);
  
  // Render
  return (
    <div className="component">
      {/* JSX */}
    </div>
  );
};

// PropTypes or TypeScript
MyComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};
```

### Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Include tests for new functionality
- Update documentation for API changes
- Add screenshots for UI changes
- Reference related issues (e.g., "Fixes #123")

---

## 🆘 Support

### Getting Help

- 📧 **Email**: support@example.com
- 💬 **Discord**: [Join our community](https://discord.gg/yourserver)
- 🐛 **GitHub Issues**: [Report bugs](../../issues)
- 💡 **Discussions**: [Ask questions](../../discussions)
- 📚 **Documentation**: [Read the docs](./docs)

### Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Share your knowledge and experiences
- Follow the [Code of Conduct](CODE_OF_CONDUCT.md)

### Enterprise Support

Need professional support for your organization?

- 📧 **Enterprise Sales**: enterprise@example.com
- 📞 **Phone**: +1 (555) 123-4567
- 💼 **Custom Solutions**: We offer custom development and consulting

---

## 🗺️ Roadmap

### Version 2.0 (Q2 2024)

- [ ] Real-time collaboration with WebSockets
- [ ] Team workspaces and sharing
- [ ] Advanced data visualization
- [ ] AI-powered task suggestions
- [ ] Mobile app (React Native)
- [ ] Calendar integration (Google, Outlook)
- [ ] Email notifications
- [ ] Webhooks and integrations

### Future Enhancements

- [ ] Multi-language support (i18n)
- [ ] Custom themes and branding
- [ ] Advanced reporting and analytics
- [ ] Export/Import functionality (CSV, JSON, PDF)
- [ ] Kanban board view
- [ ] Time tracking
- [ ] Recurring tasks
- [ ] File attachments
- [ ] Comments and activity feed
- [ ] API rate limiting by user
- [ ] OAuth providers (Google, GitHub, Microsoft)
- [ ] Two-factor authentication (2FA)
- [ ] Password reset via email
- [ ] Account deletion

### Experimental Features

- [ ] Voice commands
- [ ] Offline-first architecture
- [ ] Blockchain-based authentication
- [ ] Machine learning task prioritization

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Modern Auth Dashboard Team

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

See the [LICENSE](LICENSE) file for full details.

---

## 🙏 Acknowledgments

### Special Thanks

- **React Team** - For the amazing framework
- **Vercel** - For Next.js and hosting
- **MongoDB** - For the flexible database
- **Tailwind Labs** - For the utility-first CSS framework
- **All Contributors** - For making this project better

### Built With

- [React](https://react.dev/) - UI Library
- [Node.js](https://nodejs.org/) - Runtime
- [Express](https://expressjs.com/) - Web Framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Vite](https://vitejs.dev/) - Build Tool

### Inspiration

This project was inspired by modern SaaS applications and the need for a clean, secure authentication boilerplate.

---

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/yourusername/modern-auth-dashboard?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/modern-auth-dashboard?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/modern-auth-dashboard?style=social)

![GitHub issues](https://img.shields.io/github/issues/yourusername/modern-auth-dashboard)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/modern-auth-dashboard)
![GitHub license](https://img.shields.io/github/license/yourusername/modern-auth-dashboard)
![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/modern-auth-dashboard)

![Code size](https://img.shields.io/github/languages/code-size/yourusername/modern-auth-dashboard)
![Repo size](https://img.shields.io/github/repo-size/yourusername/modern-auth-dashboard)
![Contributors](https://img.shields.io/github/contributors/yourusername/modern-auth-dashboard)

</div>

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/modern-auth-dashboard&type=Date)](https://star-history.com/#yourusername/modern-auth-dashboard&Date)

---

## 👥 Contributors

Thanks to these wonderful people:

<a href="https://github.com/yourusername/modern-auth-dashboard/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=yourusername/modern-auth-dashboard" />
</a>

---

<div align="center">

**[⬆ Back to Top](#-modern-auth-dashboard)**

---

Made with ❤️ by the Open Source Community

If you found this project helpful, please consider giving it a ⭐

**[Star this repo](../../stargazers)** • **[Fork this repo](../../fork)** • **[Report an issue](../../issues)**

</div>