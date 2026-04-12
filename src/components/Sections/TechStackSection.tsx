export default function TechStackSection() {
    return (
        <section id="stack" className="w-full h-auto">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col px-8 py-12 rounded-lg justify-between gap-16">
                {/* heading */}
                <div className="w-full text-left ">
                    <div className="mb-2">
                        <p className="uppercase font-normal text-[12px] text-[#00FBFB] leading-4 tracking-[3.6px]"
                        >Capabilities</p>
                    </div>
                    <div className="mb-4">
                        <h1 className="uppercase text-white font-bold text-4xl leading-10">TECH STACK</h1>
                    </div>
                </div>
                {/* content */}
                <div
                className="container "
                style={{
                    display: 'grid',
                    gridTemplateAreas: `
                    "core_architecture core_architecture data_integration interface"
                    "core_architecture core_architecture system_reliability system_reliability"`,
                    gap: '24px',
                }}
                >
                {/* Core Architecture */}
                <div style={{ gridArea: 'core_architecture' }} className="bg-white/3 p-[32px]
                 rounded-lg justify-between
                 border-white/10 border-1
                 flex flex-col w-[596px] h-[600px]
                
                ">
                <div className="">
                    <img 
                        src="/terminal_icon.svg"
                        alt="terminal icon"
                        className="w-10 h-8"
                    />
                        <h3 className="text-white font-bold text-2xl leading-8 mt-8 mb-4 ">Core Architecture</h3>                        
                        <div className="text-sm">
                            <p className="text-[#B9CAC9]">
                                Specializing in high-concurrency systems using Python and FastAPI.
                                distributed backends that handle millions of requests with sub-millisecond latency.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-left gap-4">
                        <div className="bg-[#0E0E0E] border-1 rounded-sm border-white/10 size-12 items-center justify-center flex">
                            <img 
                                src="/Python.svg" 
                                alt="Python icon"
                                className="w-6 h-6" />
                        </div>
                       <div className="bg-[#0E0E0E] border-1 rounded-sm border-white/10 size-12 items-center justify-center flex">
                            <img 
                                src="/FastAPI.svg" 
                                alt="FastAPI icon" 
                                className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                {/* Data Integration */}
                <div style={{ gridArea: 'data_integration' }} 
                    className="bg-white/3 p-[32px] rounded-lg items-left size-[286px] border-1 border-white/8">
                    <div className="item-left size-[286px] w-full h-full">
                    <img
                        src="/database_icon.svg"
                        alt="database icon"
                        className="w-6 h-6"
                    />
                    <h3 className="text-white font-bold text-lg leading-8 mt-4 mb-2">Data Integration</h3>
                    <div>
                            <p className="text-sm text-[#B9CAC9]">
                            PostgreSQL mastery, focusing on
                            complex indexing and query
                            optimization.                        
                        </p>
                    </div>
                    </div>
                </div>
                <div style={{ gridArea: 'interface' }} 
                    className="bg-white/3 p-8 rounded-lg items-left size-71.5 border border-white/8">
                    <div className="">
                    <img
                        src="/interface_icon.svg"
                        alt="interface icon"
                        className="size-6"
                    />
                    <h3 className="text-white font-bold text-lg leading-8 mt-4 mb-2">Interface Design</h3>
                    <div>
                        <p className="text-sm text-[#B9CAC9]">
                            Reactive UIs built with Vue.js,
                            ensuring seamless state
                            management. 
                       </p>
                    </div>
                    </div>
                </div>
                <div style={{ gridArea: 'system_reliability' }} 
                    className="bg-white/3 p-[32px] rounded-lg items-left h-[286px] border-1 border-white/8
                     items-center justify-between flex">
                    <div className="w-full items-center flex gap-4">
                        <div className="bg-[#0E0E0E] border-1 rounded-sm border-white/10 size-12 items-center justify-center flex">
                            <img 
                                src="/system_icon.svg" 
                                alt="System icon" 
                                className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg leading-8">System Reliability</h3>
                            <div>
                                <p className="text-sm text-[#B9CAC9]">
                                    99.9% uptime architecture design and monitoring.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src="/chart_icon.svg" alt="Chart icon" className="w-6 h-6" />
                </div>

                </div>
            </div>
        </section>
    )
}
 
