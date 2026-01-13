
import Image from "next/image";
import Link from "next/link";

interface PageHeaderProps {
    title: string;
    breadcrumbs: { label: string; href: string }[];
    description?: string;
}

export default function PageHeader({ title, breadcrumbs, description }: PageHeaderProps) {
    return (
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/back.webp"
                    alt="Background"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 z-10 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
                {description && (
                    <p className="mx-auto text-sm md:text-base text-gray-200 max-w-4xl">{description}</p>
                )}
                <div className="flex items-center justify-center space-x-2 text-sm md:text-base text-gray-200">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center">
                            {index > 0 && <span className="mx-2">/</span>}
                            {index === breadcrumbs.length - 1 ? (
                                <span className="text-white">{crumb.label}</span>
                            ) : (
                                <Link href={crumb.href} className="text-primary hover:text-primary-hover transition">
                                    {crumb.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
