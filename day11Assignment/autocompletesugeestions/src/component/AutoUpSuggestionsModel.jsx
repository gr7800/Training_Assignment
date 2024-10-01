import React, { useRef, useState } from "react";
import { domains } from "../utills/helper";

const UpiSuggestions = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [errorMessege, setErrorMessege] = useState("");
  const viewElementRef = useRef(null);

  const handleUpiValidationCheck = (value) => {
    if (value.length < 1) {
      setErrorMessege("UPI id shouldn't be empty!");
      return true;
    } else if (value[0] === "@") {
      setErrorMessege("UPI id can't start with '@' !");
      return true;
    } else if ((value.match(/@/g) || []).length > 1) {
      setErrorMessege("UPI id can't contain double '@' !");
      return true;
    } else if (/[-+*#_=$%^&~`,./?'";:A-Z]/.test(value)) {
      setErrorMessege(
        "UPI id did not contain any special charecter or uppercase letters!"
      );
      return true;
    } else {
      setErrorMessege("");
      return false;
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (handleUpiValidationCheck(value)) {
      setSuggestions([]);
      return;
    }

    if (value.includes("@")) {
      const enteredDomain = value.split("@")[1].toLowerCase();
      const filteredDomains = domains
        .filter((domain) => domain.startsWith(enteredDomain))
        .map((domain) => `${value.split("@")[0]}@${domain}`);
      setSuggestions(filteredDomains);
    }
  };

  const handleClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && suggestions.length > 0) {
      handleClick(suggestions[highlightedIndex]);
    } else if (e.key === "ArrowRight" && suggestions.length > 0) {
      setInputValue(suggestions[highlightedIndex]);
      setSuggestions([]);
    }

    if(suggestions.length>0){
      viewElementRef.current.scrollIntoView(true);
    }
  };

  const handlePayement = (e) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      let name = inputValue.split("@")[0];
      alert(`Hii ${name} your payment is successfull!`);
      setInputValue("");
      setSuggestions([]);
      setHighlightedIndex(0);
    }
  };

 

  return (
    <div>
      <div className="grid grid-flow-col gap-5 relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          className="border p-2 rounded w-full shadow-md shadow-orange-500 outline-dotted outline-orange-500 justify-center items-center"
          placeholder="Enter UPI ID"
        />
        {suggestions && suggestions.length > 0 && (
          <span className="p-2 absolute left-0 opacity-[50%] bg-transparent flex justify-center items-center">
            {suggestions[highlightedIndex]}
          </span>
        )}
        <button
          className="border p-2 rounded w-full bg-orange-500 hover:bg-orange-600 shadow-white cursor-pointer shadow-md"
          onClick={handlePayement}
        >
          Pay
        </button>
      </div>
      {errorMessege && errorMessege.length > 0 && (
        <p className="text-red-600">{errorMessege}</p>
      )}
      {suggestions.length > 0 && (
        <ul className="w-full z-10 border rounded  mt-2 bg-white max-h-[150px] overflow-y-scroll" id="scrollablediv">
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              onClick={() => handleClick(suggestion)}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`p-2 cursor-pointer border border-b-gray-400 ${
                highlightedIndex === index
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black"
              }`}
              ref={highlightedIndex===index?viewElementRef:null}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpiSuggestions;
