import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
                            Built on Excellence, Driven by Vision
                        </h2>

                        <div className="space-y-6 text-gray-600">
                            <p className="leading-relaxed">
                                CMP Builders and Developers is a premier construction company specializing in residential, commercial, and industrial projects, delivering end-to-end solutions from planning to completion. The company is known for its strong focus on quality craftsmanship, safety standards, and the use of durable materials to ensure long-lasting structures. Every project is executed with precision and attention to detail. This commitment ensures reliability and superior construction outcomes.

                            </p>
                            <p className="leading-relaxed">
                                Transparency and innovation are at the core of CMP Builders and Developers’ approach. Clients benefit from clear communication, honest pricing, and timely project delivery at every stage. By adopting modern construction techniques and sustainable practices, the company creates efficient and future-ready spaces. CMP consistently delivers projects that combine functionality, aesthetics, and long-term value.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-4">
                            <div>
                                <div className="text-3xl font-light text-primary mb-1">25+</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-light text-primary mb-1">500+</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Projects Completed</div>
                            </div>
                            <div>
                                <div className="text-3xl font-light text-primary mb-1">98%</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Client Satisfaction</div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link href="#" className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition group">
                                Explore Our Services
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative">
                        <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/second_image.webp"
                                alt="Modern House"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Quality Badge */}
                        {/* Quality Badge */}
                        <div className="absolute -bottom-10 -right-4 md:-right-8 bg-white p-6 rounded-xl shadow-lg border-none animate-fade-in-up">
                            <Image
                                src="/certi.png"
                                alt="Quality Certified Since 1999"
                                width={180}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
