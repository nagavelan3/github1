import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import Services from "@/components/Services";


export default function ServicesPage() {
    return (
        <main>
            <PageHeader
                title="Services"
                // description="Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias."
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    // { label: "Services", href: "/services" }
                ]}
            />
            {/* Icon Services Grid */}
            <Services hideTitle={true} />

            {/* CTA Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-light text-gray-800 mb-6">
                        Ready to start your next project?
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-10">
                        Get in touch with our team to discuss your construction needs and receive a personalized quote for your project.
                    </p>
                    <Link href="/quote">
                        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-sm font-semibold transition inline-flex items-center">
                            Get Free Quote
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
