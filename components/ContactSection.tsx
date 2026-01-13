export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Map */}
                    <div className="w-full h-full min-h-[400px] lg:min-h-full bg-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.238692591604!2d-74.0087126845943!3d40.73061007932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f98815555%3A0x1d5c7f8475f8b9e6!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1645434567890!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Right Column: Info Cards & Form */}
                    <div className="space-y-8">

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 shadow-sm rounded-lg flex items-start space-x-4">
                                <div className="bg-orange-50 p-3 rounded-full text-[#E65100]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                                    <p className="text-gray-500 text-sm">8721 Broadway Avenue, New York, NY 10023</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 shadow-sm rounded-lg flex items-start space-x-4">
                                <div className="bg-orange-50 p-3 rounded-full text-[#E65100]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                    <p className="text-gray-500 text-sm">info@examplecompany.com</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 shadow-sm rounded-lg flex items-start space-x-4">
                                <div className="bg-orange-50 p-3 rounded-full text-[#E65100]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Call</h3>
                                    <p className="text-gray-500 text-sm">+1 (212) 555-7890</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 shadow-sm rounded-lg flex items-start space-x-4">
                                <div className="bg-orange-50 p-3 rounded-full text-[#E65100]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Open Hours</h3>
                                    <p className="text-gray-500 text-sm">Monday-Friday: 9AM - 6PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-10 shadow-sm rounded-lg border border-gray-100">
                            <div className="border-l-4 border-[#E65100] pl-4 mb-8">
                                <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
                            </div>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.
                            </p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#E65100] transition-colors" />
                                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#E65100] transition-colors" />
                                </div>
                                <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#E65100] transition-colors" />
                                <textarea rows={6} placeholder="Message" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#E65100] transition-colors resize-none"></textarea>

                                <button type="submit" className="px-8 py-3 bg-[#E65100] text-white rounded font-medium hover:bg-[#F57C00] transition-colors shadow-md hover:shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
