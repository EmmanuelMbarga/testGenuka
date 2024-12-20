import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function ContainerAddTask(props) {
  return (
    <div onClick={props.handlerClicked} className="bg-sky-100 flex items-center gap-4 text-blue-600 rounded-lg px-8 mobil:px-4 mobil:gap-2 MiniPortable:gap-2">
      <FaPlus className="text-xl mobil:text-lg MiniPortable:text-base" />
      <button className="text-xl capitalize MiniPortable:text-base">
        new task
      </button>
    </div>
  );
}
