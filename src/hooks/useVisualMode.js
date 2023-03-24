import { useState } from "react";

export default function useVisualMode(initial){
  const [mode, setMode] =useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(change, replace=false){
    if (replace){
      setHistory([...history.slice(0, history.length - 1), change])
      setMode(change)
      return;
    }
    setMode(change)
    setHistory([...history,change])
  }
  function back(){
    if (history.length > 1){
      const arr = [...history];
      arr.pop();
      setHistory([...arr]);
      setMode(arr[arr.length-1]);
    }
  }
  return {mode,transition, back };
}