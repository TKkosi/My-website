import './App.css'
import NavBar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import {BrowserRouter} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Experience/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
    </>  
  )
}

export default App
