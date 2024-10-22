import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./component/List";
import Form from "./component/Form";

interface TypeTodoItem {
  id: number;
  todoName: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<TypeTodoItem[]>(() => {
    const storedTodoList = localStorage.getItem("todoItem");
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoItem", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="todoApp">
      <Form
        setTodoList={(value: TypeTodoItem) =>
          setTodoList((prev) => [...prev, value])
        }
      />
      <List
        todoList={todoList}
        setTodoList={(updatedList: TypeTodoItem[]) => setTodoList(updatedList)}
      />
    </div>
  );
};

export default App;
