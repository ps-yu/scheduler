import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  /* 
  Function to applu css to the specific elements based on classnames
  */
  const dayClass = classNames("day-list__item",{
    "day-list__item--selected" : props.selected,
    "day-list__item--full" : !props.spots
  });
/*
Function to run spot/spots based on the number of spots remaining
*/
const formatSpots = function(spots){
  if (spots === 0){
    return <h3 className="text--light">no spots remaining</h3>
  }else if (spots === 1){
    return <h3 className="text--light">1 spot remaining</h3>
  }else {
    return <h3 className="text--light">{spots} spots remaining</h3>
  }
}

  return (
    <li className={dayClass} onClick = {() => props.setDay(props.name)} selected= {props.selected}>
      <h2 className="text--regular">{props.name}</h2> 
      {formatSpots(props.spots)}
    </li>
  );
}