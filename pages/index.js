
import NavContainer from "@/components/navbar/navContainer";
import ContainerTask from "@/components/TaskToday/conteinerTask";
import localFont from "next/font/local";
import { useState } from "react";



export default function Home() {
  const [card1,setCard1]=useState(false)
  const [card2,setCard2]=useState(true)
  const [card3,setCard3]=useState(false)


  const handlerCliked=(e)=>{
    if (e.target.id=="Message") {
      setCard1(true)
      setCard2(false)
      setCard3(false)
    }
    if(e.target.id=="today's Task"){
      setCard1(false)
      setCard2(true)
      setCard3(false)
    }
    if(e.target.id=="last Activity"){
      setCard1(false)
      setCard2(false)
      setCard3(true)
    }  
    
  }
  return (
      <div className="max-w-[1000px] my-8 bg-white rounded-xl m-auto mobil:mx-2 MiniPortable:mx-2">
          <NavContainer HandlerClicked={handlerCliked}/>
          <div className="p-4 h-[600px]">
            {card1 && (<><p className="text-center font-Outfit capitalize text-3xl py-40 text-gray-400">none (0)</p></>)}
            {card2 && (<div><ContainerTask/></div>)}
            {card3 && (<><p className="text-center font-Outfit capitalize text-3xl py-40 text-gray-400 Tablette:text-lg mobil:text-lg MiniPortable:text-sm  ">no Activity to day</p></>)}
          </div>
      </div>
  );
}
