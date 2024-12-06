import React, { useState } from "react";
import Style from "../../styles/talskDay.module.css";

export default function TaskAdd(props) {
  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {props.BoxTask && (
        <div
          className={
            props.BoxTask &&
            "bg-sky-500 backdrop-blur-sm bg-opacity-20 absolute w-full rounded-md font-Outfit p-4 my-4 translate-y-0 transition"
          }
        >
          <div className="flex justify-end">
            <button
              onClick={props.HandlerFun}
              className="text-xl py-2 px-4 rounded-md transition hover:bg-red-500 hover:text-white hover:border-white hover:transition"
            >
              x
            </button>
          </div>

          <form onSubmit={handlerSubmit} className="">
            <div className="grid grid-cols-3 w-fit gap-4 MiniPortable:grid-cols-1 mobil:grid-cols-1">
              <div>
                <label htmlFor="tasks" className={`${Style.formtasklabel}`}>
                  Titre
                </label>
                <br />
                <input
                  type="text"
                  id="task"
                  name="tasks"
                  value={props.TitleTask}
                  onChange={props.HandlerFuncTitle}
                  className={`${Style.formStaskInput}`}
                ></input>
              </div>

              <div>
                <label htmlFor="projet" className="capitalize text-xl">
                  projet
                </label>
                <br />
                <input
                  type="text"
                  id="projet"
                  name="tprojet"
                  value={props.TitleProjet}
                  onChange={props.HandlerFuncProjet}
                  className={`${Style.formStaskInput}`}
                ></input>
              </div>

              <div>
                <label htmlFor="horaireDebut" className="capitalize text-xl">
                  début
                </label>
                <br />
                <input
                  type="time"
                  id="horaireDebut"
                  name="horaireDebut"
                  value={props.TimeStart}
                  onChange={props.HandlerFuncStart}
                  className={`${Style.formStaskInput}`}
                ></input>
              </div>

              <div>
                <label htmlFor="horaireDebut" className="capitalize text-xl">
                  fin
                </label>
                <br />
                <input
                  type="time"
                  id="horaireDebut"
                  name="horaireDebut"
                  value={props.TimeClosed}
                  onChange={props.HandlerFuncTitleClosed}
                  className={`${Style.formStaskInput}`}
                ></input>
              </div>
            </div>
            <div>
                <div className="my-2">
                    <h2>Ajouter des participants</h2>
                </div>
            </div>
            <div className="my-10 flex justify-center">
              <button
                onClick={props.HandlerFunAddTask}
                className="bg-black text-white text-xl p-2 rounded-lg "
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
