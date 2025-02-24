import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

// pages
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Booking/Booking";
import Food from "./Pages/Food/Food";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/food" element={<Food />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
