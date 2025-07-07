# Portfolio Website Project

## Overview

This is a personal portfolio website for Srikanth Golla, a Backend Engineer specializing in scalable APIs and cloud systems. The application is built as a modern React frontend application with a beautiful design system implemented using Tailwind CSS and shadcn/ui components.

## System Architecture

### Frontend Architecture

-   **Framework**: React 18 with TypeScript
-   **Build Tool**: Vite for fast development and optimized builds
-   **Routing**: Wouter for lightweight client-side routing
-   **State Management**: TanStack Query for API state management
-   **Styling**: Tailwind CSS with shadcn/ui component library
-   **UI Components**: Comprehensive component library using Radix UI primitives
-   **Deployment**: Optimized for Vercel static hosting

## Key Components

### Frontend Components

-   **Hero Section**: Landing page with personal branding and key statistics
-   **About Section**: Professional summary with quick facts
-   **Experience Section**: Work history with detailed responsibilities
-   **Skills Section**: Technical skills organized by category
-   **Projects Section**: Portfolio projects with metrics and links
-   **Education Section**: Academic background
-   **Contact Section**: Contact information and links
-   **Navigation**: Sticky header with smooth scrolling

### UI System

-   **Design System**: shadcn/ui components with consistent styling
-   **Theme**: Light/dark mode support with CSS custom properties
-   **Responsive Design**: Mobile-first approach with Tailwind breakpoints
-   **Animations**: Smooth transitions and hover effects

## Data Flow

1. **Static Content**: Portfolio data is stored in constants file for easy management
2. **Client-Side Routing**: Wouter handles navigation between sections
3. **State Management**: React Query manages client state
4. **Responsive Design**: Tailwind CSS breakpoints for mobile-first design

## External Dependencies

### Frontend Dependencies

-   **React Ecosystem**: React, React DOM, React Query
-   **UI Components**: Radix UI primitives, Heroicons, Lucide React
-   **Styling**: Tailwind CSS, class-variance-authority
-   **Forms**: React Hook Form with Zod validation
-   **Utilities**: date-fns, clsx, cmdk, framer-motion
-   **Routing**: Wouter for client-side navigation

### Development Tools

-   **Build**: Vite with React plugin
-   **TypeScript**: Full type safety across the application
-   **PostCSS**: CSS processing with Tailwind
-   **Deployment**: Vercel for static hosting

## Deployment Strategy

### Development Environment

-   **Hot Reload**: Vite dev server with instant updates
-   **Type Checking**: TypeScript compilation with incremental builds
-   **Local Development**: `npm run dev` starts development server

### Production Build

-   **Frontend**: Vite builds optimized React bundle
-   **Static Assets**: Generated in dist directory
-   **Optimization**: Tree shaking, code splitting, and asset optimization
-   **Deployment**: Automatic deployment to Vercel on git push

### Build Commands

-   **Development**: `npm run dev` - Start development server
-   **Build**: `npm run build` - Create production build
-   **Preview**: `npm run preview` - Preview production build locally

## Changelog

Changelog:

-   July 07, 2025. Initial frontend-only setup
-   Removed backend components and focused on static portfolio

## User Preferences

Preferred communication style: Simple, everyday language.
