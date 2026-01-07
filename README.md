# PublicRelay - Article Management System

A modern web application for managing and viewing published articles built with React, TypeScript, and Vite.

## Prerequisites

- **Node.js** (v16 or higher) - [Download Node.js](https://nodejs.org/)
- **pnpm** (recommended package manager)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd public
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `pnpm dev` - Start development server with hot module reloading
- `pnpm build` - Build the application for production
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── Components/      # Reusable React components
├── pages/          # Page components (LoginPage, ArticlePage)
├── hooks/          # Custom React hooks
├── services/       # API services
├── context/        # React context for state management
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── assets/         # Static assets
```

## Features

- User authentication with session management
- Article listing with sorting capabilities
- Responsive design with styled-components
- Loading states with spinner animations
- Page title management with react-helmet
- TypeScript for type safety

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Styled Components
- **Router**: React Router
- **HTTP Client**: Axios
- **Helmet**: react-helmet (for page titles and meta tags)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:
