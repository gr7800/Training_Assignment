import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <SearchResultPage />
      <Footer />
    </div>
  );
}

export default App;
