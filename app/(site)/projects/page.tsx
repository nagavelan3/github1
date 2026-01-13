
import PageHeader from "@/components/PageHeader";
import Portfolio from "@/components/Portfolio";

export default function ProjectsPage() {
    return (
        <main>
            <PageHeader
                title="Projects"
                // description="Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias."
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    // { label: "Projects", href: `/projects/project?id=consulting` }
                ]}
            />
            <Portfolio />
        </main>
    );
}
