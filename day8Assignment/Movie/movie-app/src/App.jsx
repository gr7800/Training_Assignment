import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <SearchResultPage /> */}
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
