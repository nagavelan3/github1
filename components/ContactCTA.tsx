import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="py-20 bg-[#fafafa]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
                    Ready to start your next project?
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Get in touch with our team to discuss your construction needs and receive a personalized quote for your project.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center bg-[#E65100] hover:bg-[#F57C00] text-white px-8 py-4 rounded font-semibold transition"
                >
                    Get Free Quote
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
