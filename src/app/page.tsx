import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BuyMeACoffee } from "@/components/site/BuyMeACoffee";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BuyMeACoffee />
    </main>
  );
}
