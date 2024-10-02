import { useState } from "react";
import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { CartContextProvider } from "./context/CartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CartContextProvider><AllRoutes /></CartContextProvider>
    </>
  );
}

export default App;
