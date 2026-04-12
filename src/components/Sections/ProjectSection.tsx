'use client'
import Card from "../base/Card";
import { useState, useEffect } from "react";
import { fetchProjects, mockData } from "../../api/projectApi";

type Project = {
    name: string;
    description: string;
    technologies: string[];
    image?: string;
    icon?: string;
    techColors?: string;
};

export default function ProjectSection () {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        // Giả sử bạn có một API để lấy danh sách dự án và bạn gọi nó ở đây
        const getProjects = async () => {
            const data = await mockData();
            setProjects(data);
        };
        getProjects();
    },[]) 
return (
    <section id="projects" className="w-full h-auto bg-[#0E0E0E]">
        <div className="w-full max-w-[1280px]  mx-auto flex flex-col px-8 pt-24 pb-16">
            <div className="w-full h-auto">
                <p className="text-[#DCB8FF] text-[12px] uppercase leading-[16px] tracking-[3.6px] mb-2">
                    Portfolio
                </p>
                <div className="flex items-end justify-between  pb-4">
                    <h1 className="text-4xl font-bold uppercase tracking-tighter leading-tight text-white">
                        Projects
                    </h1> 
                    <p className="text-cyan-400/60 text-sm uppercase tracking-[1.12px] cursor-pointer hover:text-cyan-400 transition-colors">
                        View Archive
                    </p>
                </div>
            </div>

            <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={`${project.name}-${index}`} {...project} />
                ))}
            </div>  
            
        </div>
    </section>
)
    
}