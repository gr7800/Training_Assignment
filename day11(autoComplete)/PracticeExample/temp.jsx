// import React, { useState } from "react";
// 
// const UPI_DOMAINS = [
//   "upi",
//   "okaxis",
//   "paytm",
//   "googlepay",
//   "phonepe",
//   "bhim",
//   "aadhar",
//   "sbi",
//   "icici",
//   "hdfc",
//   "axis",
//   "pnb",
//   "bankofbaroda",
//   "canara",
//   "unionbank",
// ];
// 
// const UPI_AUTOCOMPLETE = [
//   "example@upi",
//   "test@upi",
//   "user@upi",
//   "john.doe@upi",
//   "jane.doe@upi",
//   "testuser@upi",
// ];
// 
// const UseInputSuggestionsModel = () => {
//   const [input, setInput] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [highlightedIndex, setHighlightedIndex] = useState(0);
// 
//   const handleInputChange = (e) => {
    // const value = e.target.value;
    // setInput(value);
    // if (value.includes("@")) {
    //   const domain = value.split("@")[1].toLowerCase();
    //   const filteredSuggestions = UPI_DOMAINS.filter((domainName) =>
        // domainName.startsWith(domain)
    //   ).map((domainName) => `${value.split("@")[0]}@${domainName}`);
    //   setSuggestions(filteredSuggestions);
    // } else {
    //   const filteredSuggestions = UPI_AUTOCOMPLETE.filter((upihandle) =>
        // upihandle.toLowerCase().includes(value.toLowerCase())
    //   );
    //   setSuggestions(filteredSuggestions);
    // }
//   };
// 
//   const handleSuggestionClick = (suggestion) => {
    // setInput(suggestion);
    // setSuggestions([]);
//   };
// 
//   const handleKeyDown = (e) => {
    // if (e.key === "ArrowDown") {
    //   setHighlightedIndex((prevIndex) =>
        // Math.min(prevIndex + 1, suggestions.length - 1)
    //   );
    // } else if (e.key === "ArrowUp") {
    //   setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    // } else if (e.key === "Enter") {
    //   if (suggestions.length > 0) {
        // handleSuggestionClick(suggestions[highlightedIndex]);
    //   }
    // } else if (e.key === "ArrowRight" && suggestions.length > 0) {
    //   setInput(suggestions[0]);
    //   setSuggestions([]);
    // }
//   };
// 
//   return (
    // <div className="relative">
      {/* <input */}
        // type="text"
        // value={input}
        // onChange={handleInputChange}
        // onKeyDown={handleKeyDown}
        // className="border p-2 rounded w-full"
        // placeholder="Enter UPI ID"
    //   />
      {/* {suggestions.length > 0 && ( */}
        // <ul className="absolute z-10 bg-white border border-gray-300 rounded w-full mt-1">
          {/* {suggestions.map((suggestion, index) => ( */}
            // <li
            //   key={suggestion}
            //   onClick={() => handleSuggestionClick(suggestion)}
            //   onMouseEnter={() => setHighlightedIndex(index)}
            //   className={`p-2 cursor-pointer ${
                // highlightedIndex === index
                //   ? "bg-blue-500 text-white"
                //   : "text-black"
            //   }`}
            // >
              {/* {suggestion} */}
            {/* </li> */}
        //   ))}
        {/* </ul> */}
    //   )}
    {/* </div> */}
//   );
// };
// 
// export default UseInputSuggestionsModel;
// 
// 
// 
// 




import React, { useState, useMemo, useCallback } from "react";
import "./App.css";

const Button = React.memo(({ onClick, children }) => {
  console.log(`${children} button rendered`);
  return <button onClick={onClick}>{children}</button>;
});

const IncrementButton = React.memo(({ onIncrement }) => {
  return <Button onClick={onIncrement}>Increment</Button>;
});

const DecrementButton = React.memo(({ onDecrement }) => {
  return <Button onClick={onDecrement}>Decrement</Button>;
});

const ToggleButton = React.memo(({ onToggle }) => {
  return <Button onClick={onToggle}>Toggle Theme</Button>;
});

// function MemoisationExample() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(5);
//   const [darkTheme, setDarkTheme] = useState(true);
// 
//   const handleDecrement = useCallback((e) => {
    // e.preventDefault();
    // console.log("decrement");
    // setCount((prev) => prev - step);
//   }, [step]);
// 
//   const handleIncrement = useCallback((e) => {
    // e.preventDefault();
    // console.log("increment");
    // setCount((prev) => prev + step);
//   }, [step]);
// 
//   const handleToggle = useCallback((e) => {
    // e.preventDefault();
    // console.log("toggle theme");
    // setDarkTheme((prev) => !prev);
//   }, []);
// 
//   const themeStyles = useMemo(() => {
    // return darkTheme ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' };
//   }, [darkTheme]);
// 
//   return (
    // <div style={themeStyles}>
      {/* <input */}
        // type="number"
        // value={step}
        // onChange={(e) => setStep(Number(e.target.value))}
    //   />
      {/* <IncrementButton onIncrement={handleIncrement} /> */}
      {/* <DecrementButton onDecrement={handleDecrement} /> */}
      {/* <ToggleButton onToggle={handleToggle} /> */}
      {/* <p>Count: {count}</p> */}
    {/* </div> */}
//   );
// }
// 
// export default MemoisationExample;
// 