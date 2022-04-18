import logo from "./logo.svg";
import "./App.css";
import Listcars from "./Components/Listcars";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Listcars />
      </div>
      <Footer />
    </div>
  );
}

export default App;
