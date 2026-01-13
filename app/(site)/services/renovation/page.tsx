"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import ServiceCapabilities from "@/components/ServiceCapabilities";
import ConsultationForm from "@/components/ConsultationForm";

export default function ServiceDetailsPage() {

    const service = {
        id: "renovation",
        title: "Turnkey Project Management",
        description: "We provide complete project management services under a single point of responsibility, seamlessly coordinating design, procurement, construction, and quality control.",
        coverImage: "/build5.webp",
        fullDescription: "We provide complete project management services under a single point of responsibility, seamlessly coordinating design, procurement, construction, and quality control. Our turnkey approach ensures streamlined execution, transparent cost management, minimized risks, and timely delivery from initial concept to final handover.",
        icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
        subServices: [
            {
                title: "End-to-End Project Execution",
                description: "Single-point responsibility covering design, approvals, procurement, construction, and final delivery.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            },
            {
                title: "Planning & Design Coordination",
                description: "Managing architects, engineers, and consultants to ensure alignment with project goals and timelines.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                title: "Procurement & Vendor Management",
                description: "Sourcing quality materials and coordinating trusted vendors to maintain cost and quality standards.",
                icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            },
            {
                title: "Construction & Site Management",
                description: "On-site supervision, safety compliance, and progress monitoring to ensure smooth execution.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            }
        ],
        capabilities: [
            {
                id: "planning",
                label: "Planning & Design",
                title: "Comprehensive Planning Solutions",
                description: "We manage project planning and design coordination to clearly define project scope, create efficient layouts, ensure regulatory compliance, and align every stage of the design with client objectives from the very beginning.",
                image: "/build5.webp",
                points: [
                    "Clear project scope definition",
                    "Efficient and practical layout planning",
                    "Coordination between design teams",
                    "Compliance with regulations and approvals",
                    "Alignment with client goals and requirements"
                ]
            },
            {
                id: "construction",
                label: "Construction",
                title: "Expert Construction Execution",
                description: "We oversee construction activities with strong supervision, strict quality checks, coordinated procurement, and efficient execution to ensure durable outcomes and smooth on-site operations.",
                image: "/build7.webp",
                points: [
                    "Strict quality inspections at every stage",
                    "Coordinated material procurement",
                    "Efficient on-site execution",
                    "Adherence to safety and construction standards",
                    "Durable and reliable project delivery"
                ]
            },
            {
                id: "management",
                label: "Project Management",
                title: "Professional Project Management",
                description: "We manage the entire project lifecycle with structured coordination, transparent cost control, continuous schedule monitoring, and proactive risk management to ensure on-time delivery and a smooth, hassle-free handover.",
                image: "/build3.webp",
                points: [
                    "End-to-end project coordination",
                    "Transparent cost and budget management",
                    "Schedule tracking and milestone control",
                    "Risk identification and mitigation",
                    "On-time delivery with smooth handover"
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
        recentProjects: ["/build5.webp", "/build1.webp", "/build7.webp", "/build2.webp"]
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
