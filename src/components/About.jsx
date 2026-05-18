import RevealOnScroll from "./RevealOnScroll"

export default function About() {
    const frontendSkills = ["react", "typescript", "tailwindcss"]
    const backendSkills = ["Node.js", "JS", "MongoDB", "SQL"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About me
                    </h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-[rgba(10,10,10,0.8)]">
                        <p className="text-gray-300 mb-6">
                            passionate dev with expertise
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {/* Fix: Added explicit return & changed key to use 'tech' */}
                                    {frontendSkills.map((tech) => {
                                        return (
                                            <span
                                                key={tech}
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                                
                                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                                <div className="flex flex-wrap gap-2 ">
                                    {/* Fix: Added explicit return & changed key to use 'tech' */}
                                    {backendSkills.map((tech) => {
                                        return (
                                            <span
                                                key={tech}
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-[rgba(10,10,10,0.8)]">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul>
                                <li>Highschool-2026</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-[rgba(10,10,10,0.8)]">
                            <h3 className="text-xl font-bold mb-4 ">Work Experience</h3>
                            <div>
                                <h4>NONE</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section >
    )
}