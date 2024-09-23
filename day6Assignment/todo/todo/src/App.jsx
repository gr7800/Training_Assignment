import { useState } from 'react'
import './App.css'
import Form from './component/Form'
import { List } from './component/List'

function App() {
  const [todoList,setTodoList] = useState([])

  return (
    <div>
      <Form setTodoList={(value)=>setTodoList(prev=>[...prev,value])} />
        <div>
          <List todoList={todoList} setTodoList={(value,index)=>{
            // setTodoList(prev=>[...prev,prev[index]?.completed = value])
          }}/>
        </div>
    </div>
  )
}

export default App
