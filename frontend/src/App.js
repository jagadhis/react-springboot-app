import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Listcars from "./Components/Listcars";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Listcars />}></Route>
            <Route path="/cars" element={<Listcars />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
