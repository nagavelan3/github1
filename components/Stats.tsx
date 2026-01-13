export default function Stats() {
    const stats = [
        { number: "250", label: "PROJECTS COMPLETED" },
        { number: "15", label: "YEARS EXPERIENCE" },
        { number: "98", label: "% CLIENT SATISFACTION" },
        { number: "50", label: "EXPERT TEAM MEMBERS" },
    ];

    return (
        <section className="relative z-20 py-16 md:py-24">
            {/* Optional: Add a texture or keep it solid/gradient matching the dark theme */}
            <div className="container mx-auto px-4 bg-gray-900/50 backdrop-blur-sm rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-6">
                            <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-sm font-bold text-gray-400 tracking-wider uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
