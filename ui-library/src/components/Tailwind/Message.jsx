import React from "react";

export default function Message() {
  return (
    <>
      <div className="dark">
        <div className="py-8 px-8 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            className="h-16 md:h-32 lg:h-48 block mx-auto rounded-full sm:mx-0 sm:shrink-0"
            src="https://tailwindcss.com/img/erin-lindford.jpg"
            alt="Woman's Face"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-black dark:text-white font-semibold">
                Erin Lindford
              </p>
              <p className="text-slate-500 font-medium">Product Engineer</p>
            </div>
            <button className="dark:bg-gray-300 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Message
            </button>
          </div>
        </div>
      </div>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="h-16 md:h-32 lg:h-48 block mx-auto rounded-full sm:mx-0 sm:shrink-0"
          src="https://tailwindcss.com/img/erin-lindford.jpg"
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
    </>
  );
}
