import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

// pages
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
<Footer/>
    </>
  );
}

export default App;
