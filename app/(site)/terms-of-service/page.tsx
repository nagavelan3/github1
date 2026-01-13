import PageHeader from "@/components/PageHeader";

export default function TermsOfServicePage() {
    return (
        <main>
            <PageHeader
                title="Terms of Service"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    // { label: "Terms of Service", href: "/terms-of-service" }
                ]}
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose max-w-none text-gray-600 space-y-8">
                        <div>
                            <p className="font-semibold text-gray-800">Effective Date: [Add Date]</p>
                            <p className="mt-4">
                                By accessing or using this website, you agree to the following Terms of Service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Use of Website</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Website content is for general information purposes only</li>
                                <li>Unauthorized use of content is prohibited</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Services & Pricing</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>All services, pricing, and timelines are finalized through written agreement</li>
                                <li>Any changes may result in additional costs or delays</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Payments</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Payments must be made as per the agreed schedule</li>
                                <li>Failure to pay may result in service suspension</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
                            <p>
                                We are not liable for delays or damages caused by factors beyond our control, including weather, material availability, or legal approvals.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Governing Law</h2>
                            <p>
                                These terms are governed by the laws of India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
