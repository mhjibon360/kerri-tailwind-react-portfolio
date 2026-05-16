import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Blogdetails from "./pages/Blogdetails.jsx";
import Footer from "./components/footer/Footer.jsx";
import Arrowup from "./components/global/Arrowup.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-details" element={<Blogdetails />} />
        </Routes>
        <Footer />
        <Arrowup />
      </main>
    </BrowserRouter>
  </StrictMode>,
);
