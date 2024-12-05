import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

export default function TaskList() {
  return (
    <div className="font-Outfit  overflow-y-scroll">
        <div>
          <div className="flex justify-around items-center mobil:px-4 MiniPortable:px-4">
            <div>
              <h1 className="text-3xl capitalize mobil:text-xl MiniPortable:text-lg line-through">client review & freedback</h1>
              <h2 className="text-xl capitalize text-gray-400 mt-4 mobil:text-lg mobil:mt-2 MiniPortable:text-sm MiniPortable:mt-2">crypto wallet redesign</h2>
            </div>
            <div className="w-10 h-10 bg-blue-400 rounded-full flex justify-center items-center">
              <IoMdCheckmark className="text-2xl text-white" />
            </div>
          </div>

          <div className="flex justify-around gap-4 items-center mt-14 mobil:flex-col MiniPortable:flex-col mobil:mt-8">
            <div className="flex gap-4 MiniPortable:px-2">
              <h3  className="text-xl capitalize text-gray-500 MiniPortable:text-lg">today</h3>
              <span  className="text-lg capitalize text-gray-400 MiniPortable:text-sm">10:00 PM - 11:45 PM</span>
            </div>
            <div className="flex">
              <div className="bg-red-500 w-14 h-14 rounded-full"></div>
              <div className="bg-red-500 w-14 border-white border-4 -ml-4 h-14 rounded-full"></div>
              <div className="bg-red-500 w-14 border-white border-4 -ml-4  h-14 rounded-full"></div>
              <div className="bg-red-500 w-14 border-white border-4 -ml-4  h-14 rounded-full flex justify-center"><button>+ 4</button></div>
            </div>
          </div>
        </div>
      </div>
  )
}
