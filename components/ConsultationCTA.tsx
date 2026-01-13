import Link from "next/link";

export default function ConsultationCTA() {
    return (
        <section className="py-10 bg-[#fafafa]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Stat 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 mx-auto mb-4 text-primary">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-light text-gray-800 mb-2">750+</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Projects Delivered</div>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 mx-auto mb-4 text-primary">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-light text-gray-800 mb-2">20+</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Established</div>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 mx-auto mb-4 text-primary">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-light text-gray-800 mb-2">100%</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Safety Record</div>
                        </div>

                        {/* Stat 4 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 mx-auto mb-4 text-primary">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-light text-gray-800 mb-2">95%</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Client Satisfaction</div>
                        </div>
                    </div>

                    {/* Right Column: CTA Card */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-light text-gray-800 mb-6">Ready to Start Building?</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed text-base">
                            Donec rutrum congue leo eget malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Schedule your consultation today.
                        </p>

                        <div className="space-y-4 mb-10">
                            <Link href="/quote" className="block w-full bg-primary hover:bg-primary-hover text-white py-4 px-8 rounded font-medium transition flex items-center justify-between group">
                                <span className="text-base">Request Quote</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>

                            <Link href="/projects" className="block w-full border border-gray-200 text-gray-700 hover:bg-gray-50 py-4 px-8 rounded font-medium transition flex items-center justify-between">
                                <span className="text-base">View Gallery</span>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </Link>
                        </div>

                        <div className="border-t border-gray-100 pt-8 space-y-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-5 text-primary">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-500 font-medium uppercase tracking-wide">Direct Line</span>
                                    <span className="text-lg font-bold text-gray-800">9486960256</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-5 text-primary">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-500 font-medium uppercase tracking-wide">Email Us</span>
                                    <span className="text-lg font-bold text-gray-800">cmpnovel@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
