import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import Style from "../../styles/talskDay.module.css"

export default function TaskList(props) {
  return (
    <div className="font-Outfit">
        <div>
          <div className={`${Style.taskCard1}`}>
            <div>
              <h1 className={`${Style.taskCardtitle}`}>{props.title}</h1>
              <h2 className={`${Style.taskSubTitle}`}>{props.projet}</h2>
            </div>
            <div className={`${Style.containerSelecteTaskOn}`}>
              <IoMdCheckmark className={`${Style.seledtTaskIcon}`} />
            </div>
          </div>

          <div className="flex justify-around gap-4 items-center mt-14 mobil:flex-col MiniPortable:flex-col mobil:mt-8">
            <div className="flex gap-4 MiniPortable:px-2">
              <h3  className="text-xl capitalize text-gray-500 MiniPortable:text-lg">today</h3>
              <span  className="text-lg capitalize text-gray-400 MiniPortable:text-sm">{props.Start} - {props.Closed}</span>
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
