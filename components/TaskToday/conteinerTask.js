import React, { useState } from "react";
import Bodytask1 from "./bodytask1";
import NavStatusTask from "./navStatusTask";
import TaskList from "@/containers/taskelemnt/taskList";

export default function ContainerTask() {
  const [openiew,setOpenView]=useState(false)
  return (
    <div>
      <Bodytask1 />
      <NavStatusTask />
      <TaskList/>
    </div>
  );
}
