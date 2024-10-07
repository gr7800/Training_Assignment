import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, isEditing, selectInput, setInput, updateTask } from '../redux/slices/todoSlice';

const AddModel = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector(selectInput);
    const isEdit = useSelector(isEditing);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch(addTask());
        } else {
            alert('Please enter a valid task');
        }
    };

    const handleEditTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch(updateTask());
        } else {
            alert('Please enter a valid task to update');
        }
    };

    return (
        <div className="flex mt-4">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => dispatch(setInput(e.target.value))}
                placeholder={isEdit ? 'Edit your task' : 'Add a new task'}
                className="flex-1 border border-gray-300 p-2 rounded-md"
            />
            <div className="flex space-x-2 ml-2">
                {isEdit ? (
                    <>
                        <button
                            onClick={handleEditTodo}
                            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                        >
                            Update Task
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleAddTodo}
                        className="bg-green-400 text-white p-2 rounded-md hover:bg-green-500"
                    >
                        Add Task
                    </button>
                )}
            </div>
        </div>
    );
};

export default AddModel;
