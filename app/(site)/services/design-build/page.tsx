"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import ServiceCapabilities from "@/components/ServiceCapabilities";
import ConsultationForm from "@/components/ConsultationForm";

export default function ServiceDetailsPage() {

    const service = {
        id: "design-build",
        title: "Industrial Construction & Warehouses",
        description: "We execute industrial buildings and warehouses engineered for strength, efficiency, and operational reliability.",
        coverImage: "/build3.webp",
        fullDescription: "We execute industrial buildings and warehouses engineered for strength, efficiency, and operational reliability. Our facilities are designed to support heavy machinery, large storage capacities, smooth logistics flow, and strict safety standards, ensuring consistent performance even under demanding industrial conditions.",
        icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
        subServices: [
            {
                title: "Manufacturing & Factory Buildings",
                description: "Heavy-duty structures designed to accommodate machinery, production lines, and industrial processes with high load-bearing capacity.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            },
            {
                title: "Warehouses & Storage Facilities",
                description: "Optimized spaces for storage and inventory management, designed for smooth material movement and scalable operations.",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            },
            {
                title: "Logistics & Distribution Centers",
                description: "Large-span structures planned for efficient loading, unloading, and transportation workflows.",
                icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            },
            {
                title: "Industrial Parks & Estates",
                description: "Integrated developments with multiple industrial units, internal roads, utilities, and common infrastructure.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }
        ],
        capabilities: [
            {
                id: "planning",
                label: "Planning & Design",
                title: "Comprehensive Planning Solutions",
                description: "We develop robust and efficient industrial layouts that support machinery loads, large storage needs, smooth workflow movement, and full compliance with industrial and safety regulations.",
                image: "/build5.webp",
                points: [
                    "Strong and load-efficient layout planning",
                    "Space for heavy machinery operations",
                    "Optimized workflow and logistics movement",
                    "Adequate storage and utility planning",
                    "Compliance with industrial regulations"
                ]
            },
            {
                id: "construction",
                label: "Construction",
                title: "Expert Construction Execution",
                description: "We carry out industrial construction using heavy-duty materials, skilled manpower, and strict safety practices to deliver strong, durable, and reliable structures built for demanding operational conditions.",
                image: "/build7.webp",
                points: [
                    "Use of heavy-duty and industrial-grade materials",
                    "Skilled workforce with industrial expertise",
                    "Strict safety and quality standards",
                    "High structural strength and durability",
                    "Reliable construction for long-term operations"
                ]
            },
            {
                id: "management",
                label: "Project Management",
                title: "Professional Project Management",
                description: "We manage industrial projects with precise coordination, transparent cost control, and strict schedule management to ensure smooth execution, minimal disruption, and on-time delivery.",
                image: "/build3.webp",
                points: [
                    "End-to-end project coordination",
                    "Transparent budgeting and cost control",
                    "Strict timeline and milestone management",
                    "Minimal disruption to ongoing operations",
                    "Timely delivery with consistent quality"
                ]
            }
        ],
        stats: [
            { value: "250+", label: "Projects Completed" },
            { value: "15", label: "Years Experience" },
            { value: "98%", label: "Client Satisfaction" }
        ],
        overview: [
            { label: "Project Scale", value: "$100K - $50M" },
            { label: "Timeline", value: "6-36 months" },
            { label: "Warranty", value: "10 years structural" },
            { label: "Licensing", value: "All permits included" }
        ],
        expertise: [
            { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Office Complexes" },
            { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Retail Centers" },
            { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Healthcare Facilities" },
            { icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", label: "Financial Buildings" },
            { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Warehouses" },
            { icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z", label: "Educational" }
        ],
        recentProjects: ["/build3.webp", "/build9.webp", "/build1.webp", "/build4.webp"]
    };

    return (
        <main>
            <PageHeader
                title="Service Details"
                // description="Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias."
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    // { label: "Service Details", href: `/services/service?id=consulting` },
                ]}
            />

            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">

                    {/* Main Grid: Content + Sidebar */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-0">
                        {/* 1. Main Content Column */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-light text-gray-800 mb-6">
                                {service.title}
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {service.fullDescription}
                            </p>

                            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                                <Image
                                    src={service.coverImage}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>



                            {/* Two Column Section (Sub Services) */}
                            {service.subServices && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-12">
                                    {service.subServices.map((sub, idx) => (
                                        <div key={idx}>
                                            <div className="flex-shrink-0 mb-6">
                                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={sub.icon} />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-light text-gray-800 mb-4">
                                                {sub.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {sub.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <ServiceCapabilities capabilities={service.capabilities} />
                        </div>

                        {/* 2. Sidebar Column */}
                        <div className="space-y-8">
                            {/* Stats Card */}
                            <div className="mb-10">
                                <div className="flex justify-between items-center text-center">
                                    {service.stats.map((stat, idx) => (
                                        <div key={idx} className="contents">
                                            <div className="flex flex-col items-center">
                                                <div className="text-4xl font-light text-primary">{stat.value}</div>
                                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Service Overview Card */}
                            <div className="bg-white border border-gray-100 rounded-sm p-8 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-light text-gray-800">Service Overview</h3>
                                    <span className="bg-primary-light text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase">Premium Service</span>
                                </div>

                                <div className="space-y-4">
                                    {service.overview.map((item, idx) => (
                                        <div key={idx} className={`flex justify-between py-3 ${idx < service.overview.length - 1 ? 'border-b border-gray-50' : ''}`}>
                                            <span className="text-gray-600 text-sm">{item.label}</span>
                                            <span className="text-gray-800 font-medium text-sm">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Request Consultation Form */}
                            <div className="bg-white border border-gray-100 rounded-sm p-8 shadow-sm">
                                <h3 className="text-xl font-light text-gray-800 mb-2">Request Consultation</h3>
                                <p className="text-gray-500 text-sm mb-6">Get expert advice for your {service.title}</p>
                                <ConsultationForm serviceTitle={service.title} />
                            </div>

                            {/* Areas of Expertise */}
                            <div className="bg-white border border-gray-100 rounded-sm p-8 shadow-sm">
                                <h3 className="text-xl font-light text-gray-800 mb-6">Areas of Expertise</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                    {service.expertise.map((item, i) => (
                                        <div key={i} className="flex flex-col">
                                            <svg className="w-5 h-5 text-primary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                            </svg>
                                            <span className="text-xs font-semibold text-gray-700">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Projects */}
                    <div className="mt-20 border-t border-gray-100 pt-16">
                        <h2 className="text-3xl font-light text-gray-800 mb-12 text-center">
                            Recent Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-96 md:h-[500px]">
                            {/* Large Left Image - project[0] */}
                            <div className="relative h-full w-full rounded-sm overflow-hidden group">
                                <Image
                                    src={service.recentProjects[0]}
                                    alt="Project 1"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Right Grid */}
                            <div className="grid grid-cols-2 gap-4 h-full">
                                {/* Top Left - project[1] */}
                                <div className="relative h-full w-full rounded-sm overflow-hidden group">
                                    <Image
                                        src={service.recentProjects[1]}
                                        alt="Project 2"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                {/* Top Right - project[2] */}
                                <div className="relative h-full w-full rounded-sm overflow-hidden group">
                                    <Image
                                        src={service.recentProjects[2]}
                                        alt="Project 3"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                {/* Bottom Wide - project[3] */}
                                <div className="relative col-span-2 h-full w-full rounded-sm overflow-hidden group">
                                    <Image
                                        src={service.recentProjects[3]}
                                        alt="Project 4"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}
