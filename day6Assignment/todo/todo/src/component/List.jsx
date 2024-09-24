/* eslint-disable react/prop-types */
import "./List.css"
export const List = ({ todoList, setTodoList }) => {
  const handleToggle = (index) => {
    const updatedList = todoList.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(updatedList);
  };

  const handleDelete = (index) => {
    const updatedList = todoList.filter((todo, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div className="ListContainer">
      <table>
        <thead>
          <th>Todo Name</th>
          <th>Status</th>
          <th>Update</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {todoList &&
            todoList.map((todo, index) => (
              <tr key={todo?.id} className="todo-item">
                <td>{todo?.todoName}</td>
                <td style={{ color: `${todo?.completed ? 'green' : "red"}` }}>
                  {todo?.completed ? "Completed" : "Pending"}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={todo?.completed}
                    onChange={() => handleToggle(index)}
                    disabled={todo.completed}
                  />
                </td>
                <td>
                  <button onClick={() => handleDelete(index)} disabled={!todo.completed}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};