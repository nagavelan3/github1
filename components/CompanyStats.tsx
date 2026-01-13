export default function CompanyStats() {
    return (
        <section className="py-16 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-light text-[#E65100] mb-2">25+</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Licensed</div>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl font-light text-[#E65100] mb-2">500+</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Completed Projects</div>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl font-light text-[#E65100] mb-2">12</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Industry Awards</div>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl font-light text-[#E65100] mb-2">100%</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Safety Record</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
