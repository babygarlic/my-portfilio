'use client';
import { useState, useEffect } from "react";
import { useLenis } from '@studio-freight/react-lenis'; 
import { useDateTimePicker } from "@/components/hooks/DateTimePicker";
import DateTimePicker from "@/components/base/DateTimePicker";

export default function Navigation() {
    const [isActive , setIsActive] = useState('home');
    const navItems = ["home","Stack", "projects", "services", "about", "contact"];
    const lenis = useLenis();

    // DateTimePicker state & handlers
    const { isOpen, toggleOpen, currentDate, handleDateChange, containerRef, dateFormat } = useDateTimePicker();

    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
        e.preventDefault(); 
        const targetId = item.toLowerCase();
        
        lenis?.scrollTo(`#${targetId}`, {
            offset: -100,
            duration: 1.5,
        });

        setIsActive(item);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            navItems.forEach((item) => {
                const section = document.getElementById(item.toLowerCase());
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setIsActive(item);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    return (
        <header className="fixed left-0 w-full z-50 bg-black/50 backdrop-blur">
            <nav className="mx-auto w-full flex justify-between items-center py-4 px-8 uppercase shadow-[0_6px_20px_rgba(0,251,251,0.1)] ">
                <h1 className="text-xl font-bold tracking-tighter">ARCHITECT.OS</h1>
                <ul className="flex gap-6 text-sm font-medium">
                    {navItems.map((item) => {
                        const isCurrent = isActive === item;
                        return (
                            <li key={item} className="relative group">
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => handleScrollClick(e, item)}
                                    className={`
                                        transition-all duration-300 inline-block
                                        text-[12px] tracking-[1.2px] font-semibold
                                        hover:scale-105
                                        ${isCurrent ? 'text-cyan-400 [text-shadow:0_0_8px_#22d3ee]' : 'text-gray-400 hover:text-cyan-400'}
                                    `}
                                >
                                    {item}
                                </a>
                                <span className={`
                                    absolute -bottom-1 left-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]
                                    transition-all duration-300
                                    ${isCurrent ? 'w-full' : 'w-0'}
                                `} />
                            </li>
                        );
                    })}
                </ul>
                <div>
                 <button className="
                    h-8
                    text-center
                    line-height-[15px] px-6 py-2 bg-[#00FBFB]
                    text-[#002020] text-[12px]
                    rounded-xs
                    font-semibold
                    transition-all duration-300 ease-in-out
                    hover:bg-cyan-400
                    hover:shadow-[0_0_15px_5px_rgba(34,211,238,0.6)]
                    hover:scale-105"
                    onClick={toggleOpen}
                    >CONNECT</button>
                                <DateTimePicker
                    isOpen={isOpen}
                    currentDate={currentDate}
                    from={new Date(2020, 0, 1)}
                    to={new Date()}
                    dateFormat="YYYY-MM-DD HH:mm"
                    onDateChange={handleDateChange}
                    containerRef={containerRef}
                />
                </div>
            </nav>

        </header>
    )
}