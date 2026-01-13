import PageHeader from "@/components/PageHeader";

export default function PrivacyPolicyPage() {
    return (
        <main>
            <PageHeader
                title="Privacy Policy"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    // { label: "Privacy Policy", href: "/privacy-policy" }
                ]}
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose max-w-none text-gray-600 space-y-8">
                        <div>
                            <p className="font-semibold text-gray-800">Effective Date: [Add Date]</p>
                            <p className="mt-4">
                                We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name, phone number, email address</li>
                                <li>Project-related details submitted through forms</li>
                                <li>Website usage data (cookies, analytics)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Information</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To respond to inquiries and provide services</li>
                                <li>To communicate project updates</li>
                                <li>To improve website performance and user experience</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Protection</h2>
                            <p>
                                We implement reasonable security measures to protect your personal data from unauthorized access, misuse, or disclosure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Sharing</h2>
                            <p>
                                We do not sell or rent your personal data. Information may be shared only if required by law or to complete requested services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h2>
                            <p>
                                Our website may use cookies to enhance user experience. You can disable cookies through your browser settings.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Consent</h2>
                            <p>
                                By using this website, you consent to our Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
