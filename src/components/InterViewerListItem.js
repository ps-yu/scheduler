import React from 'react';
import classNames from "classnames";
import "components/InterViewerListItem.scss"

export default function InterviewerListItem(props){
  
  //To target the desired element in the css file
  const interviewerClass = classNames("interviewers__item",{
    "interviewers__item--selected" : props.selected,
  })

  return (
    <li className={interviewerClass} onClick={props.setInterviewer} >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected &&  props.name}
    </li>
  )
}