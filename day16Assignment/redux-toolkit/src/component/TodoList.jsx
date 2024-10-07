import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, selectTodo, startEditingTask, toggleTaskStatus } from '../redux/slices/todoSlice';
import { FaTrash, FaEdit } from "react-icons/fa";

const TodoList = () => {
    const todos = useSelector(selectTodo);
    const dispatch = useDispatch();
    return (
        <ul>
            {todos.length > 0 && todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex items-center justify-between p-2 mb-2 border-b border-gray-300"
                >
                    <span
                        style={{
                            textDecoration: todo?.isCompleted ? "line-through" : "none",
                        }}
                        className="cursor-pointer flex-1"
                    >
                        {todo.taskName}
                    </span>
                    <div className="flex gap-4">
                        <input
                            type="checkbox"
                            checked={todo?.isCompleted}
                            onChange={() => dispatch(toggleTaskStatus(todo.id))
                            }
                            className="cursor-pointer"
                        />
                        <button
                            onClick={() => dispatch(startEditingTask(todo.id))}
                            className="text-yellow-500 cursor-pointer"
                            disabled={todo?.isCompleted}
                        >
                            <FaEdit />
                        </button>
                        <button
                            onClick={() => dispatch(deleteTask(todo.id))}
                            className="text-red-500 cursor-pointer"
                        >
                            <FaTrash />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TodoList