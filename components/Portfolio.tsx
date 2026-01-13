import Image from "next/image";

const projects = [
    {
        image: "/build5.webp",
        tag: "COMMERCIAL",
        title: "Downtown Business Center",
        description: "Modern office complex featuring sustainable design elements and advanced building systems.",
        location: "Chicago, IL",
        duration: "18 Months",
        status: "COMPLETED"
    },
    {
        image: "/build6.webp",
        tag: "RESIDENTIAL",
        title: "Luxury Waterfront Villa",
        description: "Exclusive residential property with panoramic views and premium finishes throughout.",
        location: "Miami, FL",
        duration: "12 Months",
        status: "IN PROGRESS"
    },
    {
        image: "/build1.webp",
        tag: "INDUSTRIAL",
        title: "Manufacturing Warehouse",
        description: "Large-scale industrial facility with automated systems and efficient workflow design.",
        location: "Detroit, MI",
        duration: "24 Months",
        status: ""
    },
    {
        image: "/build2.webp",
        tag: "HEALTHCARE",
        title: "Regional Medical Center",
        description: "State-of-the-art healthcare facility with specialized treatment areas and patient amenities.",
        location: "Phoenix, AZ",
        duration: "30 Months",
        status: ""
    },
    {
        image: "/build3.webp",
        tag: "EDUCATIONAL",
        title: "University Science Building",
        description: "Modern research facility with advanced laboratories and collaborative learning spaces.",
        location: "Austin, TX",
        duration: "36 Months",
        status: ""
    },
    {
        image: "/build4.webp",
        tag: "RETAIL",
        title: "Shopping Complex",
        description: "Multi-level retail center with dining areas and entertainment facilities for the community.",
        location: "Seattle, WA",
        duration: "20 Months",
        status: ""
    },
];

export default function Portfolio() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-4">Projects</h2>
                    <div className="w-16 h-1 bg-[#E65100] mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group overflow-hidden">
                            <div className="relative h-[250px] w-full overflow-hidden">
                                {/* Status Badge */}
                                {project.status && (
                                    <span className={`absolute top-4 left-4 z-10 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider text-white ${project.status === 'IN PROGRESS' ? 'bg-[#E65100]' : 'bg-green-500'}`}>
                                        {project.status}
                                    </span>
                                )}

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                                    <button className="bg-[#E65100] text-white px-6 py-2 rounded font-semibold transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                                        View Details
                                    </button>
                                </div>

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8">
                                <div className="text-[#E65100] text-xs font-bold uppercase tracking-wider mb-2">
                                    {project.tag}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#E65100] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex items-center text-xs text-gray-400 border-t pt-4">
                                    <div className="flex items-center mr-6">
                                        <svg className="w-4 h-4 mr-1 text-[#E65100]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {project.location}
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-1 text-[#E65100]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {project.duration}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
