import { useState } from "react";
import { addtodo } from "../slices/todoslice/todoslice";
import { useDispatch } from "react-redux";
function TodoForm() {
    const dispatch=useDispatch()
    const [inputedtodovalue,setinputedtodovalue]=useState('')
  return (
      <form onSubmit={(e)=>{
        e.preventDefault()
        if(!inputedtodovalue){
            return
        }
        else{
            dispatch(addtodo(inputedtodovalue))
            setinputedtodovalue('')
        }
      }} className="flex bg-slate-50 border border-slate-200 w-full rounded-full shadow-sm">
          <input
              type="text"
              value={inputedtodovalue}
              onChange={(e)=>{
                setinputedtodovalue(e.target.value)
              }}
              placeholder="Write Todo..."
              className="w-full rounded-l-full px-5 outline-none duration-150 bg-transparent py-3 text-slate-800 placeholder:text-slate-400"
          />
          <button type="submit" className="rounded-r-full px-5 py-3 bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white font-medium shrink-0 transition-colors">
              Add
          </button>
      </form>
  );
}

export default TodoForm;