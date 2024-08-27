import Image from "next/image";
import { Spotlight } from "./components/ui/Spotlight";
import { AppBar } from "./components/AppBar";
import { CasinoCard } from "./components/CasinoCard";
import { SportsCard } from "./components/SportsCard";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black/[0.99] antialiased bg-grid-white/[0.03]">
      <AppBar />
      <main className="flex-grow flex flex-col justify-center items-center py-20 px-4 mt-40 mb-40">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
            <CasinoCard />
            <SportsCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
