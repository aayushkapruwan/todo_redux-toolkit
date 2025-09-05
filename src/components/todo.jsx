import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removetodo } from "../slices/todoslice/todoslice";
function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.length === 0 ? (
        <div className="text-center text-slate-500 text-sm py-6">No tasks yet. Add your first one above.</div>
      ) : (
        <ul className="list-none space-y-3">
          {todos.map((todo, idx) => (
            <li key={todo.id} className="flex items-center justify-between rounded-xl px-4 py-3 border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center justify-center text-xs font-medium rounded-full px-2 py-0.5 ${idx % 3 === 0 ? 'bg-violet-100 text-violet-700' : idx % 3 === 1 ? 'bg-pink-100 text-pink-700' : 'bg-blue-100 text-blue-700'}`}>{idx + 1}</span>
                <span className="text-slate-800">{todo.text}</span>
              </div>
              <button
                type="button"
                onClick={() => dispatch(removetodo(todo.id))}
                className="inline-flex items-center justify-center rounded-lg px-3 py-1.5 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white text-sm font-medium transition-colors"
                aria-label="Delete task"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
