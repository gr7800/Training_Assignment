import { useState } from "react";

const HomePageMain = () => {
  const [searchQuerry, setSearchQuerry] = useState("");
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-white px-[3rem]">
      <h2 className="text-[5.625rem] text-center font-bold">Welecome.</h2>
      <p className="text-[1.5rem] text-nowrap font-medium">Millions of movies, TV shows and people to discover. Explore now.</p>
      <div className="flex max-w-[70%] justify-center items-center h-12 w-full mt-[2.5rem]">
        <input className="w-[70%] h-[50px] px-5 py-3 rounded-l-full text-black text-[20px]" type="text" placeholder="Search for a movie or tv show..." value={searchQuerry} onChange={(e)=>setSearchQuerry(e.target.value)}/>
        <button className="w-[30%] h-[3.125rem] text-[1.125rem] text-white rounded-r-full" style={{background:'linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)'}}>Search</button>
      </div>
    </div>
  );
};

export default HomePageMain;
