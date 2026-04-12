export default function AboutSection () {
    return (
        <section id="about" className="w-full h-auto bg-[#0E0E0E]">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col px-8 pt-24 pb-16">
                <div className="w-full h-auto">
                    <p className="text-[#DCB8FF] text-[12px] uppercase leading-[16px] tracking-[3.6px] mb-2">
                        About
                    </p>
                    <div className="flex items-end justify-between pb-4">
                        <h1 className="text-4xl font-bold uppercase tracking-tighter leading-tight text-white">
                            Who I Am
                        </h1>
                    </div>
                </div>

                <div className="w-full mt-12 text-[#B9CAC9]">
                    <p className="text-lg leading-relaxed mb-6">
                        I'm a passionate backend developer with a love for building robust and scalable systems. With experience in various programming languages and frameworks, I enjoy tackling complex problems and creating efficient solutions.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        My journey in software development started with a curiosity for how things work under the hood. Over the years, I've honed my skills in designing APIs, optimizing databases, and ensuring high performance in my applications.
                    </p>
                    <p className="text-lg leading-relaxed">
                        I'm always eager to learn and grow as a developer, and I'm excited to see where this journey takes me next. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
                    </p>
                </div>
            </div>
        </section>
    )
}