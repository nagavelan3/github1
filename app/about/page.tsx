import PageHeader from "@/components/PageHeader";
import About from "@/components/About";

export default function AboutPage() {
    return (
        <main>
            <PageHeader
                title="About Us"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" }
                ]}
            />
            <About />
        </main>
    );
}
