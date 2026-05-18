import RevealOnScroll from "./RevealOnScroll"
export default function Home() {
    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-1">
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text gradient-text leading-right">Hi There!</h1>

            {/* <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Full stack developer

            </p> */}
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounder font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15pxpx_rgba(59,130,246,0.4)] z-0">View projects</a>

                <a href="#contact" className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounder font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15pxpx_rgba(59,130,246,0.4)] z-0">Contact me</a>
            </div>
            </div>
            </RevealOnScroll>
    </section>
    )
}