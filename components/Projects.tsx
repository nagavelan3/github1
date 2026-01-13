import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        image: "/build1.webp",
        title: "General Contracting",
        description: "Full-scale construction management from planning to completion. We coordinate all aspects of your project, ensuring seamless execution and superior quality throughout every phase of construction.",
    },
    {
        image: "/build2.webp",
        title: "Residential Renovation",
        description: "Transform your home with our expert renovation services. From kitchen remodels to complete home makeovers, we deliver exceptional craftsmanship that enhances your living experience.",
    },
    {
        image: "/build3.webp",
        title: "Commercial Construction",
        description: "Build your business success with our commercial construction expertise. We specialize in office buildings, retail spaces, and industrial facilities that meet your operational needs and budget requirements.",
    },
    {
        image: "/build4.webp",
        title: "Project Management",
        description: "Professional oversight ensuring your project stays on schedule and within budget. Our experienced project managers coordinate all stakeholders and maintain the highest standards of quality control.",
    },
];

export default function Projects() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Optional Section Title if needed, simpler to keep clean or match design */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="group">
                            <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-8">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="text-2xl font-light text-gray-800 mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-500 leading-relaxed mb-6 pr-4">
                                {project.description}
                            </p>

                            <Link href="#" className="inline-flex items-center text-gray-800 font-medium hover:text-[#E65100] transition group-hover:translate-x-1">
                                Learn More
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
