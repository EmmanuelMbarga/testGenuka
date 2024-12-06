import React from "react";
import Style from "../../../styles/talskDay.module.css"



export default function ContainerTitle() {
   
  return (
    <div>
      <h1 className={`${Style.textTitelTask}`}>today's task</h1>
      <h2 className={`${Style.subTitleTask}`}>wednesday, 11 May</h2>
    </div>
  );
}
