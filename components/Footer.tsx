export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Branding */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-normal">iConstruction</h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Innovating the digital landscape with elegant solutions and timeless design.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", // Facebook
                                "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-0 4 2 2 0 0 1 0-4z", // LinkedIn
                                "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z", // Instagram
                                "M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" // Globe
                            ].map((path, idx) => (
                                <div key={idx} className="w-10 h-10 rounded-md border border-gray-800 flex items-center justify-center hover:bg-[#E65100] hover:border-[#E65100] transition-colors cursor-pointer text-gray-400 hover:text-white">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={path}></path></svg>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-medium mb-6">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {['About Us', 'Our Team', 'Careers', 'Newsroom'].map(link => (
                                <li key={link} className="hover:text-[#E65100] cursor-pointer transition-colors block">{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-medium mb-6">Services</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {['Web Development', 'UI/UX Design', 'Digital Strategy', 'Branding'].map(link => (
                                <li key={link} className="hover:text-[#E65100] cursor-pointer transition-colors block">{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-medium mb-6">Support</h3>
                        <ul className="space-y-3 text-sm text-gray-400 mb-8">
                            {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map(link => (
                                <li key={link} className="hover:text-[#E65100] cursor-pointer transition-colors block">{link}</li>
                            ))}
                        </ul>

                        <h3 className="text-white font-medium mb-4">Let's Connect</h3>
                        <button className="border border-gray-700 pk-2 pl-4 pr-4 py-2 text-xs font-bold tracking-widest hover:border-[#E65100] hover:text-[#E65100] transition-colors text-white uppercase">
                            Get in Touch
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; 2024 iConstruction. All rights reserved.</p>
                    <p>Designed by BootstrapMade</p>
                </div>
            </div>
        </footer>
    );
}
