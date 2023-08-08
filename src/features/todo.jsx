import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const toDo = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, actions) => {
      state.value.push(actions.payload);
      // async () => {
      //   const response = await new Promise((resolve) =>
      //     setTimeout(() => resolve({}), 5000)
      //   );
      //   return response;
      // }
    },
    deleteTask: (state, actions) => {
      state.value.splice(actions.payload, 1);
    },
  },
});

export const { addTask, deleteTask } = toDo.actions;

export default toDo.reducer;
