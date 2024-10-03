import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [showTermOfUse, setShowTermOfUse] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const verifyAge = () => {
    const dob = new Date(dateOfBirth);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dob.getFullYear();
    const monthDiff = currentDate.getMonth() - dob.getMonth();
    const isBirthdayPassed =
      monthDiff > 0 ||
      (monthDiff === 0 && currentDate.getDate() >= dob.getDate());
    return isBirthdayPassed ? age : age - 1;
  };

  const handleSubmit = () => {
    if (dateOfBirth.length <= 0) {
      setError("Date of birth is a required field!");
      setResult("");
    } else {
      setError("");

      if (verifyAge(dateOfBirth) >= 18) {
        setResult("You are over 18 it means you are eligible!");
      } else {
        setResult("You are under 18 it means you are not eligible!");
      }
    }
  };

  return (
    <div className="w-full h-screen bg-red-300">
      <header className="text-5xl text-center text-red-500 font-bold">
        Age Validator
      </header>
      {result.length == 0 && (
        <div className="flex flex-col justify-center items-center p-4 bg-white w-fit rounded-md mx-auto my-5 gap-4 shadow-lg shadow-red-500 max-w-sm">
          <h2 className="text-center text-2xl text-red-500">
            Find out if you are eligible to use our service!
          </h2>
          <div className="w-full flex flex-col">
            <label htmlFor="dob" className="w-full text-gray-800 text-sm">
              What is your date of birth
            </label>
            <input
              name="dob"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full py-2 px-4 border outline-none border-black rounded-md"
            />

            <span className="w-full text-red-500 text-sm">{error}</span>

            <button
              className="w-fit py-2 px-4 my-4 border-2 rounded-md border-red-500 text-red-500 bg-red-300 hover:bg-lime-400"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="w-full">
            <span
              className="text-orange-400 hover:text-green-500 text-start w-full underline cursor-pointer"
              onClick={() => setShowTermOfUse((prev) => !prev)}
            >
              Why do we need to know this?
            </span>
            {showTermOfUse && (
              <div className="w-full border-2 border-orange-400 p-4">
                <span className="text-lg font-medium overflow-wrap">
                  Your date of birth determines if you can use our platform. You
                  must be at least 18 years old to use our services.
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      {result && (
        <div className="flex flex-col justify-center items-center p-4 bg-white w-fit rounded-md mx-auto my-5 gap-4 shadow-lg shadow-red-500 max-w-sm border-2 border-orange-400">
          <span className="text-lg font-medium overflow-wrap">{result}</span>
          <span
            className="text-sm text-orange-400 underline cursor-pointer"
            onClick={() => setResult("")}
          >
            Go back
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
