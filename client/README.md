# Modern Auth Dashboard - Frontend

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A stunning, modern authentication dashboard with seamless UX and rich animations**

Built with performance, accessibility, and developer experience at the core

[Features](#-features) • [Quick Start](#-quick-start) • [Components](#-component-library) • [Deployment](#-deployment) • [Contributing](#-contributing)

</div>

---

## 📖 Table of Contents

- [Overview](#overview)
- [Design System](#-design-system)
- [Architecture](#️-architecture)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Component Library](#-component-library)
- [State Management](#-state-management)
- [Styling System](#-styling-system)
- [Responsive Design](#-responsive-design)
- [Authentication Flow](#-authentication-flow)
- [Performance Optimization](#-performance-optimization)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [PWA Features](#-progressive-web-app-pwa)
- [SEO Optimization](#-seo-optimization)
- [Development Tools](#️-development-tools)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## Overview

Modern Auth Dashboard is a beautiful, production-ready React application featuring advanced authentication, task management, and a stunning glassmorphic UI. Built with modern web technologies and best practices for optimal performance and user experience.

### 🎯 Key Highlights

✨ **Gorgeous UI** - Glassmorphism, gradients, and smooth animations  
🚀 **Lightning Fast** - Optimized with Vite, code splitting, and lazy loading  
📱 **Fully Responsive** - Mobile-first design that works everywhere  
🔐 **Secure** - JWT authentication with protected routes  
♿ **Accessible** - WCAG 2.1 compliant with keyboard navigation  
🎨 **Themeable** - Dark/light mode with system preference detection  

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
Primary:   #3b82f6 → #1e40af   /* Blue gradient */
Secondary: #64748b → #0f172a   /* Slate gradient */
Accent:    #8b5cf6 → #7c3aed   /* Purple gradient */

/* Semantic Colors */
Success:   #10b981              /* Emerald */
Warning:   #f59e0b              /* Amber */
Error:     #ef4444              /* Red */
Info:      #06b6d4              /* Cyan */

/* Backgrounds */
Light:     #ffffff → #f8fafc   /* White to gray */
Dark:      #0f172a → #1e293b   /* Dark slate gradient */
```

### Typography

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| **H1** | Inter | 3rem (48px) | 700 (Bold) | 1.2 |
| **H2** | Inter | 2.25rem (36px) | 600 (Semibold) | 1.3 |
| **H3** | Inter | 1.875rem (30px) | 600 (Semibold) | 1.4 |
| **Body** | Inter | 1rem (16px) | 400 (Regular) | 1.5 |
| **Small** | Inter | 0.875rem (14px) | 400 (Regular) | 1.5 |
| **Code** | Mono | 0.875rem (14px) | 400 (Regular) | 1.5 |

### Design Principles

🔸 **Glass Morphism** - Semi-transparent backgrounds with backdrop blur  
🔸 **Neumorphism** - Soft shadows for subtle depth  
🔸 **Gradients** - Multi-color gradients for visual richness  
🔸 **Micro-interactions** - Smooth transitions and hover effects  
🔸 **Consistent Spacing** - 8px base unit system  
🔸 **Color Contrast** - Minimum 4.5:1 ratio for accessibility  

---

## 🏗️ Architecture

```
frontend/
├── public/                      # Static assets
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── robots.txt
├── src/
│   ├── components/              # Reusable UI components           
│   │   ├── AnimatedBackground.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── ProtectedRoute.jsx   
│   │   ├── TaskCard.jsx
│   │   ├── StatsCard.jsx
│   │   ├── Modals/              
│   │   │   ├── DeleteConfirmationModal.jsx  
│   │   ├── Navbar.jsx
│   ├── services/                # React Context providers
│   │   ├── api.js
|   |   ├── taskService.ks
│   │   └── authService.js
│   ├── hooks/                  # Custom React hooks
│   │   ├── useAuth.js
│   ├── pages/                  # Page components
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── TaskForm.jsx   # Custom animations
│   ├── App.jsx
|   ├── index.css              # Main App component
│   └── main.jsx               # Application entry point
├── .env.example               # Environment variables template
├── eslint.config.js             # Prettier configuration
├── index.html                # HTML entry point
├── vite.config.js        # Vitest configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

---

## ✨ Features

### 🎯 Core Features

- ✅ **JWT Authentication** - Secure login/register with automatic token management
- ✅ **Protected Routes** - Role-based route protection and redirection
- ✅ **Responsive Design** - Seamless experience across all device sizes
- ✅ **Dark/Light Mode** - System preference detection with manual toggle
- ✅ **Form Validation** - Robust client-side validation with instant feedback
- ✅ **Real-time Updates** - Optimistic UI updates for instant feedback
- ✅ **Error Handling** - Comprehensive error boundaries and user-friendly messages

### 📊 Dashboard Features

- 📝 **Task Management** - Create, read, update, delete tasks with ease
- 🔍 **Advanced Filtering** - Multi-criteria filtering and search
- 📈 **Task Statistics** - Visual analytics and progress tracking
- 👤 **Profile Management** - Update profile information and avatar
- 🏷️ **Tag System** - Organize tasks with custom tags
- ⭐ **Priority Levels** - High, medium, and low priority management
- 📅 **Due Date Tracking** - Calendar integration and reminders
- 📊 **Activity Log** - Track all user actions and changes

### 🎨 UI/UX Features

- 🌈 **Glass Morphism** - Modern frosted glass aesthetic
- ✨ **Micro-animations** - Delightful hover effects and transitions
- ⏳ **Loading States** - Skeleton loaders and progress indicators
- 🔔 **Toast Notifications** - Non-intrusive success/error messages
- ♿ **Accessibility** - Screen reader support, keyboard navigation
- 🎭 **Error Boundaries** - Graceful error recovery
- 🖼️ **Image Optimization** - Lazy loading and responsive images
- 🎯 **Focus Management** - Smart focus handling for modals and dialogs

### ⚡ Performance Features

- 🚀 **Code Splitting** - Route-based lazy loading for faster initial load
- 🗜️ **Bundle Optimization** - Tree shaking and minification
- 💾 **Smart Caching** - Service workers for offline functionality
- 🧠 **Memoization** - Optimized re-renders with React.memo and useMemo
- 📦 **Asset Optimization** - Compressed images and fonts
- ⚡ **Prefetching** - Intelligent resource prefetching
- 📊 **Performance Monitoring** - Built-in performance metrics

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Version | Download |
|------------|---------|----------|
| **Node.js** | v16.x or higher | [nodejs.org](https://nodejs.org/) |
| **npm/yarn/pnpm** | Latest | Included with Node.js |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |

Optional:
- **VS Code** - Recommended code editor
- **React DevTools** - Browser extension for debugging

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/modern-auth-dashboard.git
cd modern-auth-dashboard/frontend
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Environment Setup

```bash
# Copy the example environment file
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
```

> ⚠️ **Important**: Never commit `.env.local` to version control!

### 4. Start Development Server

```bash
# Start the development server
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The app will be available at `http://localhost:5173`

### 5. Verify Installation

Open your browser and navigate to:
```
http://localhost:5173
```

You should see the login page with animated background!

---

## 📁 Project Structure

### Component Hierarchy

```jsx
App
├── AuthProvider (Context)
│   └── User authentication state
├── ThemeProvider (Context)
│   └── Dark/Light mode state
├── AnimatedBackground
│   └── Gradient animation layer
├── ErrorBoundary
│   └── Top-level error handling
└── Routes
    ├── Public Routes
    │   ├── Login
    │   ├── Register
    │   └── ForgotPassword
    └── Protected Routes (Auth Required)
        ├── Layout
        │   ├── Navbar
        │   ├── Sidebar
        │   └── Main Content
        ├── Dashboard
        │   ├── StatsCard (x4)
        │   ├── FilterPanel
        │   └── TaskCard (list)
        ├── Profile
        │   ├── ProfileHeader
        │   ├── ProfileForm
        │   └── AvatarUpload
        ├── TaskForm
        │   └── Form Fields
        └── Settings
            └── Preferences
```

---

## 🧩 Component Library

### Common Components

#### LoadingSpinner

```jsx
import LoadingSpinner from '@/components/Common/LoadingSpinner';

// Usage
<LoadingSpinner size="lg" color="primary" />

// Props
size: 'sm' | 'md' | 'lg' | 'xl'
color: 'primary' | 'secondary' | 'white'
fullScreen: boolean
```

#### Toast Notifications

```jsx
import { toast } from '@/components/Common/Toast';

// Success notification
toast.success('Task created successfully!');

// Error notification
toast.error('Failed to delete task');

// Info notification
toast.info('Changes saved automatically');

// Warning notification
toast.warning('Session expires in 5 minutes');
```

#### ProtectedRoute

```jsx
import ProtectedRoute from '@/components/Common/ProtectedRoute';

// Usage in Routes
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

### Form Components

#### Input Component

```jsx
import Input from '@/components/Forms/Input';

<Input
  label="Email Address"
  type="email"
  placeholder="john@example.com"
  error={errors.email}
  {...register('email')}
/>
```

#### Select Component

```jsx
import Select from '@/components/Forms/Select';

<Select
  label="Priority"
  options={[
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
  ]}
  {...register('priority')}
/>
```

---

## 🔄 State Management

### Context-based State

```javascript
// Authentication Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const login = async (credentials) => {
    const response = await authService.login(credentials);
    setUser(response.user);
    localStorage.setItem('token', response.token);
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };
  
  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
```

### Local Component State

```javascript
// Hook-based state management
const [tasks, setTasks] = useState([]);
const [filters, setFilters] = useState({
  status: 'all',
  priority: 'all',
  search: ''
});

// Derived state
const filteredTasks = useMemo(() => {
  return tasks.filter(task => {
    const matchesStatus = filters.status === 'all' || task.status === filters.status;
    const matchesPriority = filters.priority === 'all' || task.priority === filters.priority;
    const matchesSearch = task.title.toLowerCase().includes(filters.search.toLowerCase());
    return matchesStatus && matchesPriority && matchesSearch;
  });
}, [tasks, filters]);
```

### Form State (React Hook Form)

```javascript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Schema definition
const taskSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().optional(),
  status: z.enum(['todo', 'in-progress', 'completed']),
  priority: z.enum(['low', 'medium', 'high']),
  dueDate: z.string().optional()
});

// Form usage
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(taskSchema)
});

const onSubmit = async (data) => {
  await taskService.createTask(data);
};
```

---

## 🎨 Styling System

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-left': 'slideLeft 0.3s ease-out',
        'slide-right': 'slideRight 0.3s ease-out',
        'scale-up': 'scaleUp 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.45)',
        'neumorphic': '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.7)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
```

### Custom CSS Utilities

```css
/* src/styles/globals.css */

/* Glass Morphism Effect */
.glass-effect {
  @apply backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 
         border border-white/20 dark:border-gray-700/30
         shadow-glass;
}

.glass-effect-strong {
  @apply backdrop-blur-xl bg-white/20 dark:bg-gray-900/30 
         border border-white/30 dark:border-gray-700/40
         shadow-glass-lg;
}

/* Gradient Text */
.gradient-text {
  @apply bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 
         bg-clip-text text-transparent;
}

.gradient-text-blue {
  @apply bg-gradient-to-r from-primary-400 to-primary-600 
         bg-clip-text text-transparent;
}

/* Button Styles */
.btn-primary {
  @apply px-6 py-3 rounded-lg font-semibold transition-all duration-300 
         bg-gradient-to-r from-primary-500 to-primary-700 
         hover:from-primary-600 hover:to-primary-800 
         active:scale-95 text-white shadow-lg hover:shadow-xl
         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100;
}

.btn-secondary {
  @apply px-6 py-3 rounded-lg font-semibold transition-all duration-300 
         bg-secondary-100 dark:bg-secondary-800 
         hover:bg-secondary-200 dark:hover:bg-secondary-700
         active:scale-95 text-secondary-900 dark:text-white
         disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-outline {
  @apply px-6 py-3 rounded-lg font-semibold transition-all duration-300 
         border-2 border-primary-500 text-primary-500
         hover:bg-primary-500 hover:text-white
         active:scale-95
         disabled:opacity-50 disabled:cursor-not-allowed;
}

/* Card Styles */
.card {
  @apply bg-white dark:bg-secondary-800 rounded-xl shadow-lg 
         border border-secondary-200 dark:border-secondary-700
         transition-all duration-300
         hover:shadow-xl hover:-translate-y-1;
}

.card-glass {
  @apply glass-effect rounded-xl p-6
         transition-all duration-300
         hover:bg-white/15 dark:hover:bg-gray-900/25;
}

/* Input Styles */
.input-field {
  @apply w-full px-4 py-3 rounded-lg
         bg-secondary-50 dark:bg-secondary-900
         border border-secondary-300 dark:border-secondary-700
         focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
         transition-all duration-200
         placeholder:text-secondary-400;
}

/* Scrollbar Styles */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  @apply bg-secondary-100 dark:bg-secondary-800 rounded-full;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-secondary-400 dark:bg-secondary-600 rounded-full hover:bg-secondary-500;
}
```

---

## 📱 Responsive Design

### Breakpoints

Tailwind's default responsive breakpoints:

```css
/* Mobile First Approach */
sm: 640px    /* Small devices (phones) */
md: 768px    /* Medium devices (tablets) */
lg: 1024px   /* Large devices (desktops) */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

### Responsive Patterns

```jsx
// Grid Layout - Responsive columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Cards adjust based on screen size */}
</div>

// Flex Direction - Stack on mobile, row on desktop
<div className="flex flex-col md:flex-row gap-4">
  <div className="w-full md:w-1/2 lg:w-1/3">
    {/* Content */}
  </div>
</div>

// Text Sizing - Smaller on mobile, larger on desktop
<h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
  Responsive Heading
</h1>

// Padding/Margin - Less space on mobile
<div className="p-4 md:p-6 lg:p-8">
  {/* Content with responsive padding */}
</div>

// Hide/Show Elements
<div className="hidden md:block">
  {/* Only visible on medium screens and up */}
</div>

<div className="block md:hidden">
  {/* Only visible on small screens */}
</div>
```

### Mobile Navigation

```jsx
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white dark:bg-secondary-900 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          {/* Desktop menu items */}
        </div>
        
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <HamburgerIcon />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            {/* Mobile menu items */}
          </div>
        )}
      </div>
    </nav>
  );
};
```

---

## 🔐 Authentication Flow

### Login Sequence

```javascript
// 1. User enters credentials
const credentials = { email, password };

// 2. API call to backend
const response = await authService.login(credentials);

// 3. JWT token received and stored
localStorage.setItem('token', response.token);
localStorage.setItem('user', JSON.stringify(response.user));

// 4. User data stored in context
setUser(response.user);

// 5. Protected routes become accessible
navigate('/dashboard');

// 6. Token automatically added to subsequent API requests
// (via Axios interceptor)
```

### Token Management

```javascript
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add token to all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

### Protected Routes Implementation

```jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  
  if (loading) {
    return <LoadingSpinner fullScreen />;
  }
  
  if (!user) {
    // Redirect to login, save attempted location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
};

export default ProtectedRoute;
```

---

## 📊 Performance Optimization

### 1. Code Splitting

```javascript
import { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/Common/LoadingSpinner';

// Lazy load route components
const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));
const Profile = lazy(() => import('@/pages/Dashboard/Profile'));
const TaskForm = lazy(() => import('@/pages/Dashboard/TaskForm'));

// Usage in Routes with Suspense
<Suspense fallback={<LoadingSpinner fullScreen />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/tasks/new" element={<TaskForm />} />
  </Routes>
</Suspense>
```

### 2. Image Optimization

```jsx
// Lazy loading images
<img
  src={avatar}
  alt="User avatar"
  loading="lazy"
  className="w-32 h-32 rounded-full object-cover"
/>

// Responsive images with srcset
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcSet={`${imageLarge} 1x, ${imageLargeRetina} 2x`} 
  />
  <source 
    media="(min-width: 768px)" 
    srcSet={`${imageMedium} 1x, ${imageMediumRetina} 2x`} 
  />
  <img 
    src={imageSmall} 
    srcSet={`${imageSmall} 1x, ${imageSmallRetina} 2x`}
    alt="Responsive" 
    loading="lazy"
  />
</picture>
```

### 3. Bundle Optimization

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }) // Analyze bundle size
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk - Core dependencies
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // UI chunk - UI libraries
          ui: ['lucide-react', 'framer-motion'],
          // Forms chunk - Form-related libraries
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Utils chunk - Utility libraries
          utils: ['axios', 'date-fns'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
```

### 4. Memoization

```jsx
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive components
const TaskCard = memo(({ task, onUpdate, onDelete }) => {
  return (
    <div className="card">
      {/* Task content */}
    </div>
  );
});

// Memoize expensive computations
const filteredTasks = useMemo(() => {
  return tasks.filter(task => {
    return task.status === selectedStatus && 
           task.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
}, [tasks, selectedStatus, searchTerm]);

// Memoize callback functions
const handleTaskUpdate = useCallback((taskId, updates) => {
  setTasks(prev => prev.map(task => 
    task._id === taskId ? { ...task, ...updates } : task
  ));
}, []);
```

### 5. Debouncing

```javascript
// Custom hook
import { useState, useEffect } from 'react';

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

// Usage in search
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useDebounce(searchTerm, 300);

useEffect(() => {
  if (debouncedSearch) {
    fetchTasks({ search: debouncedSearch });
  }
}, [debouncedSearch]);
```

---

## 🧪 Testing

### Testing Setup

```bash
# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom 
npm install -D @testing-library/user-event jsdom

# Run tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode
npm run test:watch

# Run in UI mode
npm run test:ui
```

### Test Configuration

```javascript
// vitest.config.js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/__tests__/',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### Test Examples

```javascript
// __tests__/unit/components/TaskCard.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TaskCard from '@/components/Dashboard/TaskCard';

describe('TaskCard', () => {
  const mockTask = {
    _id: '1',
    title: 'Test Task',
    description: 'Test description',
    status: 'todo',
    priority: 'high',
  };

  it('renders task information correctly', () => {
    render(<TaskCard task={mockTask} />);
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('calls onUpdate when status changes', () => {
    const mockOnUpdate = vi.fn();
    render(<TaskCard task={mockTask} onUpdate={mockOnUpdate} />);
    
    const statusButton = screen.getByRole('button', { name: /change status/i });
    fireEvent.click(statusButton);
    
    expect(mockOnUpdate).toHaveBeenCalledWith(mockTask._id, { status: 'in-progress' });
  });

  it('calls onDelete when delete button is clicked', () => {
    const mockOnDelete = vi.fn();
    render(<TaskCard task={mockTask} onDelete={mockOnDelete} />);
    
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalledWith(mockTask._id);
  });
});
```

```javascript
// __tests__/integration/auth.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import Login from '@/pages/Auth/Login';
import * as authService from '@/services/authService';

vi.mock('@/services/authService');

describe('Login Flow', () => {
  it('successfully logs in a user', async () => {
    const user = userEvent.setup();
    
    authService.login.mockResolvedValue({
      token: 'fake-token',
      user: { id: '1', name: 'Test User', email: 'test@example.com' },
    });

    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );

    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(authService.login).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });
});
```

---

## 🚀 Deployment

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

# Analyze bundle size
npm run build -- --analyze
```

### Docker Deployment

#### Dockerfile

```dockerfile
# Multi-stage build for smaller image size
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

#### Build and Run

```bash
# Build Docker image
docker build -t modern-auth-frontend:latest .

# Run container
docker run -d \
  -p 3000:80 \
  --name modern-auth-frontend \
  modern-auth-frontend:latest

# View logs
docker logs -f modern-auth-frontend
```

### Nginx Configuration

```nginx
# nginx.conf
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;

    sendfile on;
    tcp_nopush on;
    keepalive_timeout 65;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/x-font-ttf
        font/opentype
        image/svg+xml;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        # Security headers
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;
        add_header Referrer-Policy "no-referrer-when-downgrade" always;
        add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

        # Cache static assets
        location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        location ~* \.(css|js)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        location ~* \.(woff|woff2|ttf|otf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
            add_header Access-Control-Allow-Origin *;
        }

        # SPA routing - serve index.html for all routes
        location / {
            try_files $uri $uri/ /index.html;
            add_header Cache-Control "no-cache";
        }

        # API proxy (if needed)
        location /api {
            proxy_pass http://backend:5000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Error pages
        error_page 404 /index.html;
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root /usr/share/nginx/html;
        }
    }
}
```

### CI/CD with GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '18'

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm run test:coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.event_name == 'push'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build application
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
          VITE_APP_NAME: ${{ secrets.VITE_APP_NAME }}
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: dist
          path: dist/
      
      - name: Deploy to AWS S3
        uses: jakejarvis/s3-sync-action@v0.5.1
        with:
          args: --acl public-read --follow-symlinks --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: 'us-east-1'
          SOURCE_DIR: 'dist'
      
      - name: Invalidate CloudFront cache
        uses: chetan/invalidate-cloudfront-action@v2
        env:
          DISTRIBUTION: ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}
          PATHS: '/*'
          AWS_REGION: 'us-east-1'
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

### Deployment Platforms

#### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

#### AWS S3 + CloudFront

```bash
# Build the app
npm run build

# Sync to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

---

## 📱 Progressive Web App (PWA)

### PWA Configuration

```javascript
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'robots.txt'],
      manifest: {
        name: 'Modern Auth Dashboard',
        short_name: 'AuthDash',
        description: 'Modern authentication and task management dashboard',
        theme_color: '#3b82f6',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\./i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24, // 24 hours
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});
```

### Install Prompt

```jsx
import { useEffect, useState } from 'react';

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstall(false);
    }
  };

  if (!showInstall) return null;

  return (
    <div className="fixed bottom-4 right-4 glass-effect p-4 rounded-lg">
      <p className="mb-2">Install app for better experience!</p>
      <button onClick={handleInstall} className="btn-primary">
        Install
      </button>
    </div>
  );
};
```

---

## 🔍 SEO Optimization

### Meta Tags

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>Modern Auth Dashboard | Secure Task Management</title>
    <meta name="title" content="Modern Auth Dashboard | Secure Task Management">
    <meta name="description" content="Beautiful, modern authentication dashboard with task management, real-time updates, and enterprise-grade security. Built with React and Tailwind CSS.">
    <meta name="keywords" content="dashboard, authentication, react, tasks, management, productivity, tailwind">
    <meta name="author" content="Your Name">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yourapp.com">
    <meta property="og:title" content="Modern Auth Dashboard | Secure Task Management">
    <meta property="og:description" content="Beautiful and secure authentication dashboard with task management">
    <meta property="og:image" content="https://yourapp.com/og-image.png">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://yourapp.com">
    <meta property="twitter:title" content="Modern Auth Dashboard | Secure Task Management">
    <meta property="twitter:description" content="Beautiful and secure authentication dashboard">
    <meta property="twitter:image" content="https://yourapp.com/twitter-image.png">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#3b82f6">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://yourapp.com">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### Structured Data

```jsx
// components/SEO/StructuredData.jsx
const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Modern Auth Dashboard",
    "description": "Modern authentication dashboard with task management",
    "url": "https://yourapp.com",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Web",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Your Company"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
