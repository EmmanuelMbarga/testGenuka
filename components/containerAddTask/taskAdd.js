import React, { useState } from "react";

export default function TaskAdd(props) {
    const [titletask,setTitletask]=useState("")


    const handlerChange=(e)=>{
        setTitletask(e.target.value)
    }
  return (
    <div>
      {props.BoxTask && (
        <div
          className={
            props.BoxTask &&
            "bg-red-500 absolute w-full font-Outfit p-4 my-4 translate-y-0 transition"
          }
        >
          <form>
            <div>
              <label htmlFor="tasks" className="capitalize text-xl">
                title tasks
              </label>
              <br />
              <input type="text" id="task" name="tasks" value={titletask} onChange={handlerChange}></input>
            </div>

            <div className="my-10">
              <button
                type="submit"
                className="bg-black text-white text-xl p-2 rounded-lg"
              >
                Ajouter une tache
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
