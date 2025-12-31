import Link from "next/link";

const services = [
    {
        id: "01",
        title: "Commercial Construction",
        description: "Comprehensive commercial building solutions from office complexes to retail spaces, delivered with precision and expertise.",
        icon: (
            <svg className="w-6 h-6 text-[#E65100]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        highlight: false,
    },
    {
        id: "02",
        title: "Residential Projects",
        description: "Custom home construction and renovation services that transform your vision into reality with attention to every detail.",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        highlight: true,
    },
    {
        id: "03",
        title: "Design Build Services",
        description: "Integrated approach combining architectural design and construction expertise for seamless project delivery.",
        icon: (
            <svg className="w-6 h-6 text-[#E65100]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        highlight: false,
        badge: "PREMIUM",
    },
    {
        id: "04",
        title: "Project Consulting",
        description: "Expert guidance through every phase of construction with strategic planning and professional oversight.",
        icon: (
            <svg className="w-6 h-6 text-[#E65100]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
        highlight: false,
    },
    {
        id: "05",
        title: "Renovation & Remodeling",
        description: "Transform existing spaces with modern upgrades while preserving structural integrity and aesthetic appeal.",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        highlight: true,
    },
    {
        id: "06",
        title: "Site Development",
        description: "Complete site preparation including excavation, grading, and utility installation for optimal project foundation.",
        icon: (
            <svg className="w-6 h-6 text-[#E65100]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
        ),
        highlight: false,
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-4">Services</h2>
                    <div className="w-16 h-1 bg-[#E65100] mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`bg-white p-8 rounded-sm transition-all duration-300 relative group hover:shadow-lg ${service.highlight ? 'border-t-4 border-[#E65100] shadow-md' : 'border border-gray-100'}`}
                        >
                            {service.badge && (
                                <span className="absolute top-6 right-6 bg-[#E65100] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {service.badge}
                                </span>
                            )}

                            <div className="text-gray-300 text-sm font-medium mb-6">
                                {service.id}
                            </div>

                            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors ${service.highlight ? 'bg-[#E65100]' : 'bg-orange-50 group-hover:bg-[#E65100] group-hover:text-white'}`}>
                                <div className={`${service.highlight ? '' : 'group-hover:text-white'}`}>
                                    {/* Clone the icon to change color on hover for non-highlighted items if needed, or rely on css classes */}
                                    {/* We handled color in the icon definition for static highlight, simple CSS for hover state is tricky with inline SVG, 
                      so for simplicity we rely on the container bg change and might need forcing text color change via CSS or state. 
                      However, the request image shows static highlights. */}
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-light text-gray-800 mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed mb-8 min-h-[80px]">
                                {service.description}
                            </p>

                            {service.highlight || service.badge === "PREMIUM" ? (
                                <Link href="#" className="inline-flex items-center text-[#E65100] font-medium hover:text-[#F57C00] transition text-sm">
                                    {service.badge === "PREMIUM" ? "Get Quote" : "Explore Service"}
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            ) : (
                                <Link href="#" className="inline-flex items-center text-gray-600 font-medium hover:text-[#E65100] transition text-sm">
                                    Explore Service
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
