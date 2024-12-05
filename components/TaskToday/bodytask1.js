import React from "react";
import Style from "../../styles/talskDay.module.css"
import ContainerTitle from "./bodyTalskElemnt/containerTitle";
import ContainerTask from "./conteinerTask";

const Bodytask1 = () => {
  return (
    <div className={`${Style.conteinerElementTalsk}`}>
        <ContainerTitle/>
        <ContainerTask/>
    </div>
  );
};

export default Bodytask1;