```

### Sitemap Generation

```javascript
// scripts/generate-sitemap.js
import { writeFileSync } from 'fs';

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/login', changefreq: 'monthly', priority: 0.8 },
  { url: '/register', changefreq: 'monthly', priority: 0.8 },
  { url: '/dashboard', changefreq: 'daily', priority: 0.9 },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://yourapp.com${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');
```

---

## 🛠️ Development Tools

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dsznajder.es7-react-js-snippets",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "christian-kohler.path-intellisense",
    "eamodio.gitlens",
    "usernamehw.errorlens",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "naumovs.color-highlight"
  ]
}
```

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

### Package Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext js,jsx --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,json,css,md}\"",
    "format:check": "prettier --check \"src/**/*.{js,jsx,json,css,md}\"",
    "type-check": "tsc --noEmit",
    "analyze": "vite-bundle-visualizer",
    "prepare": "husky install"
  }
}
```

### Git Hooks with Husky

```bash
# Install Husky
npm install -D husky lint-staged

# Initialize Husky
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"
```

```json
// package.json
{
  "lint-staged": {
    "*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,css,md}": [
      "prettier --write"
    ]
  }
}
```

---

## 🔧 Troubleshooting

### Common Issues

#### Issue: Build Fails with Memory Error

```bash
# Solution: Increase Node memory limit
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

