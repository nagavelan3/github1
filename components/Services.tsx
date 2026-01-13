"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const services = [
    {
        id: "01",
        title: "Commercial Complexes & Office Spaces",
        description: "We construct modern commercial complexes and office spaces that enhance productivity, brand identity, and support long-term business growth...",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        id: "02",
        title: "Residential Projects",
        description: "We develop high-quality apartments, luxury villas, and gated communities designed to enhance lifestyle, comfort, and safety our residental in...",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        id: "03",
        title: "Industrial Construction & Warehouses",
        description: "We execute industrial buildings and warehouses engineered for strength, efficiency, and operational reliability.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        id: "04",
        title: "Renovation & Interior Design Solutions",
        description: "We provide end-to-end renovation and interior design services that revitalize existing residential, commercial, and industrial spaces.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        id: "05",
        title: "Turnkey Project Management",
        description: "Complete project management services under a single point of responsibility, seamlessly coordinating design, procurement construction ...",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
    },
    {
        id: "06",
        title: "Architectural and Structural Consultancy",
        description: "Our architectural and structural consultancy services focus on innovative design, technical precision, and full regulatory compliance.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
];

export default function Services({ hideTitle = false }: { hideTitle?: boolean }) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {!hideTitle && (
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-gray-800 mb-4">Services</h2>
                        <div className="relative flex items-center justify-center mb-6">
                            <div className="w-32 h-[1px] bg-gray-300"></div>
                            <div className="absolute w-16 h-1 bg-primary"></div>
                        </div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const isActive = selectedId === service.id;

                        return (
                            <div
                                key={service.id}
                                onClick={() => setSelectedId(service.id)}
                                className={`bg-white p-6 rounded-sm transition-all duration-300 relative group hover:shadow-lg hover:border-[#eee] hover:border-t-4 hover:border-t-primary ${isActive ? 'border-t-4 border-primary shadow-md' : 'border border-gray-100'}`}
                            >
                                <div className="text-gray-300 text-sm font-medium mb-6">
                                    {service.id}
                                </div>

                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors ${isActive ? 'bg-primary text-white' : 'bg-primary-light text-primary group-hover:bg-primary group-hover:text-white'}`}>
                                    <div>
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-light text-gray-800 mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-8 min-h-[80px]">
                                    {service.description}
                                </p>

                                {isActive ? (
                                    <Link
                                        href={
                                            service.id === "01" ? "/services/commercial-construction" :
                                                service.id === "02" ? "/services/residential-projects" :
                                                    service.id === "03" ? "/services/design-build" :
                                                        service.id === "04" ? "/services/project-consulting" :
                                                            service.id === "05" ? "/services/renovation" :
                                                                service.id === "06" ? "/services/site-development" : "#"
                                        }
                                        className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition text-sm cursor-pointer"
                                    >
                                        Explore Service
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                ) : (
                                    <Link
                                        href={
                                            service.id === "01" ? "/services/commercial-construction" :
                                                service.id === "02" ? "/services/residential-projects" :
                                                    service.id === "03" ? "/services/design-build" :
                                                        service.id === "04" ? "/services/project-consulting" :
                                                            service.id === "05" ? "/services/renovation" :
                                                                service.id === "06" ? "/services/site-development" : "#"
                                        }
                                        className="inline-flex items-center text-gray-600 font-medium hover:text-primary transition text-sm cursor-pointer"
                                    >
                                        Explore Service
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
