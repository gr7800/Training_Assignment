import React, { useState } from "react";
import "./App.css";
import InputFeild from "./component/InputFeild";
import { Todo } from "./component/model";
import TodoList from "./component/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((prev) => [...prev, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todo);

  return (
    <div className="App bg-lime-200 h-svh">
      <header className="text-3xl font-bold text-center uppercase">
        Todo With React Typescript
      </header>
      <InputFeild todo={todo} setTodo={setTodo} handleSubmit={handleAdd} />
      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
