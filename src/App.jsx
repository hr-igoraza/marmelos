import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

// pages
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Booking/Booking";
import Food from "./Pages/Food/Food";
import Blog from "./Pages/Blog/Blog";
import TouristDestination from "./Pages/TouristDestination/TouristDestination";
import ContactUs from "./Pages/Contact-us/ContactUs";
import BlogPage from "./Pages/BlogViewPage/BlogViewPage";
import DestinationPage from "./Pages/DestinationViewPage/DestinationViewPage";
import RoomsPage from "./Pages/BookingPage/RoomViewPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/food" element={<Food />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/touristdestinations" element={<TouristDestination />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/destinations/:id" element={<DestinationPage />} />
        <Route path="/rooms/:id" element={<RoomsPage />} />
        <Route path="/privacypolicies" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