#### Issue: Vite Dev Server Not Hot Reloading

```javascript
// vite.config.js - Add server configuration
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
});
```

#### Issue: Tailwind Classes Not Working

```bash
# 1. Check tailwind.config.js content paths
# 2. Ensure PostCSS is configured
# 3. Restart dev server
npm run dev
```

#### Issue: CORS Errors in Development

```javascript
// vite.config.js - Add proxy
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
```

#### Issue: Images Not Loading After Build

```jsx
// Use absolute paths or import images
import logo from '@/assets/logo.png';

// Or use public folder
<img src="/logo.png" alt="Logo" />
```

### Debug Mode

```bash
# Enable debug logging
DEBUG=vite:* npm run dev

# Enable React DevTools Profiler
# Add to .env.local
VITE_DEBUG=true
```

### Performance Debugging

```javascript
// Add to main.jsx for performance monitoring
if (import.meta.env.DEV) {
  import('react-dom').then(ReactDOM => {
    const { unstable_trace } = ReactDOM;
    // Performance tracking
  });
}
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Workflow

1. **Fork the Repository**

```bash
git clone https://github.com/yourusername/modern-auth-dashboard.git
cd modern-auth-dashboard/frontend
```

2. **Create a Feature Branch**

```bash
git checkout -b feature/amazing-feature
```

3. **Make Your Changes**

- Write clean, documented code
- Follow the existing code style
- Add tests for new features
- Update documentation as needed

4. **Run Tests and Linting**

```bash
npm run lint
npm run format
npm test
```

5. **Commit Your Changes**

```bash
git add .
git commit -m "feat: add amazing feature"
```

6. **Push to Your Fork**

```bash
git push origin feature/amazing-feature
```

7. **Open a Pull Request**

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Code Style Guidelines

```javascript
// Component Structure
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Component description
 * @param {Object} props - Component props
 */
