import { useState, ChangeEvent, FormEvent } from "react";
import "./Form.css";

interface TypeTodoList {
  setTodoList: (todo: { id: number; todoName: string; completed: boolean }) => void;
}

const Form: React.FC<TypeTodoList> = ({ setTodoList }) => {
  const [inputData, setInputData] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputData.length > 0) {
      setTodoList({ id: Date.now(), todoName: inputData, completed: false });
      setInputData("");
    }
  };

  return (
    <div className="formContainer">
      <h1>Add Todo here!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter task name"
          value={inputData}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputData(e.target.value)}
          autoFocus
        />
        <button type="submit" className="addSubmit">Add</button>
      </form>
    </div>
  );
};

export default Form;
