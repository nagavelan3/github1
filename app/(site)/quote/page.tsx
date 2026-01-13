import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import QuoteContent from "@/components/QuoteContent";

export default function QuotePage() {
    return (
        <main>
            <PageHeader
                title="Quote"
                // description="Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias."
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    // { label: "Quote", href: "/quote" },
                ]}
            />
            <Suspense fallback={<div className="py-20 text-center">Loading form...</div>}>
                <QuoteContent />
            </Suspense>
        </main>
    );
}
