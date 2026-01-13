
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
    return (
        <main>
            <PageHeader
                title="Contact"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact", href: "/contact" }
                ]}
            />
            <ContactSection />
        </main>
    );
}
