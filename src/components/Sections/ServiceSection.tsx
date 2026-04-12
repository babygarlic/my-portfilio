export default function ServiceSection () {
    return (
        <section id="services" className="w-full h-auto bg-[#0E0E0E]">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col px-8 pt-24 pb-16">
                <div className="w-full h-auto">
                    <p className="text-[#DCB8FF] text-[12px] uppercase leading-[16px] tracking-[3.6px] mb-2">
                        Services
                    </p>
                    <div className="flex items-end justify-between pb-4">
                        <h1 className="text-4xl font-bold uppercase tracking-tighter leading-tight text-white">
                            What I Offer
                        </h1>
                    </div>
                </div>

                <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white/3 p-8 rounded-lg border border-white/10">
                        <h3 className="text-white font-bold text-xl mb-4">Backend Development</h3>
                        <p className="text-[#B9CAC9] text-sm">
                            Building robust and scalable backend systems using modern technologies like Python, FastAPI, and PostgreSQL.
                        </p>
                    </div>
                    <div className="bg-white/3 p-8 rounded-lg border border-white/10">
                        <h3 className="text-white font-bold text-xl mb-4">API Design</h3>
                        <p className="text-[#B9CAC9] text-sm">
                            Designing and implementing RESTful APIs and GraphQL services that are efficient, secure, and easy to maintain.
                        </p>
                    </div>
                    <div className="bg-white/3 p-8 rounded-lg border border-white/10">
                        <h3 className="text-white font-bold text-xl mb-4">System Architecture</h3>
                        <p className="text-[#B9CAC9] text-sm">
                            Planning and architecting high-performance systems that can handle millions of requests with low latency.
                        </p>
                    </div>
                    <div className="bg-white/3 p-8 rounded-lg border border-white/10">
                        <h3 className="text-white font-bold text-xl mb-4">Database Optimization</h3>
                        <p className="text-[#B9CAC9] text-sm">
                            Optimizing database queries, indexing, and overall performance for better application speed and reliability.
                        </p>
                    </div>
                    <div className="bg-white/3 p-8 rounded-lg border border-white/10">
                        <h3 className="text-white font-bold text-xl mb-4">Consulting</h3>
                        <p className="text-[#B9CAC9] text-sm">
                            Providing expert advice on technology choices, best practices, and development strategies.
                        </p>
                    </div>
                    <div className="bg-white/3 p-8 rounded-lg border border-white/10">
                        <h3 className="text-white font-bold text-xl mb-4">Code Review</h3>
                        <p className="text-[#B9CAC9] text-sm">
                            Reviewing code for quality, security, and performance improvements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}