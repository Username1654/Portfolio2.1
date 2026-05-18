import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import './App.css'
import "./index.css"
import  Navbar  from './components/Navbar'
import MobileMenu  from './components/MobileMenu'
import Home from './components/Home'
import Project from './components/Project'
import Contact from './components/Contact'
import About from './components/About'
function App() {
  const [isloaded, setIsloaded] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {!isloaded && <LoadingScreen onComplete={() => setIsloaded(true)} />} {" "}
      <div className={`min-h-screen transition-opacity duration-700${isloaded ? "opacity-100" : "opacity-0"}bg-black text-gray-100`} id="con">

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} className="z-900"/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} className="z-900"/>
        <Home />
        <About />
        <Project />
        <Contact/>
      </div>
    </>
  )
}

export default App
