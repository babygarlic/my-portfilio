import Card from "../base/Card";

export default function ProjectSection () {
return (
    <section id="projects" className="w-full h-auto bg-black">
        {/* Container giới hạn 1280px và CĂN GIỮA */}
        <div className="w-full max-w-[1280px] mx-auto flex flex-col px-8 pt-24 pb-16 rounded-lg">
            
            {/* PHẦN HEADER: Projects & View Archive */}
            <div className="w-full h-auto">
                <p className="text-[#DCB8FF] text-[12px] uppercase leading-[16px] tracking-[3.6px] mb-2">
                    Portfolio
                </p>
                <div className="flex items-end justify-between border-b border-white/10 pb-4">
                    <h1 className="text-4xl font-bold uppercase tracking-tighter leading-tight text-white">
                        Projects
                    </h1> 
                    <p className="text-cyan-400/60 text-sm uppercase tracking-[1.12px] cursor-pointer hover:text-cyan-400 transition-colors">
                        View Archive
                    </p>
                </div>
            </div>

            {/* PHẦN DANH SÁCH CARD: Sử dụng Grid để tự động xuống dòng */}
            <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card />
                <Card />
                <Card />    
            </div>  
            
        </div>
    </section>
)
    
}