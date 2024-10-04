import React, { useEffect, useState } from "react";

const TextToSpeech = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      speech.rate = 0.9;
      speech.volume = 1;
      speech.lang = "hi-IN";
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Text to Speech App</h1>
      <form onSubmit={handleSubmit} className="w-1/2">
        <textarea
          value={text}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="5"
          placeholder="Type something..."
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Read Aloud
        </button>
      </form>
    </div>
  );
};

export default TextToSpeech;
