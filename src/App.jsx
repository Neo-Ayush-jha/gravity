import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PartnerForm from "./components/PartnerForm";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import Service from "./components/Service";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyUs />
              <PartnerForm />
              <Clients />
              <Testimonials />
            </>
          }
        />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
