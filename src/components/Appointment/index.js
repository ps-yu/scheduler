import React from "react";
import Empty from "./Empty";
import Header from "./Header";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "../../hooks/useVisualMode"
import "./styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING"
const DELETE = "DELETE"
const CONFIRM = "CONFRIRM"
const EDIT = "EDIT"
const ERROR_SAVE = "ERROR_SAVE"
const ERROR_DELETE = "ERROR_DELETE"

export default function Appointment (props){
  const { mode, transition, back} = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props
    .bookInterview(props.id, interview)
    .then(()=>transition(SHOW))
    .catch(()=>transition(ERROR_SAVE,true))
  };

  function onDelete() {
    transition(DELETE, true)
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(()=> transition(ERROR_DELETE,true))
  }
   

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={()=> transition(CONFIRM)}
          onEdit ={()=> transition(EDIT)}
      />)}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel = {back}
          onSave = {save}
        />
      )}
      {mode === SAVING && <Status message="Saving"/>}
      {mode === DELETE && <Status message="Deleting" />}
      {mode === CONFIRM &&
       <Confirm message="Delete the appointment?" onDelete={onDelete} onCancel={back}>
        </Confirm>
        }
      {mode === EDIT && (
        <Form
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        interviewers={props.interviewers}
        onCancel = {back}
        onSave = {save}
      />
      )}
      {mode === ERROR_DELETE && <Error message="Error Deleting" onClose={back}/>}
      {mode === ERROR_SAVE && <Error message="Error saving" onClose={back}/>}
    </article>
  )
}