import RevealOnScroll from "./RevealOnScroll"
export default function Project() {
    return <section id="projects"
        className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
            <h2 className=" text-3xl font-bold mb-8 bg-gradient from-blue-500 to-cyan-400 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[rgba(10,10,10,0.8)]">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Coming soon!</h3>
                    <p className="text-gray-400 mb-4">Many projects to showcase are coming soon <br />be patient!</p>
                    {/* <div>
                        {["react", "Node.js", "AWS", "Docker"].map((tech, key)=>(
                            <span>
                                {tech}
                            </span>
                        ))}
                    </div>
                    */}
                    <div className="flexjustify-between items-center"> 
                        <a href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5e38e794098dd316f091c87c%2F1683676273277-ENW59C3814UIIV38IDEI%2FLarge.png&f=1&nofb=1&ipt=25f4f81c99b991fac1782e1743d7f18a8be05340a5b8a436c8347a65f73253a5" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank">view project </a>
                    </div>
                </div>
            </div>
            </div>
        </RevealOnScroll>
    </section>

}