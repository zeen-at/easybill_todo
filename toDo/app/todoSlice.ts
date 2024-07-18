import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

interface Todo {
  id: string;
  title: string;
    date: Date;
  //   time: Date;
  description: string;
  completed: boolean;
}

interface TodoPayload {
  title: string;
    date: Date;
  //   time: Date;
  description: string;
}

const todoSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    createTodo: (state, action: PayloadAction<TodoPayload>) => {
      const newTodo: Todo = {
        id: uuid.v4() as string,
        title: action.payload.title,
        date: action.payload.date,
        // time: action.payload.time,
        description: action.payload.description,
        completed: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== 1) {
        state.splice(index, 1);
      }
    },
    completeTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { createTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
