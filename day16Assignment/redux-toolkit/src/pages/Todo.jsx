import React from 'react'
import TodoList from '../component/TodoList'
import UpdateModel from '../component/UpdateModel'
import AddModel from '../component/AddModel'

const Todo = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-fit">
                <h1 className="text-2xl font-bold mb-4">Todo App</h1>
                <AddModel />
                <TodoList />
            </div>
        </div>
    )
}

export default Todo