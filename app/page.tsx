import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 relative">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
