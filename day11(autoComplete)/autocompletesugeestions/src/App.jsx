import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AutoUpSuggestionsModel from "./component/AutoUpSuggestionsModel";
import { bgImageUrl } from "./utills/constant";

function App() {
  return (
    <div className="bg-[#EDDFE0] flex flex-col min-h-screen">
      <header className="text-3xl text-center py-5 font-extrabold text-orange-500 ">
        Upi Typeahead Search
      </header>
      <div className="grid grid-flow-row gap-5 justify-center p-10 bg-[#E78F81] w-fit mx-auto max-w-[50%] shadow-md">
        <img
          src={bgImageUrl}
          alt="headerImage"
          className="shadow-md shadow-orange-500"
          width={"100%"}
          height={"300px"}
        />
        <AutoUpSuggestionsModel />
      </div>
    </div>
  );
}

export default App;
