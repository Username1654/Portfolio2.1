import useEffect from 'react'
export default function MobileMenu ({ menuOpen, setMenuOpen }){
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0"}`}>
            <button onClick={()=> setMenuOpen(false)} className="absoute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer">
                &times;
            </button>
            <a href="#home" className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                onClick={()=>setMenuOpen(false)}>Home</a>
            <a href="#about" className="tex-gray-300 hove:text-white transition-colors" onClick={() => setMenuOpen(false)}>about</a>
            <a href="#projects" className="tex-gray-300 hove:text-white transition-colors"
                onClick={() => setMenuOpen(false)}>projects</a>
            <a href="#contact" className="tex-gray-300 hove:text-white transition-colors" onClick={() => setMenuOpen(false)}>contact</a>
        </div>
    )
}