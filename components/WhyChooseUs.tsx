import React from "react";

const whyChooseUsData = [
    {
        title: "Experienced Leadership",
        description: "Seasoned professionals guiding a skilled workforce to deliver excellence in every project.",
        icon: (
            <svg className="w-8 h-8 text-[#5E6B7C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Medal/Ribbon Icon - Purple Circle with Ribbon */}
                <circle cx="12" cy="9" r="6" strokeWidth={1.5} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15l-2 5l2 1l2-1l-2-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v0" /> {/* Center dot hint */}
            </svg>
        ),
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600"
    },
    {
        title: "Digital Excellence",
        description: "Advanced digital tools and CRM systems for seamless project tracking and management.",
        icon: (
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Bar Chart Icon - Blue */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500"
    },
    {
        title: "Client Relationships",
        description: "Strong partnerships built on trust, leading to lasting relationships and repeat business.",
        icon: (
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Users Icon - Green */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        iconBg: "bg-green-50",
        iconColor: "text-green-500"
    },
    {
        title: "Safety Commitment",
        description: "Unwavering dedication to safety standards and regulatory compliance in all operations.",
        icon: (
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Shield Icon - Red */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        iconBg: "bg-red-50",
        iconColor: "text-red-500"
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-[#fafafa]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-4">Why Choose Us</h2>
                    <div className="relative flex items-center justify-center mb-6">
                        <div className="w-48 h-[1px] bg-gray-300"></div>
                        <div className="absolute w-16 h-1 bg-primary"></div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover what sets us apart in delivering exceptional results
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseUsData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center mb-6`}>
                                <div className={item.iconColor}>
                                    {item.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-normaltext-gray-600 mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
