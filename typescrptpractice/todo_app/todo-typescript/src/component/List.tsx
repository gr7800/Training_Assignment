import React from "react";
import "./List.css";

interface Todo {
  id: number;
  todoName: string;
  completed: boolean;
}


interface TypeTodoListProps {
  todoList: Todo[];
  setTodoList: (todo: Todo[]) => void;
}

export const List: React.FC<TypeTodoListProps> = ({ todoList, setTodoList }) => {
  const handleToggle = (index: number) => {
    const updatedList = todoList.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(updatedList);
  };

  const handleDelete = (index: number) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div className="ListContainer">
      <table>
        <thead>
          <tr>
            <th>Todo Name</th>
            <th>Status</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo, index) => (
            <tr key={todo.id} className="todo-item">
              <td>{todo.todoName}</td>
              <td style={{ color: todo.completed ? "green" : "red" }}>
                {todo.completed ? "Completed" : "Pending"}
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(index)}
                  disabled={todo.completed}
                />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(index)}
                  disabled={!todo.completed}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
