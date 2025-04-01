
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SupplyChainDemo from "@/components/SupplyChainDemo";
import MedicineVerifier from "@/components/MedicineVerifier";
import Stakeholders from "@/components/Stakeholders";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <SupplyChainDemo />
        <MedicineVerifier />
        <Stakeholders />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
