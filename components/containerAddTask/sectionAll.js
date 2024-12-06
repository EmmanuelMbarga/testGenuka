import React, { useState } from 'react'
import TaskList from '@/containers/taskelemnt/taskList'


export default function SectionAll(props) {
    const [selectedCard,setSelectedCard]=useState()

    const handlerSeleded=(taskId)=>{
        setSelectedCard(taskId)
        console.log(selectedCard);
        
      }
  return (
    <ul className={props.tableau.length > 1 ? "overflow-y-scroll h-80" : "h-80"}>
        {props.tableau.map((task) => (
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
      </ul>
  )
}
