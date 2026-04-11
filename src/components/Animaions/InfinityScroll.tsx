'use client';
export default function InfinityScroll() {
        const items = [
        { name: "react", src: "/react.svg", color: "text-blue-500" },
        { name: "docker", src: "/docker-mark-ocean-blue.svg", color: "text-blue-400" },
        { name: "next", src: "/Next.js.svg", color: "text-cyan-400" },
        { name: "FastAPI", src: "/FastAPI.svg", color: "text-emerald-400" },
        { name: "PostgreSQL", src: "/PostgresSQL.svg", color: "text-indigo-400" },
        { name: "TensorFlow", src: "/TensorFlow.svg", color: "text-orange-400" },
        { name: "Nginx", src: "/Nginx.svg", color: "text-green-500" },
        { name: "python", src: "/Python.svg", color: "text-yellow-400" },
        { name: "javaScript", src: "/JavaScript.svg", color: "text-yellow-300" },
        { name: "TypeScript", src: "/TypeScript.svg", color: "text-blue-300" },
        { name: "vuetify", src: "/Vuetify.svg", color: "text-blue-500" },
        { name: "vuejs", src: "/vue.js.svg", color: "text-green-400" },
        ];
  const tripleItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-[#000000]/1 py-10 ">
      {/* Lớp phủ mờ ở 2 đầu để trông mượt hơn */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      <div className="animate-infinite-scroll w-max">
        {tripleItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-12 group"
          > 
            <img src={item.src} alt={item.name} className="w-8 h-8 mr-2" />
            <h1 className={`
              text-sm font-bold font-space uppercase tracking-tighter
              transition-all duration-300
              ${item.color} opacity-50 group-hover:opacity-100 group-hover:scale-110
              [text-shadow:0_0_20px_rgba(0,0,0,0.5)]
              group-hover:[text-shadow:0_0_15px_currentColor]
            `}>
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}