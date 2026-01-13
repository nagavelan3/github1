
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
    return (
        <main>
            <PageHeader
                title="Projects"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Projects", href: "/projects" }
                ]}
            />
            <Projects />
        </main>
    );
}
