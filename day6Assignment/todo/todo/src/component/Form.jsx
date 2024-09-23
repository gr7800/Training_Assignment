import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Form = ({setTodoList}) => {
    const [inputData,setInputData] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputData.length>0){
            setTodoList({"id":Date.now(),"todoName":inputData,"completed":"pending"})
        }
    }

  return (
   <div>
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Please enter task name" value={inputData} onChange={(e)=>setInputData(e.target.value)} autoFocus/>
        <button type="submit">Add</button>
    </form>
   </div>
  )
}

export default Form