import React, { useState } from "react";
import BtnstatusTask from "./navStatus/btnstatus";
import SectionAll from "../containerAddTask/sectionAll";
import SectionOpen from "../containerAddTask/sectionOpen";
import SectionClosed from "../containerAddTask/sectionClosed";
import SectionArchived from "../containerAddTask/sectionArchived";

export default function NavStatusTask(props) {
  const [card1, setCard1] = useState(true);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [card4, setCard4] = useState(false);
  const Style="text-blue"
  const handlerClicked=(e)=>{
    console.log(e.isTrusted);
    
    if (e.target.textContent=="all") {
      setCard1(true)
      setCard2(false)
      setCard3(false)
      setCard4(false)
    }
    if (e.target.textContent=="open") {
      setCard1(false)
      setCard2(true)
      setCard3(false)
      setCard4(false)
    }
    if (e.target.textContent=="closed") {
      setCard1(false)
      setCard2(false)
      setCard3(true)
      setCard4(false)
    }
    if (e.target.textContent=="archived") {
      setCard1(false)
      setCard2(false)
      setCard3(false)
      setCard4(true)
    }
    
  }
  return (
    <>
      <nav className="grid grid-cols-4 mobil:grid-cols-3 MiniPortable:grid-cols-1 transition mobil:mx-2 max-w-[800px] m-auto my-20">
        <BtnstatusTask title="all" id="all" HandlerFunc={handlerClicked} number={props.Tableau} />
        <BtnstatusTask title="open" id="open" HandlerFunc={handlerClicked} number="14" />
        <BtnstatusTask title="closed" id="closed" HandlerFunc={handlerClicked} number="19" />
        <BtnstatusTask title="archived" id="archived" HandlerFunc={handlerClicked} number="2" />
      </nav>
      <section>
          {card1 && (<SectionAll tableau={props.Tableau}/>)}
          {card2 && (<SectionOpen tableau={props.Tableau}/>)}
          {card3 && (<SectionClosed tableau={props.Tableau}/>)}
          {card4 && (<SectionArchived tableau={props.Tableau}/>)}
      </section>
    </>
  );
}
