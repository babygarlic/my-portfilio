'use client'
import CardFolder from "../base/CardFolder";
import { fetchService, mockDataService } from "../../api/service";
import { useState, useEffect } from "react";    
interface Service{
    id: string,
    title: string,
    description: string
}

export default function ServiceSection () {
    const [services, setServices] = useState<Service[]>([]);
    useEffect(() => {
        const getServices= async () => {
            const data = await mockDataService();
            setServices(data);
        };
        getServices();
    },[]) 
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
                    {services.map((service, index) => (
                        <CardFolder title ={service.title} description={service.description}/>
                    ))}
                </div>
            </div>
        </section>
    )
}