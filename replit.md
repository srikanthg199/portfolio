# Portfolio Website Project

## Overview

This is a personal portfolio website for Srikanth Golla, a Backend Engineer specializing in scalable APIs and cloud systems. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a modern design system implemented using Tailwind CSS and shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Comprehensive component library using Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Session Management**: Basic in-memory storage implementation
- **Development**: Hot reload with Vite integration

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured via environment variables)
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
- **Hero Section**: Landing page with personal branding and key statistics
- **About Section**: Professional summary with quick facts
- **Experience Section**: Work history with detailed responsibilities
- **Skills Section**: Technical skills organized by category
- **Projects Section**: Portfolio projects with metrics and links
- **Education Section**: Academic background
- **Contact Section**: Contact form with validation
- **Navigation**: Sticky header with smooth scrolling

### Backend Services
- **Contact API**: Handles contact form submissions with validation
- **User Management**: Basic user schema for future authentication
- **Storage Interface**: Abstracted storage layer for data persistence

### UI System
- **Design System**: shadcn/ui components with consistent styling
- **Theme**: Light/dark mode support with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Smooth transitions and hover effects

## Data Flow

1. **Static Content**: Portfolio data is stored in constants file for easy management
2. **Form Submission**: Contact form sends data to backend API endpoint
3. **Validation**: Both client and server-side validation for form data
4. **Response Handling**: Toast notifications for user feedback
5. **State Management**: React Query manages API state and caching

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Components**: Radix UI primitives, Heroicons
- **Styling**: Tailwind CSS, class-variance-authority
- **Forms**: React Hook Form with Zod validation
- **Utilities**: date-fns, clsx, cmdk

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL adapter
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type safety across the stack
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite dev server with Express integration
- **Type Checking**: TypeScript compilation with incremental builds
- **Database**: Local PostgreSQL instance or cloud database

### Production Build
- **Frontend**: Vite builds optimized React bundle
- **Backend**: ESBuild bundles server code for Node.js
- **Static Assets**: Served from dist/public directory
- **Environment**: NODE_ENV=production with optimized settings

### Database Setup
- **Schema**: Drizzle schema definitions in shared directory
- **Migrations**: Run `npm run db:push` to sync schema
- **Connection**: DATABASE_URL environment variable required

## Changelog

Changelog:
- July 07, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.