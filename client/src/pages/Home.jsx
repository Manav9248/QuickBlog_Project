import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Bloglist from "../components/BlogList";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      {/* Nav bar section comes here */}
      <Navbar />
      {/* Hero Section comes here */}
      <Header />

      {/* Main hero section */}
      <Bloglist />

      {/* News letter section */}
      <NewsLetter />

      {/* Footer Section  */}
      <Footer />
    </div>
  );
};

export default Home;
