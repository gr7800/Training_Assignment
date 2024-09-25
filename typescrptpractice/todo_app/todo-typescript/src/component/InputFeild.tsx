
const InputFeild = () => {
  return (
    <form className="bg-lime-400 p-5 rounded-sm flex justify-center gap-5">
        <input type="input" placeholder="Enter a task" className="px-5 py-3 border-teal-100 rounded-lg" />
        <button className="bg-slate-600 text-white font-normal w-[42px] rounded-lg flex justify-center items-center hover:bg-slate-700">Go</button>
    </form>
  )
}

export default InputFeild