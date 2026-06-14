import { Link } from "react-router-dom";
import {
    Download,
    CalendarDays,
    Phone
} from "lucide-react";

import heroPhones from "../assets/hero-phones.png";

function Hero() {
    return (
        <section id="hero" className="bg-[#FFFDF7] overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-12 lg:py-20">

                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="relative z-10">

                        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#2D1B14]">
                            <span className="text-[#F4C430]">
                                ⭐
                            </span>

                            Smart Legal Practice Management
                        </div>

                        <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">

                            <span className="text-[#2D1B14]">
                                Manage Your Cases.
                            </span>

                            <br />

                            <span className="text-[#2D1B14]">
                                Serve Your Clients.
                            </span>

                            <br />

                            <span className="text-[#F4C430]">
                                Grow Your Practice.
                            </span>

                        </h1>

                        <p className="mt-8 text-lg text-[#6B7280] max-w-xl leading-relaxed">

                            Advonote is the all-in-one legal practice
                            management platform designed for advocates
                            and law firms to manage cases, clients,
                            hearings, documents, tasks and daily
                            activities from anywhere.

                        </p>

                        {/* BUTTONS */}
                        <div className="mt-10 flex flex-wrap gap-4">

                            <button
                                className="
                                    bg-[#F4C430]
                                    text-[#2D1B14]
                                    px-7 py-4
                                    rounded-xl
                                    font-semibold
                                    flex items-center gap-2
                                    shadow-md
                                    hover:bg-[#E8B923]
                                    transition-all
                                "
                            >
                                <Download size={20} />

                                Download App
                            </button>

                            <Link
                                to="/demo"
                                className="
                                    border border-[#E5E7EB]
                                    px-7 py-4
                                    rounded-xl
                                    font-semibold
                                    text-[#2D1B14]
                                    flex items-center gap-2
                                    shadow-sm
                                    hover:bg-white
                                    transition-all
                                "
                            >
                                <CalendarDays size={20} />

                                Request Demo
                            </Link>

                            <Link
                                to="/contact"
                                className="
                                    border border-[#E5E7EB]
                                    px-7 py-4
                                    rounded-xl
                                    font-semibold
                                    text-[#2D1B14]
                                    flex items-center gap-2
                                    shadow-sm
                                    hover:bg-white
                                    transition-all
                                "
                            >
                                <Phone size={20} />

                                Contact Us
                            </Link>

                        </div>

                        {/* GOOGLE PLAY */}
                        <div className="mt-8">
                            <img
                                src="/images/google-play.png"
                                alt="Google Play"
                                className="h-14"
                            />
                        </div>

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative flex justify-center items-end h-[450px] lg:h-[650px] overflow-hidden">

                        {/* Yellow Curved Shape */}
                        <div
                            className="
                                absolute
                                bottom-0
                                right-[-10%]
                                w-[120%]
                                h-[180px]
                                lg:h-[230px]
                                bg-[#F4C430]
                                rounded-tl-[220px]
                                rounded-tr-[220px]
                                z-0
                            "
                        />

                        {/* Phones */}
                        <img
                            src={heroPhones}
                            alt="Advonote App Preview"
                            className="
                                relative
                                z-10
                                w-full
                                max-w-[520px]
                                lg:max-w-[820px]
                                xl:max-w-[900px]
                                object-contain
                                drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)]
                            "
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;