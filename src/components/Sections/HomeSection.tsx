import InfinityScroll from "../Animaions/InfinityScroll";

export default function HomeSection () {
    return (
        <section id="home" className="w-full h-screen flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center gap-10">
          <div className="w-full max-w-[1280px]  flex flex-col items-center justify-center text-center px-6 gap-4">
            {/* Kernel Status */}
            <div className="h-4 text-center 
                                uppercase
                                leading-[14.4px] 
                                tracking-[1.92px]
                                text-[9.6px]
                                aline-text-center
                                border-1  border-[#00FBFB]/20 text-[#00FBFB]
                                bg-[#00FBFB]/10
                                h-fit
                                items-center justify-center px-3 pt-[3.5px] pb-[3.89px] rounded-xl">
              <h2 >Kernel Status: Online</h2>
            </div>
            {/* Name */}
            <div>
              <h1 className="text-9xl font-semibold text-white line-height-[128px]">BABY GARLIC</h1>
            </div>
            <div className="text-normal text-2xl">
              <p className=" text-[#B9CAC9] uppercase">I build <span className="text-[#00FBFB]">[Robust Backends]</span> | <span className="text-[#DCB8FF]">[Scalable Systems]</span></p>
            </div>
          </div>
          <div>
            {/* infinite scroll indicator */}
          <div className="py-10 w-full overflow-hidden relative">
              <InfinityScroll />
            </div>
          </div>
          <div>
            <button className="cursor-pointer mt-8 animate-bounce">
            <img  className="w-8 h-8" src="/downicon.svg" alt="Download icon" />
            </button>
          </div>
        </div>
      </section>
    )
}
