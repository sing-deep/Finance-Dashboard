# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Finance Dashboard UI

A modern and responsive finance dashboard built using React. This project focuses on providing a clean user experience for managing financial transactions with role-based access control.

# Features

- 🔐 Role-based access (Admin / Viewer)
- ➕ Add, ✏️ Edit, ❌ Delete transactions (Admin only)
- 📋 View transaction list with details
- 📅 Date filtering using date picker
- 📊 Data visualization with charts (category-wise insights)
- ⏳ Skeleton loaders for better UX during loading states
- 📱 Responsive design for different screen sizes

#Tech Stack

- React (Vite)
- Context API (State Management)
- Recharts (for data visualization)
- React DatePicker
- Tailwind CSS (UI Styling)
- React Icons

# Project Structure

- `components/` → Reusable UI components
- `pages/` → Dashboard, Transactions, Insights
- `context/` → Global state management
- `data/` → Static/mock transaction data

# Purpose

This project is built as part of a frontend assignment to demonstrate:
- Component-based architecture
- State management using Context API
- Role-based UI rendering
- Clean and scalable UI design

# Future Improvements

- API integration (real backend)
- Authentication system
- Dark mode support
- Export transactions (CSV/PDF)

# Learnings

- Handling role-based UI logic
- Managing global state efficiently
- Creating reusable components
- Improving UX with loaders and feedback states
