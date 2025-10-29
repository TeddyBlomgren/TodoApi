import React from "react";


const Form: React.FC = () => {
  return (
    <div className="relative max-w-md mx-auto p-8 rounded-2xl shadow-2xl m-8 bg-gradient-to-br
     from-indigo-900 via-violet-700 to-fuchsia-500
      text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-fuchsia-700/30">
      {/* Floating gradient orbs */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-fuchsia-400/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-400/30 rounded-full blur-3xl"></div>

      {/* Glass container */}
      <div className="relative backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-center mb-6 tracking-wide bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
          Add a New Todo
        </h2>
          

        <form className="space-y-5">
          {/* Title input */}
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-semibold text-pink-200 mb-1"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter todo title..."
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Description input */}
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-sm font-semibold text-pink-200 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={3}
              placeholder="What needs to be done?"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 text-gray-900 font-bold shadow-lg hover:shadow-pink-500/40 hover:from-cyan-300 hover:to-yellow-200 transition-all"
          >
            🚀 Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
