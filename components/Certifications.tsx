import Image from "next/image";

const certifications = [
    {
        image: "/badge-1.webp",
        title: "ISO 9001",
        description: "Quality Management System certification ensuring consistent service delivery and continuous improvement processes."
    },
    {
        image: "/badge-2.webp",
        title: "OSHA Certified",
        description: "Occupational Safety and Health Administration certification demonstrating our commitment to workplace safety standards."
    },
    {
        image: "/badge-3.webp",
        title: "Licensed & Insured",
        description: "Fully licensed contractor with comprehensive insurance coverage protecting both our team and your investment."
    },
    {
        image: "/badge-4.webp",
        title: "Green Building",
        description: "Certified in sustainable construction practices and environmentally responsible building methodologies."
    }
];

export default function Certifications() {
    return (
        <section className="py-20 bg-[#fafafa]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-4">Certified & Trusted</h2>
                    <div className="w-16 h-1 bg-[#E65100] mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-white p-8 rounded text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <div className="relative w-24 h-24 mx-auto mb-6">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="text-xl font-light text-gray-800 mb-4">
                                {cert.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
