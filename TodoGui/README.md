# 🌓 React App

A simple **Vite + React + TypeScript + Tailwind CSS** using Tailwind's built-in **dark mode** feature using the `"class"` strategy.

## 🚀 Features

- Light/Dark mode toggle using Tailwind’s `dark:` classes  
- Theme preference saved in `localStorage`  
- Modern stack with latest **Vite**, **Node**, and **npm**

## 🧰 Requirements

- [Node.js](https://nodejs.org/) (latest LTS or current)
- npm (comes with Node)
- Vite and Tailwind CSS (already configured)

## ⚙️ Setup

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Visit - http://localhost:5173

## 🧠 How It Works

Tailwind is configured with `darkMode: "class"` in tailwind.config.js

React toggles a .dark class on the `<html>` element

Tailwind automatically applies styles defined with dark: variants
(e.g. dark:bg-gray-800, dark:text-white)

📘 Docs
Tailwind Dark Mode

Vite + React Guide
