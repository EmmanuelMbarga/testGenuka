
import NavContainer from "@/components/navbar/navContainer";
import localFont from "next/font/local";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [card1,setCard1]=useState(false)
  const [card2,setCard2]=useState(true)
  const [card3,setCard3]=useState(false)


  const handlerCliked=(e)=>{
    if (e.target.textContent=="Message") {
      setCard1(true)
      setCard2(false)
      setCard3(false)
    }
    if(e.target.textContent=="today's Talsk"){
      setCard1(false)
      setCard2(true)
      setCard3(false)
    }
    if(e.target.textContent=="last Activity"){
      setCard1(false)
      setCard2(false)
      setCard3(true)
    }  
  }
  return (
      <div className="max-w-[1000px] my-8 bg-white rounded-xl m-auto mobil:mx-2 MiniPortable:mx-2">
          <NavContainer HandlerClicked={handlerCliked}/>
          <div className="overflow-y-scroll h-[800px]">
            {card1 && (<div><p className="text-center font-Outfit capitalize text-3xl py-40 text-gray-400">none (0)</p></div>)}
            {card2 && (<div><p>today's Talsk</p></div>)}
            {card3 && (<div><p className="text-center font-Outfit capitalize text-3xl py-40 text-gray-400 Tablette:text-lg mobil:text-lg MiniPortable:text-sm  ">no Activity to day</p></div>)}
          </div>
      </div>
  );
}
