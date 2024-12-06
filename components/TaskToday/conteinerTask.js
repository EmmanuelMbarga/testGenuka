import React, { useState } from "react";
import Bodytask1 from "./bodytask1";
import NavStatusTask from "./navStatusTask";
import TaskList from "@/containers/taskelemnt/taskList";
import TaskAdd from "../containerAddTask/taskAdd";

export default function ContainerTask() {
  const [boxTask, setBoxTask] = useState(false);
  const [titletask, setTitletask] = useState("");
  const [titleprojet, setTitleprojet] = useState("");
  const [timeOpen, setTimeOpen] = useState("");
  const [timeClosed, setTimeClosed] = useState("");
  const [tableau, setTableau] = useState([]);
  const [selectedCard,setSelectedCard]=useState()


  const handlerChangeTitleFunc = (e) => {
    setTitletask(e.target.value);
  };
  const handlerChangeProjet = (e) => {
    setTitleprojet(e.target.value);
  };
  const handlerChangeOpen = (e) => {
    setTimeOpen(e.target.value);
  };
  const handlerChangeClosed = (e) => {
    setTimeClosed(e.target.value);
  };
  const handlerclicked = (e) => {
    setTableau((task) => {
      return [
        ...task,
        {
          id: task.length + 1,
          title: titletask,
          projet: titleprojet,
          Start: timeOpen,
          Closed: timeClosed,
        },
      ];
    });
    setTitletask("");
    setTitleprojet("");
    setTimeOpen("");
    setTimeClosed("");
  };

  const handlerClick = () => {
    setBoxTask(!boxTask);
  };

  const handlerSeleded=(taskId)=>{
    setSelectedCard(taskId)
    console.log(selectedCard);
    
  }

  return (
    <div className="relative">
      <Bodytask1 HandlerFun={handlerClick} />
      <TaskAdd
        BoxTask={boxTask}
        TitleTask={titletask}
        TitleProjet={titleprojet}
        TimeStart={timeOpen}
        TimeClosed={timeClosed}
        HandlerFuncTitle={handlerChangeTitleFunc}
        HandlerFuncProjet={handlerChangeProjet}
        HandlerFuncStart={handlerChangeOpen}
        HandlerFuncTitleClosed={handlerChangeClosed}
        HandlerFunAddTask={handlerclicked}
        HandlerFun={handlerClick}
      />
      <NavStatusTask Tableau={tableau} />
      {/* <ul className={tableau.length ? "overflow-y-scroll h-80" : "h-80"}>
        {tableau.map((task) => (
          <div key={task.id}>
            <TaskList
              title={task.title}
              projet={task.projet}
              Start={task.Start}
              Closed={task.Closed}
              HandlerSelected={()=>handlerSeleded(task.id)}
              isSelected={selectedCard===task.id}
            />
          </div>
        ))}
      </ul> */}
    </div>
  );
}
