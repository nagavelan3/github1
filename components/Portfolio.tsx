"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/projects";

export default function Portfolio() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-4">Projects</h2>
                    <div className="relative flex items-center justify-center mb-6">
                        <div className="w-32 h-[1px] bg-gray-300"></div>
                        <div className="absolute w-16 h-1 bg-primary"></div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const isSelected = selectedIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg transition-all duration-300 border border-gray-100 group overflow-hidden hover:border-primary"
                            >
                                <div className="relative h-[250px] w-full overflow-hidden">
                                    {/* Status Badge */}
                                    {project.status && (
                                        <span className={`absolute top-4 left-4 z-10 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider text-white transition-opacity duration-300 ${project.status === 'IN PROGRESS' ? 'bg-primary' : 'bg-green-500'} opacity-100 md:opacity-0 md:group-hover:opacity-100`}>
                                            {project.status}
                                        </span>
                                    )}

                                    {/* Overlay - visible on hover */}
                                    <div className="absolute inset-0 transition-opacity duration-300 z-10 flex items-end justify-center pb-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 bg-black/20 md:bg-transparent">
                                        <Link href={`/projects/project?id=${project.id}`}>
                                            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold transform transition duration-300 shadow-lg translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 text-sm md:text-base">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>

                                    <Image
                                        src={project.coverImage || ''}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                                        {project.tag}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center text-xs text-gray-400 border-t pt-4">
                                        <div className="flex items-center mr-6">
                                            <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {project.location}
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {project.duration}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
