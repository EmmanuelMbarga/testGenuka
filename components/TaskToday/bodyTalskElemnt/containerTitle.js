import React from "react";
import Style from "../../../styles/talskDay.module.css"



export default function ContainerTitle() {
   let today=new Date()
    let date=today
   console.log(date);
   
  return (
    <div>
      <h1 className={`${Style.textTitelTask}`}>today's talsk</h1>
      <h2 className={`${Style.subTitleTask}`}>wednesday, 11 May</h2>
    </div>
  );
}
