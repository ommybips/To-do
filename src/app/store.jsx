import { configureStore } from "@reduxjs/toolkit";
import toDo from "../features/todo";

export const store = configureStore({
  reducer: { toDo: toDo },
});
