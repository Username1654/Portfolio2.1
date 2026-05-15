import RevealOnScroll from "./RevealOnScroll"
export default function Project() {
    return <section id="projects"
        className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className=" text-3xl font-bold mb-8 bg-gradient from-blue-500 to-cyan-400 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                    <p className="text-gray-400 mb-4">Scalable cloud infrastructure management with real-time monitoring and automated scaling</p>
                    <div>
                        {["react", "Node.js", "AWS", "Docker"].map((tech, key)=>(
                            <span>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flexjustify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">view project -></a>
                    </div>
                </div>
            </div>
            </div>
        </RevealOnScroll>
    </section>

}