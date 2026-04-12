export default function TimeLine(){
    return (
        <section id="timeline" className="w-full h-[891px] justify-center items-center">
            {/* TimeLine Header */}
            <div className="text-center py-10">
                <p className="text-[12px] text-[#00FBFB] font-bold uppercase leading-8 tracking-[3.6px]">History</p>
                <div className="text-center">
                    <h2 className="uppercase text-4xl text-white">Experience Loop</h2>
                </div>
            </div>
            <div className="bg-black text-white min-h-screen p-10 font-sans">
        <div className="relative max-w-4xl mx-auto">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-white/10"></div>

            <div className="relative mb-12 flex justify-between items-center w-full">
            <div className="w-5/12 text-right">
                <span className="text-[10px] tracking-[0.2em] text-cyan-400 font-medium">2022 — PRESENT</span>
                <h3 className="text-xl font-bold mt-1 uppercase">Lead Architect @ Neural_Path</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                Directing the backend infrastructure for decentralized AI training models. Reduced cloud costs by 40% through custom container orchestration.
                </p>
            </div>
            <div className="z-10 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
            <div className="w-5/12"></div>
            </div>

            <div className="relative mb-12 flex justify-between items-center w-full">
            <div className="w-5/12"></div>
            <div className="z-10 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(192,132,252,0.8)]"></div>
            <div className="w-5/12 text-left">
                <span className="text-[10px] tracking-[0.2em] text-purple-400 font-medium">2020 — 2022</span>
                <h3 className="text-xl font-bold mt-1 uppercase text-gray-100">Senior Engineer @ Data_Flow</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                Scaled a real-time analytics platform from 10k to 500k concurrent users using PostgreSQL sharding and Redis caching layers.
                </p>
            </div>
            </div>

            <div className="relative mb-12 flex justify-between items-center w-full">
            <div className="w-5/12 text-right">
                <span className="text-[10px] tracking-[0.2em] text-gray-500 font-medium">2018 — 2020</span>
                <h3 className="text-xl font-bold mt-1 uppercase">Systems Developer @ Cyber_Grid</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                Early-stage employee focused on building robust API gateways and automated testing suites for fintech applications.
                </p>
            </div>
            <div className="z-10 w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-5/12"></div>
            </div>

        </div>
        </div>
        </section>
    )
};