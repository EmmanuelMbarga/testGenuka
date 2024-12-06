import React from "react";
import Style from "../../styles/talskDay.module.css"
import ContainerTitle from "./bodyTalskElemnt/containerTitle";
import ContainerAddTask from "./bodyTalskElemnt/containerAddTask";

const Bodytask1 = (props) => {
  return (
    <div className={`${Style.conteinerElementTalsk}`}>
        <ContainerTitle/>
        <ContainerAddTask handlerClicked={props.HandlerFun}/>
    </div>
  );
};

export default Bodytask1;
