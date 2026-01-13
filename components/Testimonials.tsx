import { Quote } from "@/public/assets/Quote";
import Image from "next/image";

const testimonials = [
    {
        image: "/person1.webp",
        quote: "Implementing innovative strategies has revolutionized our approach to market challenges and competitive positioning.",
        name: "Rachel Bennett",
        role: "Strategy Director",
        highlight: false,
    },
    {
        image: "/person2.webp",
        quote: "Exceptional service delivery and innovative solutions have transformed our business operations, leading to remarkable growth and enhanced customer satisfaction across all touchpoints.",
        name: "Daniel Morgan",
        role: "Chief Innovation Officer",
        highlight: true,
    },
    {
        image: "/person3.webp",
        quote: "Strategic partnership has enabled seamless digital transformation and operational excellence.",
        name: "Emma Thompson",
        role: "Digital Lead",
        highlight: false,
    },
    {
        image: "/person4.webp",
        quote: "Professional expertise and dedication have significantly improved our project delivery timelines and quality metrics.",
        name: "Christopher Lee",
        role: "Technical Director",
        highlight: false,
    },
    {
        image: "/person5.webp",
        quote: "Collaborative approach and industry expertise have revolutionized our product development cycle, resulting in faster time-to-market and increased customer engagement levels.",
        name: "Olivia Carter",
        role: "Product Manager",
        highlight: true,
    },
    {
        image: "/person6.webp",
        quote: "Innovative approach to user experience design has significantly enhanced our platform's engagement metrics and customer retention rates.",
        name: "Nathan Brooks",
        role: "UX Director",
        highlight: false,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-[#fafafa]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-800 mb-4">Testimonials</h2>
                    <div className="relative flex items-center justify-center mb-6">
                        <div className="w-48 h-[1px] bg-gray-300"></div>
                        <div className="absolute w-16 h-1 bg-primary"></div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`relative p-7 rounded-lg transition-all duration-300 flex flex-col justify-between ${testimonial.highlight ? 'bg-[#fce4ec] border border-[#f8bbd0] md:translate-y-6' : 'bg-white border border-gray-200 hover:shadow-lg'}`}
                        >
                            <span className={`absolute -top-5 left-6 w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${testimonial.highlight ? 'bg-[#f8bbd0] text-primary' : 'bg-white border border-gray-200 text-primary'}`}>
                                <span className="text-lg font-semibold" aria-hidden="true"><Quote /></span>
                            </span>
                            <div>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </div>

                            <div className={`w-full h-px mb-4 bg-gray-200 ${testimonial.highlight ? 'mt-6' : 'mt-20'}`}></div>

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
            </div >
        </section >
    );
}
