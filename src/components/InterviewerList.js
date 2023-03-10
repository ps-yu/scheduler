import React from 'react';
import "components/Interviewer.scss"
import InterviewerListItem from './InterViewerListItem';

export default function InterviewerList(props){
  const listOfPeople = props.interviewers.map((interviewer) => {

    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
      />  
    )
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listOfPeople}</ul>
   </section>
  )}

