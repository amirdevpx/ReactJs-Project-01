import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import News from "../components/News";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Testimonials />
        <News />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
