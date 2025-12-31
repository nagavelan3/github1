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
                            Built on Excellence, <br />
                            <span className="font-semibold">Driven by Vision</span>
                        </h2>

                        <div className="space-y-6 text-gray-600">
                            <p className="text-lg leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                            <p className="leading-relaxed">
                                Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-4">
                            <div>
                                <div className="text-3xl font-light text-[#E65100] mb-1">25+</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-light text-[#E65100] mb-1">500+</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Projects Completed</div>
                            </div>
                            <div>
                                <div className="text-3xl font-light text-[#E65100] mb-1">98%</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Client Satisfaction</div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link href="#" className="inline-flex items-center text-[#E65100] font-semibold hover:text-[#F57C00] transition group">
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
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-2xl flex items-center gap-4 max-w-[250px]">
                            <div className="text-[#E65100]">
                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.699-3.181a1 1 0 011.827 0l1.699 3.181L24.18 5.61A1 1 0 0124 7.21l-3.323 1.918L21.954 12.827a1 1 0 01-1.536 1.116l-3.323-.892-2.327 2.45a1 1 0 01-1.422.302l-3.323-1.918-3.323 1.918a1 1 0 01-1.422-.302l-2.327-2.45-3.323.892a1 1 0 01-1.536-1.116L2.82 9.128l-3.323-1.918A1 1 0 01-.2 5.61l3.954-1.582L5.454 2.82a1 1 0 011.827 0l1.699 3.181L12.932 4.402V2a1 1 0 011-1z" clipRule="evenodd" transform="scale(0.8) translate(2,2)" />
                                    <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-800">Quality Certified</div>
                                <div className="text-gray-500 text-sm">Since 1999</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
