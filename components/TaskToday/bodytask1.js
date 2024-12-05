import React from "react";
import { FaPlus } from "react-icons/fa6";

const Bodytask1 = () => {
  return (
    <div className="flex justify-around font-Outfit gap-3 mt-14 mobil:mx-2 MiniPortable:mx-2">
      <div>
        <h1 className="capitalize text-4xl font-bold mobil:text-xl MiniPortable:text-lg">today's talsk</h1>
        <h2 className="text-gray-400 text-2xl mobil:text-base MiniPortable:text-base">wednesday, 11 May</h2>
      </div>
      <div className="bg-sky-100 flex items-center gap-4 text-blue-600 rounded-lg px-8 mobil:px-4 mobil:gap-2 MiniPortable:gap-2">
        <FaPlus className="text-xl mobil:text-lg MiniPortable:text-base"/>
        <button className="text-xl capitalize MiniPortable:text-base">new task</button>
      </div>
    </div>
  );
};

export default Bodytask1;
