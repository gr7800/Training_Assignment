import React, { useState } from "react";

const DomainList = [
  "upi",
  "okaxis",
  "paytm",
  "googlepay",
  "phonepe",
  "bhim",
  "aadhar",
  "sbi",
  "icici",
  "hdfc",
  "axis",
  "pnb",
  "bankofbaroda",
  "canara",
  "unionbank",
];

const UpiSugestionList = [
  "example@upi",
  "guddu@okaxis",
  "subham@hdfc",
  "aakash@idib"
];

const AutoUpSuggestionsModel = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.includes("@")) {
      const domain = value.split("@")[1].toLowerCase();
      const filteredSuggestions = DomainList.filter((domainName) =>
        domainName.startsWith(domain)
      ).map((domainName) => `${value.split("@")[0]}@${domainName}`);
      setSuggestions(filteredSuggestions);
    } else {
      const filteredSuggestions = UpiSugestionList.filter((upihandle) =>
        upihandle.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        Math.min(prevIndex + 1, suggestions.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === "Enter") {
      if (suggestions.length > 0) {
        handleSuggestionClick(suggestions[highlightedIndex]);
      }
    } else if (e.key === "ArrowRight" && suggestions.length > 0) {
      setInput(suggestions[0]);
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="border p-2 rounded w-full"
        placeholder="Enter UPI ID"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 border border-gray-300 rounded w-full mt-1">
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`p-2 cursor-pointer border-gray-300 ${
                highlightedIndex === index
                  ? "bg-[#FF6600] text-white"
                  : "text-[#000000]"
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

export default AutoUpSuggestionsModel;
