/* eslint-disable react/prop-types */
export const List = ({ todoList, setTodoList }) => {
  return (
    <div>
      <div></div>
      <div>
        {todoList &&
          todoList.map((todo,index) => (
            <div key={todo?.id}>
              <p>{todo?.todoName}</p>
              <input
                type="checkbox"
                value={todo?.completed}
                onChange={(e) => {
                  e.preventDefault();
                  setTodoList(!todo?.completed,index);
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