const MyComponent = ({ prop1, prop2 }) => {
  // 1. Hooks
  const [state, setState] = useState(initialValue);
  
  // 2. Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  // 3. Event Handlers
  const handleClick = () => {
    // Handler logic
  };
  
  // 4. Render Helpers
  const renderContent = () => {
    // Render logic
  };
  
  // 5. Return JSX
  return (
    <div className="container">
      {renderContent()}
    </div>
  );
};

// PropTypes
MyComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

// Default Props
MyComponent.defaultProps = {
  prop2: 0,
};

export default MyComponent;
```

### Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Include tests for new functionality
- Update documentation for API changes
- Add screenshots for UI changes
- Reference related issues

---

## 📄 License

This project is licensed under the MIT License.

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

See the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Resources

### Get Help

- 📧 **Email**: support@example.com
- 💬 **Discord**: [Join our community](https://discord.gg/yourserver)
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/modern-auth-dashboard/issues)
- 📖 **Documentation**: [Full Documentation](https://docs.example.com)
- 💡 **Discussions**: [GitHub Discussions](https://github.com/yourusername/modern-auth-dashboard/discussions)

### Useful Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Guide](https://reactrouter.com/)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)

---

## 🙏 Acknowledgments

Special thanks to:

- React team for the amazing framework
- Vite team for blazing-fast tooling
- Tailwind CSS for the utility-first approach
- All contributors who have helped improve this project

---

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/yourusername/modern-auth-dashboard?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/modern-auth-dashboard?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/modern-auth-dashboard)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/modern-auth-dashboard)
![GitHub license](https://img.shields.io/github/license/yourusername/modern-auth-dashboard)
![Bundle size](https://img.shields.io/bundlephobia/minzip/your-package)

</div>

---

## 🗺️ Roadmap

### Version 2.0 (Coming Soon)

- [ ] Real-time collaboration features
- [ ] Advanced data visualization
- [ ] Mobile app (React Native)
- [ ] AI-powered task suggestions
- [ ] Calendar integration
- [ ] Team workspaces
- [ ] Advanced reporting
- [ ] Webhook integrations

### Future Enhancements

- WebSocket support for real-time updates
- Internationalization (i18n)
- Custom themes and branding
- Export/Import functionality
- Advanced search with filters
- Notification system
- Activity timeline

---

<div align="center">

**[⬆ Back to Top](#modern-auth-dashboard---frontend)**

Made with ❤️ and ☕ by the Modern Auth Team

**Star this repo if you find it helpful!** ⭐

![Twitter Follow](https://img.shields.io/twitter/follow/yourhandle?style=social)

</div>