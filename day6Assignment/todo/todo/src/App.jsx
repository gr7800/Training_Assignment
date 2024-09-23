import { useEffect, useState } from 'react';
import './App.css';
import Form from './component/Form';
import { List } from './component/List';

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoItem")) || []);

  useEffect(() => {
    console.log(todoList);
    localStorage.setItem("todoItem", JSON.stringify(todoList));
  }, [todoList])

  return (
    <div className="todoApp">
      <Form setTodoList={(value) => setTodoList((prev) => [...prev, value])} />
      <List
        todoList={todoList}
        setTodoList={(updatedList) => setTodoList(updatedList)}
      />
    </div>
  );
}

export default App;
