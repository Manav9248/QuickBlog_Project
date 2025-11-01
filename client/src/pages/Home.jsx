import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Bloglist from "../components/BlogList";
import BlogCard from "../components/BlogCard";

const Home = () => {
  return (
    <div>
      {/* Nav bar section comes here */}
      <Navbar />
      {/* Hero Section comes here */}
      <Header/>

      {/* Main hero section */}
      <Bloglist />

      {/* Card section comes here */}
      <BlogCard/>

      {/* Footer Section  */}
      <Footer />
    </div>
  );
};

export default Home;
