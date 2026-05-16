import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Hire from "../components/hire/Hire";
import Client from "../components/client/Client";
import Work from "../components/work/Work";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Arrowup from "../components/global/Arrowup";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Hire />
      <Client />
      <Work />
      <Blog />
      <Contact />
      {/* <Footer />
      <Arrowup /> */}
    </div>
  );
};

export default Home;
