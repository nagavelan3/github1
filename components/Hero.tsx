
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center text-center text-white px-4">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover brightness-50"
                >
                    <source src="/video-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg">
                    Building Excellence Through<br />
                    Professional Construction<br />
                    Services
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    We deliver comprehensive construction solutions with unwavering commitment to quality, safety, and timely completion. Trust our experienced team to bring your vision to life with precision and professionalism.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <Link href="/contact">
                        <button className="bg-[#E65100] hover:bg-[#F57C00] text-white px-8 py-4 rounded font-semibold text-lg transition min-w-[200px]">
                            REQUEST QUOTE
                        </button>
                    </Link>
                    <button className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded font-semibold text-lg transition min-w-[200px]">
                        VIEW PROJECTS
                    </button>
                </div>
            </div>
        </section>
    );
}
