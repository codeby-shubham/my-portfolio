
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
    <div className='min-h-screen w-full bg-[#0B1220]'>
      <Navbar/>
      <main>
        <section id='home' className='px-4'>
          <div className='className=max-w-6xl mx-auto'>
            <Hero/>
          </div>
        </section> 
          <section id='About' className='px-4'>
            <div className='className=max-w-6xl mx-auto'>
              <About/>
            </div>
          </section>
          <section id='Education' className='px-4'>
            <div className='className=max-w-6xl mx-auto'>
              <Education/>
            </div>
          </section>
          <section id='Skill' className='px-4'>
            <div className='className=max-w-6xl mx-auto'>
              <Skills/>
            </div>
          </section>
          <section id='Project' className='px-4'>
            <div className='className=max-w-6xl mx-auto'>
              <Projects/>
            </div>
          </section>
          <section id='Contact' className='px-4'>
            <div className='className=max-w-6xl mx-auto'>
              <Contact/>
            </div>
          </section>
          <Footer/>
      </main>
      </div>
    </>
  );
}

export default App
