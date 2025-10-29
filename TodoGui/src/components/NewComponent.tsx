



function NewComponent(props :{title: string, desc:string}) {




  return (
    <>
     
      <div className="max-w-lg w-full bg-white/30 dark:bg-gray-800/40 backdrop-blur-md m-6 rounded-xl px-6 py-8 shadow-2xl border border-white/20 transition hover:shadow-fuchsia-500/30">
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold mb-2 text-indigo-900 dark:text-indigo-200">
              {props.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {props.desc}
            </p>
            <button className="px-4 py-2 text-sm rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-400 hover:to-indigo-400 text-white font-semibold shadow-lg transition-all">
              Learn More
            </button>
          </div>
        </div>
   </>
  
  )
}

export default NewComponent