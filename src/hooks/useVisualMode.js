import { useState } from "react";

export default function useVisualMode(initial){
  const [mode, setMode] =useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(change, replace=false){
    if (replace){
      console.log("before slice", history)
      setHistory(prev=>[...prev.slice(0, prev.length - 1), change])
      setMode(change)
      return;
    }
    setMode(change)
    setHistory(prev=>[...prev,change])
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