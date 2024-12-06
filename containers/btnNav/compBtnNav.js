import React from "react";
import Styles from "../../styles/navStyle.module.css";

export default function BtnNav(props) {
  console.log(props.cardStyle);

  return (
    <div>
      <button
        onClick={props.handlerClick}
        className={`${Styles.btnNavStyleOn}`}
        id={props.Id}
      >
        {props.title}
      </button>
    </div>
  );
}
