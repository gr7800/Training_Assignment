import React, { useState } from "react";

const domains = [
  "okaxis",
  "sbi",
  "icici",
  "hdfc",
  "axis",
  "pnb",
  "canara",
  "upi",
  "bhim",
];

const upiHandles = [
  "example@upi",
  "guddu@okaxis",
  "subham@hdfc",
  "aakash@idib",
];

const UpiSuggestions = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;

    if ((value.match(/@/g) || []).length > 1) {
      setSuggestions([]);
      return;
    }

    setInputValue(value);

    if (value.includes("@")) {
      const enteredDomain = value.split("@")[1].toLowerCase();
      const filteredDomains = domains
        .filter((domain) => domain.startsWith(enteredDomain))
        .map((domain) => `${value.split("@")[0]}@${domain}`);
      setSuggestions(filteredDomains);
    } else {
      const filteredHandles = upiHandles.filter((handle) =>
        handle.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredHandles);
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
      onSelectSuggestion(suggestions[highlightedIndex]);
    } else if (e.key === "ArrowRight" && suggestions.length > 0) {
      setInputValue(suggestions[0]);
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-flow-col gap-5">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          className="border p-2 rounded w-full shadow-md shadow-orange-500 outline-dotted outline-orange-500"
          placeholder="Enter UPI ID"
        />
        <button className="border p-2 rounded w-full bg-orange-500 hover:bg-orange-600 shadow-white cursor-pointer shadow-md">
          Pay
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 border rounded w-full mt-1 bg-white">
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
