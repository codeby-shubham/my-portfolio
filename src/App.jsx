
import './App.css'
import { ArrowUpRight } from 'lucide-react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
function App() {
  

  return (
    <>
    <div className='w-full min-h-screen'>
      <section id="Navbar">
      <Navbar/>
      </section>
      <div className='mt-17'>
      <section id="Hero">
      <Hero/>
      </section>
      <section id="About">
      <About/>
      </section>
      <section id="Education">
      <Education/>
      </section>
      <section id="Skills">
      <Skills/>
      </section>
      <section id="Projects">
      <Projects/>
      </section>
      <section id="Contact">
      <Contact/>
      </section>
      <section id="Footer">
      <Footer/>
      </section>
      </div>
      </div>
    </>
  );
}

export default App
