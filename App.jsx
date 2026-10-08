import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Chatbot />
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2025 Fawad — Built with React + AI
      </footer>
    </div>
  )
}

export default App;