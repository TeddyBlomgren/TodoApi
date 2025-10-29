import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply or remove the 'dark' class on the <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow hover:bg-indigo-600 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 m-4 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <h1 className="bg-gradient text-white p-4 text-2xl font-bold">
              Grupp sex todo app
            </h1>
          </span>
        </div>

        <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes upside-down
        </h3>

        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  );
}

export default App;
