import React from "react";

export default function BtnstatusTask(props) {

  
  return (
    <div onClick={props.HandlerFunc} id={props.id} className="border-r flex justify-between px-8 MiniPortable:px-2 mobil:px-1 mobil:border-none MiniPortable:border-none MiniPortable:mt-2 mobil:mb-3">
      <button className="text-gray-400 text-xl capitalize MiniPortable:text-lg mobil:text-lg">
        {props.title}
      </button>
      <div className="w-10 h-10 flex justify-center items-center bg-gray-400 rounded-full text-sm text-white p-2 ml-2 mobil:ml-2 mobil:text-sm MiniPortable:text-xs ">
        <span>
            {props.number.length}
        </span>
      </div>
    </div>
  );
}
