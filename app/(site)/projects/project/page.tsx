"use client";

import PageHeader from "@/components/PageHeader";
import { projects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";

export default function ProjectDetailsPage() {
    const searchParams= useSearchParams();
    const id = searchParams.get("id");

    const project = projects.find(proj => proj.id === id);

    if (!project) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                <p className="text-gray-600 mb-8">The project you are looking for does not exist.</p>
                <Link href="/projects" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition">
                    Back to Projects
                </Link>
            </main>
        );
    }

    return (
        <main>
            <PageHeader
                title="Portfolio Details"
                // description="Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias."
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    // { label: "Project Details", href: `/projects/$},
                ]}
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Main Image */}
                        <div>
                            <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
                                <Image
                                    src={project.coverImage || ''}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                    {project.status}
                                </span>
                            </div>
                        </div>

                        {/* Right Column - Project Info */}
                        <div>
                            <div className="flex items-center space-x-4 mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                <span className='text-primary'>{project.category}</span>
                                <span>/</span>
                                <span>Downtown Metropolitan</span>
                            </div>

                            <h2 className="text-3xl font-light text-gray-800 mb-6">
                                {project.title}
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="border-t border-gray-100 pt-8 space-y-4">
                                <div className="flex justify-between py-2 border-b border-gray-50">
                                    <span className="text-gray-500 font-medium">Duration</span>
                                    <span className="text-gray-800 font-bold">{project.duration}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-50">
                                    <span className="text-gray-500 font-medium">Area</span>
                                    <span className="text-gray-800 font-bold">{project.area}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-50">
                                    <span className="text-gray-500 font-medium">Client</span>
                                    <span className="text-gray-800 font-bold">{project.client}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-gray-500 font-medium">Location</span>
                                    <span className="text-gray-800 font-bold">{project.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                        <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                            <Image src="/build1.webp" alt="Project View 1" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                            <Image src="/build4.webp" alt="Project View 2" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                            <Image src="/build2.webp" alt="Project View 3" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                            <Image src="/build3.webp" alt="Project View 4" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>


                    {/* Project Overview & Challenges */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-light text-gray-800 mb-4">Project Overview</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-light text-gray-800 mb-6">Challenges & Solutions</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                {project.challenge}
                            </p>

                            <div className="flex items-start mt-6">
                                <div className="flex-shrink-0 mt-1">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-800 mb-2">Sustainable Materials</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Utilized eco-friendly building materials and energy-efficient systems throughout the construction process.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start mt-6">
                                <div className="flex-shrink-0 mt-1">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-800 mb-2">Timeline Management</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Delivered the project ahead of schedule through innovative project management and coordination strategies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="mt-24 mb-12">
                        <h3 className="text-3xl font-light text-gray-800 mb-12">Technical Specifications</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Specs List */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-gray-500 font-medium">Building Height</span>
                                    <span className="text-gray-800 font-bold">12 floors</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-gray-500 font-medium">Foundation Type</span>
                                    <span className="text-gray-800 font-bold">Reinforced Concrete</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-gray-500 font-medium">Facade Material</span>
                                    <span className="text-gray-800 font-bold">Glass & Steel</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-gray-500 font-medium">Parking Spaces</span>
                                    <span className="text-gray-800 font-bold">180 units</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-gray-500 font-medium">Energy Rating</span>
                                    <span className="text-gray-800 font-bold">LEED Gold</span>
                                </div>
                                <div className="flex justify-between items-center py-4">
                                    <span className="text-gray-500 font-medium">Completion Date</span>
                                    <span className="text-gray-800 font-bold">March 2024</span>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                                <Image
                                    src="/build6.webp"
                                    alt="Technical Specs"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
