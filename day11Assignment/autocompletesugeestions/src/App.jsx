import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AutoUpSuggestionsModel from "./component/AutoUpSuggestionsModel";

function App() {
  return (
    <div className="bg-[#EDDFE0] w-full min-h-screen px-5 py-5 flex flex-col justify-center overflow-y-scroll">
      <header className="text-3xl text-center py-5 font-bold">
        Upi Typeahead Search
      </header>
      <div className="grid grid-flow-row gap-5 justify-center p-10 bg-[#E78F81] w-fit mx-auto max-w-[50%] max-h-[50%]">
        <img
          src="https://paytmblogcdn.paytm.com/wp-content/uploads/2024/07/18_UPI_Make-or-Receive-Payment-using-UPI-on-Paytm.webp"
          alt="headerImage"
        />
        <AutoUpSuggestionsModel />
      </div>
    </div>
  );
}

export default App;
