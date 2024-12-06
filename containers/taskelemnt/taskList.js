import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Style from "../../styles/talskDay.module.css";

export default function TaskList(props) {
  console.log(props.isSelected );
  
  return (
    <div className={`${Style.cardsStyle}`}>
      <div onClick={props.HandlerSelected} className={`${Style.taskStyleCard}`}>
        <div className={`${Style.taskCard1}`}>
          <div>
            <h1 className={props.isSelected ?`${Style.taskCardtitlethrough}`:`${Style.taskCardtitle}`}>{props.title}</h1>
            <h2 className={`${Style.taskSubTitle}`}>{props.projet}</h2>
          </div>
          {props.isSelected ? (
            <div className={`${Style.containerSelecteTaskOn}`}>
              <IoMdCheckmark className={`${Style.seledtTaskIcon}`} />
            </div>
          ) : null}
        </div>

        <div className={`${Style.containerElemntSub}`}>
          <div className={`${Style.containerTaskDate}`}>
            <h3 className={`${Style.dateTask}`}>today</h3>
            <span className={`${Style.timedateTask}`}>
              {props.Start} - {props.Closed}
            </span>
          </div>
          <div className="flex">
            <div className={`${Style.cardStyleCollborator}`}></div>
            <div className={`${Style.cardStyleCollborator}`}></div>
            <div className={`${Style.cardStyleCollborator}`}></div>
            <div className={`${Style.cardStyleCollboratorend}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
