import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputFeild = ({ todo, setTodo, handleSubmit }: Props) => {
  const inputRef = useRef(null);

  return (
    <form
      className="bg-lime-400 p-5 rounded-sm flex justify-center gap-5"
      onSubmit={(e)=>handleSubmit(e)}
    >
      <input
        type="input"
        placeholder="Enter a task"
        value={todo}
        className="px-5 py-3 border-teal-100 rounded-lg"
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />
      <button className="bg-slate-600 text-white font-normal w-[42px] rounded-lg flex justify-center items-center hover:bg-slate-700">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
