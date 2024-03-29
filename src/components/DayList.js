import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props){
  const days = props.days.map((day) => {
    console.log("Day.name",day.name)
    console.log("props", props)
    return (
        <DayListItem 
          key = {day.id}
          name = {day.name}
          spots = {day.spots}
          selected = {day.name === props.day}
          setDay = {props.onChange}
        />
    )
  });
  return (
    <ul>
      {days}
    </ul>
  )
}