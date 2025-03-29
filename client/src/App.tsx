import './App.css'
import NavBar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Skills from './components/Skills'


function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>  
  )
}

export default App
