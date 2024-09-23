import { useState } from "react"
import "./Form.css"

// eslint-disable-next-line react/prop-types
const Form = ({ setTodoList }) => {
  const [inputData, setInputData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputData.length > 0) {
      setTodoList({ "id": Date.now(), "todoName": inputData, "completed": false })
    }
  }

  return (
    <div className="formContainer">
      <h1>Add Todo here!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Please enter task name" value={inputData} onChange={(e) => setInputData(e.target.value)} autoFocus />
        <button type="submit" className="addSubmit">Add</button>
      </form>
    </div>
  )
}

export default Form