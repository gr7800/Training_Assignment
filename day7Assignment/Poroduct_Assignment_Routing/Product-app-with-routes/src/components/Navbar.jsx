import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-500 text-white px-[3rem] py-5">
      <Link to={"/"}>Home</Link>
      <Link to={"/Products"}>Products</Link>
    </div>
  )
}

export default Navbar