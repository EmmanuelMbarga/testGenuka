import React, { useState } from "react";
import Bodytask1 from "./bodytask1";
import NavStatusTask from "./navStatusTask";
import TaskList from "@/containers/taskelemnt/taskList";
import TaskAdd from "../containerAddTask/taskAdd";

export default function ContainerTask() {
  const [boxTask,setBoxTask]=useState(false)
  const [tableau,setTableau]=useState([])

  const handlerClick=()=>{
    setBoxTask(!boxTask)
  }
  return (
    <div className="relative">
      <Bodytask1 HandlerFun={handlerClick} />
      <TaskAdd BoxTask={boxTask}/>
      <NavStatusTask />
      {/* <TaskList/> */}
    </div>
  );
}
