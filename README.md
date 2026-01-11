# Chatbot App

A premium React 19 application built with Vite, TypeScript, and a focus on developer experience and visual excellence.

## 🚀 Tech Stack

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Auto-imports**: [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)
- **Type Safety**: [vite-plugin-checker](https://vite-plugin-checker.netlify.app/)
- **Linting & Formatting**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- **Styling**: Modern CSS with Glassmorphism and Animations

## ✨ Features

- **Auto-imports**: No need to manually import `useState`, `useEffect`, or components in `src/components`.
- **Strict Typing**: Maximum TypeScript strictness enabled for robust code.
- **Build Safety**: Real-time type checking in development (overlay) and strict build-time checks.
- **Premium UI**: Clean, responsive layout with smooth transitions and a modern aesthetic.

## 📂 Project Structure

- `src/components/`: Place your components here to enable auto-imports.
- `src/auto-imports.d.ts`: Automatically generated type declarations.
- `src/index.css`: Global design system and premium styles.

## 🛠️ Get Started

### Scripts

- `npm run dev`: Starts the development server with real-time type checking.
- `npm run build`: Compiles the project and runs strict type checks.
- `npm run format`: Formats the entire codebase using Prettier.
- `npm run lint`: Runs ESLint to check for code quality issues.

### Installation

```bash
npm install
npm run dev
```

## 📝 Configuration

- `vite.config.ts`: Vite and plugin configuration (checker, auto-import).
- `tsconfig.app.json`: Strict TypeScript settings.
- `.prettierrc`: Consistent code formatting rules.
- `eslint.config.js`: Modern ESLint flat configuration.
