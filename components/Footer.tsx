import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 border-t border-gray-800 font-[family-name:var(--font-roboto)]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.5fr_1fr] gap-8 mb-8">

                    {/* Branding */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-normal">CMP Builders</h2><br></br><br></br>

                        <div className="flex space-x-4">
                            {[
                                { path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", url: "https://www.facebook.com" }, // Facebook
                                { path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-0 4 2 2 0 0 1 0-4z", url: "https://www.linkedin.com" }, // LinkedIn
                                { path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z", url: "https://www.instagram.com" }, // Instagram
                                { path: "M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z", url: "https://www.twitter.com" } // Replaced Globe with Twitter as user request implied Twitter
                            ].map((item, idx) => (
                                <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-md border border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors cursor-pointer text-gray-400 hover:text-white">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d={item.path}></path></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-medium text-lg mb-6">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Services', href: '/services' },
                                { name: 'Contact Us', href: '/contact' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-primary cursor-pointer transition-colors block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-medium text-lg mb-6">Services</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {[
                                { name: 'Commercial Complexes & Office Spaces', href: '/services/commercial-construction' },
                                { name: 'Residential Projects', href: '/services/residential-projects' },
                                { name: 'Renovation & Interior Design Solutions', href: '/services/project-consulting' },
                                { name: 'Turnkey Project Management', href: '/services/renovation' },
                                { name: 'Architectural & Structural Consultancy', href: '/services/site-development' },
                                { name: 'Industrial Construction & Warehouses', href: '/services/design-build' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-primary cursor-pointer transition-colors block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-medium text-lg mb-6">Support</h3>
                        <ul className="space-y-3 text-sm text-gray-400 mb-8">
                            {[
                                { name: 'Contact Us', href: '/contact' },
                                { name: 'Privacy Policy', href: '/privacy-policy' },
                                { name: 'Terms of Service', href: '/terms-of-service' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-primary cursor-pointer transition-colors block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-white font-medium text-lg mb-4">Let's Connect</h3>
                        <Link href="/contact">
                            <button className="border border-gray-700 pk-2 pl-4 pr-4 py-2 text-xs font-bold tracking-widest hover:border-primary hover:text-primary transition-colors text-white uppercase">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; 2025 CMP Builders. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
