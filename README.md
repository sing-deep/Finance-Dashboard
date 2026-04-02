
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
