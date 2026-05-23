import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "./Hero";
import Discount from "./Discount";
import Social from "./Social";
import Offers from "./Offers";
import Helpe from "./Helpe";
import Interviews from "./Interviews";
import OfficalDocumentation from "./OfficalDocumentation";


export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <Hero />
        <Social />
        <Discount />
      <Offers />
      <Helpe />
      <Interviews />
      <OfficalDocumentation />
      </div>
      <Footer />
    </main>
  );
}
