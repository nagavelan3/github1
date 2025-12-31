"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? "text-[#E65100]" : "text-white hover:text-[#E65100]";
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-8 py-4 bg-transparent font-medium">
            <Link href="/" className="text-2xl font-bold text-white">
                iConstruction
            </Link>
            <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className={`${isActive("/")} transition`}>Home</Link>
                <Link href="/about" className={`${isActive("/about")} transition`}>About</Link>
                <Link href="/services" className={`${isActive("/services")} transition`}>Services</Link>
                <Link href="/projects" className={`${isActive("/projects")} transition`}>Projects</Link>
                <Link href="/contact" className={`${isActive("/contact")} transition`}>Contact</Link>

                <Link href="/contact">
                    <button className="bg-[#E65100] hover:bg-[#F57C00] text-white px-6 py-2 rounded-sm font-semibold transition">
                        Request Quote
                    </button>
                </Link>
            </div>
        </nav>
    );
}
