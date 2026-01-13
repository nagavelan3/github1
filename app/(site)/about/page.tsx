import PageHeader from "@/components/PageHeader";
import About from "@/components/About";

export default function AboutPage() {
    return (
        <main>
            <PageHeader
                title="About Us"
                // description="Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias."
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    // { label: "About", href: "/about" }
                ]}
            />
            <About />
        </main>
    );
}
