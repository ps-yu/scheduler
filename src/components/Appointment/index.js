import React from "react";
import Empty from "./Empty";
import Header from "./Header";
import Show from "./Show";

import "./styles.scss";


export default function Appointment (props){
  return (
    <article className="appointment">
      <Header time={props.time}/>
      {props.interview ? <Show names={props.interview}/> : <Empty />}
    </article>
  )
}