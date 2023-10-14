import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };

      state.todoList.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    updateTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.editInput }
          : todo
      );
    },
    completeTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, completeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
