import React from "react";
import BtnstatusTask from "./navStatus/btnstatus";

export default function NavStatusTask(props) {
  return (
    <nav className="grid grid-cols-4 mobil:grid-cols-3 MiniPortable:grid-cols-1 transition mobil:mx-2 max-w-[800px] m-auto my-20">
        <BtnstatusTask title="all" number={props.Tableau}/>
        <BtnstatusTask title="open" number="14"/>
        <BtnstatusTask title="closed" number="19"/>
        <BtnstatusTask title="archived" number="2"/>
    </nav>
  );
}
