import React from "react";
import Styles from "../../styles/navStyle.module.css";
import BtnNav from "@/containers/btnNav/compBtnNav";

export default function NavContainer(props) {

  return (
    <>
      <nav className={`${Styles.containerNav}`}>
        <BtnNav
          title="Message"
          Id="Message"
          cardStyle={props.Cards}
          handlerClick={props.HandlerClicked}
        />
        <BtnNav
          title="today's Task"
          Id="today's Task"
          cardStyle={props.Cards}
          handlerClick={props.HandlerClicked}
        />
        <BtnNav
          title="last Activity"
          Id="last Activity"
          cardStyle={props.Cards}
          handlerClick={props.HandlerClicked}
        />
      </nav>
    </>
  );
}
