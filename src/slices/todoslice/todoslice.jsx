import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoslice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    addtodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload });
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const {addtodo,removetodo}=todoslice.actions
export default todoslice.reducer
