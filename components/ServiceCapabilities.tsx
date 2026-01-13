"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
    {
        id: "planning",
        label: "Planning & Design",
        title: "Comprehensive Planning Solutions",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "/build5.webp",
        points: [
            "Site analysis and feasibility studies",
            "Architectural design and engineering",
            "Permit acquisition and regulatory compliance",
            "Budget estimation and cost analysis"
        ]
    },
    {
        id: "construction",
        label: "Construction",
        title: "Expert Construction Execution",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.",
        image: "/build7.webp",
        points: [
            "Advanced construction techniques",
            "Quality control and safety protocols",
            "Sustainable building practices",
            "Timeline adherence and efficiency"
        ]
    },
    {
        id: "management",
        label: "Project Management",
        title: "Professional Project Management",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
        image: "/build3.webp",
        points: [
            "Real-time progress tracking",
            "Communication and coordination",
            "Risk assessment and mitigation",
            "Quality assurance inspections"
        ]
    }
];

export default function ServiceCapabilities({ capabilities }: { capabilities?: typeof tabs }) {
    const [activeTab, setActiveTab] = useState(capabilities ? capabilities[0].id : "planning");

    const content = capabilities || tabs;
    const activeContent = content.find(t => t.id === activeTab) || content[0];

    return (
        <div>
            <h2 className="text-3xl font-light text-gray-800 mb-8 mt-16">
                Our Capabilities
            </h2>
            <div className="flex space-x-8 border-b border-gray-200 mb-12 overflow-x-auto custom-scrollbar">
                {content.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-4 font-medium text-sm uppercase tracking-wide transition-colors whitespace-nowrap ${activeTab === tab.id
                            ? "text-primary border-b-2 border-primary"
                            : "text-gray-500 hover:text-gray-700 active:text-primary"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mb-12">
                <h3 className="text-2xl font-light text-gray-800 mb-6">
                    {activeContent.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            {activeContent.description}
                        </p>
                        <ul className="space-y-4">
                            {activeContent.points.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-700">
                                    <span className="text-primary mr-3">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={activeContent.image}
                            alt={activeContent.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
