import Header from "../components/Header";
import Hero from "../components/Hero";
// import SearchBar from "../components/SearchBar";
import PopularDestinations from "../components/PopularDestinations";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      {/* <SearchBar /> */}
      <PopularDestinations />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
