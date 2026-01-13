
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
    return (
        <main>
            <PageHeader
                title="Contact Us"
                // description="Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias."
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    // { label: "Contact", href: "/contact" }
                ]}
            />
            <ContactSection />
        </main>
    );
}
