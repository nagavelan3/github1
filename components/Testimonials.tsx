import Image from "next/image";

const testimonials = [
    {
        image: "/person2.webp",
        quote: "Professional expertise and dedication have significantly improved our project delivery timelines and quality metrics.",
        name: "Christopher Lee",
        role: "Technical Director",
        highlight: false,
    },
    {
        image: "/person1.webp",
        quote: "Collaborative approach and industry expertise have revolutionized our product development cycle, resulting in faster time-to-market and increased customer engagement levels.",
        name: "Olivia Carter",
        role: "Product Manager",
        highlight: true,
    },
    {
        image: "/person3.webp",
        quote: "Innovative approach to user experience design has significantly enhanced our platform's engagement metrics and customer retention rates.",
        name: "Nathan Brooks",
        role: "UX Director",
        highlight: false,
    },
    {
        image: "/person4.webp",
        quote: "Implementing innovative strategies has revolutionized our approach to market challenges and competitive positioning.",
        name: "Rachel Bennett",
        role: "Strategy Director",
        highlight: false,
    },
    {
        image: "/person5.webp",
        quote: "Exceptional service delivery and innovative solutions have transformed our business operations, leading to remarkable growth and enhanced customer satisfaction across all touchpoints.",
        name: "Daniel Morgan",
        role: "Chief Innovation Officer",
        highlight: true,
    },
    {
        image: "/person6.webp",
        quote: "Strategic partnership has enabled seamless digital transformation and operational excellence.",
        name: "Emma Thompson",
        role: "Digital Lead",
        highlight: false,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-4">Testimonials</h2>
                    <div className="w-16 h-1 bg-[#E65100] mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`p-10 rounded-lg transition-all duration-300 flex flex-col justify-between ${testimonial.highlight ? 'bg-[#FFF3E0] ring-1 ring-[#FFF3E0] shadow-sm' : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'}`}
                        >
                            <div>
                                <svg className="w-8 h-8 text-[#E65100] mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.896 14.389 15.955 15.133 15.176C15.877 14.397 16.924 14.007 18.274 14.007V11.938C17.062 11.938 16.031 11.536 15.178 10.732C14.326 9.928 13.9 8.941 13.9 7.773C13.9 6.467 14.363 5.378 15.289 4.506C16.216 3.635 17.387 3.2 18.8 3.2V6.2C18.423 6.2 18.106 6.326 17.848 6.578C17.591 6.83 17.462 7.149 17.462 7.535C17.462 7.828 17.566 8.082 17.771 8.297C17.977 8.513 18.271 8.621 18.653 8.621H19.782V14.153C19.782 16.045 19.103 17.659 17.744 18.995C16.386 20.332 14.887 21 13.248 21L14.017 21ZM5.017 21L5.017 18C5.017 16.896 5.389 15.955 6.133 15.176C6.877 14.397 7.924 14.007 9.274 14.007V11.938C8.062 11.938 7.031 11.536 6.178 10.732C5.326 9.928 4.901 8.941 4.901 7.773C4.901 6.467 5.364 5.378 6.289 4.506C7.216 3.635 8.387 3.2 9.8 3.2V6.2C9.423 6.2 9.106 6.326 8.848 6.578C8.591 6.83 8.462 7.149 8.462 7.535C8.462 7.828 8.566 8.082 8.771 8.297C8.977 8.513 9.271 8.621 9.653 8.621H10.782V14.153C10.782 16.045 10.103 17.659 8.744 18.995C7.386 20.332 5.887 21 4.248 21L5.017 21Z" />
                                </svg>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </div>

                            <div className="flex items-center">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-medium">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
