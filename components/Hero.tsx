
import Image from "next/image";
import Link from "next/link";
import Stats from "./Stats";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col text-center text-white">
            {/* Background Image */}
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover brightness-50"
                    poster="/back.webp"
                >
                    <source src="/video-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 space-y-6 min-h-screen">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
                    Building Excellence Through<br />
                    Professional Construction<br />
                    Services
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    We deliver comprehensive construction solutions with unwavering commitment to quality, safety, and timely completion. Trust our experienced team to bring your vision to life with precision and professionalism.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <Link href="/quote">
                        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded font-semibold text-lg transition min-w-[200px]">
                            REQUEST QUOTE
                        </button>
                    </Link>
                    <Link href="/projects">
                        <button className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded font-semibold text-lg transition min-w-[200px]">
                            VIEW PROJECTS
                        </button>
                    </Link>
                </div>
            </div>

            {/* Stats Section */}
            <div className="w-full">
                <Stats />
            </div>
        </section>
    );
}
