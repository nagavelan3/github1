
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";

export default function ServicesPage() {
    return (
        <main>
            <PageHeader
                title="Services"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" }
                ]}
            />
            <Services />
            <ContactCTA />
        </main>
    );
}
