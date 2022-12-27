import React from "react";

export default function Position() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 place-items-center gap-10 font-mono text-white text-lg font-bold leading-6">
      <div className="relative sm:w-32 sm:h-32 rounded-lg bg-purple-300">
        <div className="absolute left-0 top-0 h-16 w-16  flex items-center justify-center bg-purple-500 shadow-2xl rounded-lg ">
          01
        </div>
      </div>

      <div className="relative sm:w-32 sm:h-32 rounded-lg bg-purple-300">
        <div className="absolute inset-x-0 top-0 h-16  flex items-center justify-center bg-purple-500 shadow-lg rounded-lg ">
          02
        </div>
      </div>

      <div className="relative sm:w-32 sm:h-32 rounded-lg bg-purple-300">
        <div className="absolute top-0 right-0 h-16 w-16  flex items-center justify-center bg-purple-500 shadow-lg rounded-lg ">
          03
        </div>
      </div>

      <div className="relative sm:w-32 sm:h-32 rounded-lg bg-purple-300">
        <div className="absolute inset-y-0 left-0 w-16  flex items-center justify-center bg-purple-500 shadow-lg rounded-lg ">
          04
        </div>
      </div>

      <div className="relative sm:w-32 sm:h-32 rounded-lg bg-purple-300">
        <div className="absolute inset-0  flex items-center justify-center bg-purple-500 shadow-lg rounded-lg ">
          05
        </div>
      </div>

      <div className="relative sm:w-32 sm:h-32 rounded-lg bg-purple-300">
        <div className="absolute inset-y-0 right-0 w-16  flex items-center justify-center bg-purple-500 shadow-lg rounded-lg ">
          06
        </div>
      </div>

      <div className="relative sm:w-32 sm:h-32 rounded-lg bg-purple-300">
        <div className="absolute bottom-0 left-0 h-16 w-16  flex items-center justify-center bg-purple-500 shadow-lg rounded-lg ">
          07
        </div>
      </div>

      <div className="relative sm:w-32 sm:h-32 rounded-lg bg-purple-300">
        <div className="absolute inset-x-0 bottom-0 h-16">08</div>
      </div>

      <div className="relative sm:w-32 sm:h-32 rounded-lg bg-purple-300">
        <div className="absolute bottom-0 right-0 h-16 w-16">09</div>
      </div>
    </div>
  );
}
