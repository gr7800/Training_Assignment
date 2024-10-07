import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  todos: [],
  isEditing: false,
  editTaskId: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    addTask: (state) => {
      const newTask = {
        id: Date.now(),
        taskName: state.input,
        isCompleted: false,
      };
      state.todos.push(newTask);
      state.input = "";
    },
    toggleTaskStatus: (state, action) => {
      const taskIndex = state.todos.findIndex(
        (task) => task.id === action.payload
      );
      if (taskIndex !== -1) {
        state.todos[taskIndex].isCompleted =
          !state.todos[taskIndex].isCompleted;
      }
    },
    startEditingTask: (state, action) => {
      const taskId = action.payload;
      state.isEditing = true;
      state.editTaskId = taskId;
      const taskToEdit = state.todos.find((task) => task.id === taskId);
      if (taskToEdit) {
        state.input = taskToEdit.taskName;
      }
    },
    updateTask: (state) => {
      const taskIndex = state.todos.findIndex(
        (task) => task.id === state.editTaskId
      );
      if (taskIndex !== -1) {
        state.todos[taskIndex].taskName = state.input;
        state.input = "";
        state.isEditing = false;
        state.editTaskId = null;
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.todos = state.todos.filter((task) => task.id !== taskId);
    },
  },
});

export const selectTodo = (state) => state.todo.todos;
export const selectInput = (state) => state.todo.input;
export const isEditing = (state) => state.todo.isEditing;

export const { setInput,toggleTaskStatus, addTask, startEditingTask, updateTask, deleteTask } =
  todoSlice.actions;

export default todoSlice.reducer;
