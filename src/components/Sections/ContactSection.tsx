'use client'
import { useState } from 'react';
import ButtonTech from '../base/buttontech';

export default function ContactSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log({ name, email, message });
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact" className="w-full h-auto bg-[#0E0E0E]">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col px-8 pt-24 pb-16">
                <div className="w-full h-auto">
                    <p className="text-[#DCB8FF] text-[12px] uppercase leading-[16px] tracking-[3.6px] mb-2">
                        Contact
                    </p>
                    <div className="flex items-end justify-between pb-4">
                        <h1 className="text-4xl font-bold uppercase tracking-tighter leading-tight text-white">
                            Get In Touch
                        </h1>
                    </div>
                </div>

                <div className="w-full mt-12">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md">
                        <div>
                            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00FBFB]"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00FBFB]"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00FBFB] resize-none"
                                placeholder="Your message here..."
                                rows={4}
                                required
                            />
                        </div>
                        <ButtonTech
                            variant="outline"
                            borderColor="cyan-400"
                            className="self-start"
                        >
                            Send Message
                        </ButtonTech>
                    </form>
                </div>
            </div>
        </section>
    );
}