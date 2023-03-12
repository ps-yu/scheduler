
export function getAppointmentsForDay(state, day) {

  const findDays = state.days.find(findDay => findDay.name === day);

  if (state.days.length === 0 || findDays === undefined) { return []; }
  
  return findDays.appointments.map((id) => { return state.appointments[id]; })

}

export function getInterviewersForDay(state, day) {

  const findDays = state.days.find(findDay => findDay.name === day);

  if (state.days.length === 0 || findDays === undefined) { return []; }
  
  return findDays.interviewers.map((id) => { return state.interviewers[id] })

}

export function getInterview(state, interview) {

  if (!interview) { return null; }
  return {
    student: interview.student, 
    interviewer: state.interviewers[interview.interviewer] 
  }

}