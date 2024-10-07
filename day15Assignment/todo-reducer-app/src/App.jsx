import React, { useReducer } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const initialState = {
  todos: [],
  inputValue: "",
  editValue: "",
  editId: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
        inputValue: "",
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
        editValue: "",
        editId: null,
      };
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    case "SET_EDIT_VALUE":
      return { ...state, editValue: action.payload };
    case "SET_EDIT_ID":
      return { ...state, editId: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () => {
    if (state.inputValue.trim()) {
      dispatch({ type: "ADD_TODO", payload: state.inputValue });
    }
  };

  const handleEditTodo = () => {
    if (state.editValue.trim() && state.editId !== null) {
      dispatch({
        type: "EDIT_TODO",
        payload: { id: state.editId, text: state.editValue },
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-fit">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={state.inputValue}
            onChange={(e) =>
              dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value })
            }
            placeholder="Add a new todo"
            className="flex-1 border border-gray-300 p-2 rounded-md"
          />
          <button
            onClick={handleAddTodo}
            className="ml-2 bg-green-400 text-white p-2 rounded-md hover:bg-green-600"
          >
            Add Todo
          </button>
        </div>

        <ul>
          {state.todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 mb-2 border-b border-gray-300"
            >
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                className="cursor-pointer flex-1"
              >
                {todo.text}
              </span>
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  checked={todo?.completed}
                  onChange={() =>
                    dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                  }
                  className="cursor-pointer"
                />
                <button
                  onClick={() => {
                    dispatch({ type: "SET_EDIT_VALUE", payload: todo.text });
                    dispatch({ type: "SET_EDIT_ID", payload: todo.id });
                  }}
                  className="text-yellow-500 cursor-pointer"
                  disabled={todo?.completed}
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_TODO", payload: todo.id })
                  }
                  className="text-red-500 cursor-pointer"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {state.editId && (
          <div className="flex mt-4">
            <input
              type="text"
              value={state.editValue}
              onChange={(e) =>
                dispatch({ type: "SET_EDIT_VALUE", payload: e.target.value })
              }
              placeholder="Edit todo"
              className="flex-1 border border-gray-300 p-2 rounded-md"
            />
            <button
              onClick={handleEditTodo}
              className="ml-2 bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
            >
              Update Todo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
