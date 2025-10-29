import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import NewComponent from "./components/NewComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
    
  // Apply or remove dark mode on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`
        min-h-screen transition-colors duration-700
        flex flex-col items-center justify-center
        bg-gradient-to-br 
        ${darkMode
          ? "from-gray-900 via-indigo-950 to-fuchsia-900"
          : "from-fuchsia-400 via-indigo-400 to-blue-400"
        }
        text-gray-900 dark:text-white
      `}
    >
      {/* Floating animated gradient orbs */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-fuchsia-400/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-56 h-56 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Header */}
      <header className="w-full flex justify-between items-center p-6 z-10">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-fuchsia-600 bg-clip-text text-transparent drop-shadow-md">
          Grupp 6 Todo App 🚀
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`
            px-5 py-2 font-semibold rounded-lg shadow-md transition-all 
            border border-white/20 backdrop-blur-sm
            ${darkMode
              ? "bg-gradient-to-r from-indigo-900 to-purple-700 hover:from-indigo-800 hover:to-purple-600"
              : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400"
            }
          `}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Main Content */}
      <main className="z-10 w-full flex flex-col items-center px-4 md:px-0">
        <Form />

        {/* Example Card */}
        <NewComponent  
        title={"helllo world"}
        desc={"Im describing...."}
        />
      </main>

      {/* Footer */}
      <footer className="z-10 py-4 text-sm text-gray-700 dark:text-gray-300 opacity-80">
        © {new Date().getFullYear()} Grupp 6 — Built with ❤️ using React + Tailwind
      </footer>
    </div>
  );
}

export default App;
