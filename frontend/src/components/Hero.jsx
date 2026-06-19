import {
    Download,
    CalendarDays,
    Phone
} from "lucide-react";

import heroPhones from "../assets/hero-phones.png";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store-png-logo-33116.png";

function Hero() {

    const playStoreLink =
        "https://play.google.com/store/apps/details?id=com.aamni.AdvoNote&pcampaignid=web_share";

    const scrollToSection = (id) => {

        const section =
            document.getElementById(id);

        if (section) {

            section.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    };

    return (

        <section
            id="hero"
            className="bg-[#FFFDF7] overflow-hidden"
        >

            <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-10 py-12 lg:py-20">

                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">

                    {/* LEFT CONTENT */}

                    <div className="relative z-10 text-center lg:text-left">

                        <div className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            sm:text-base
                            font-medium
                            text-[#2D1B14]
                        ">

                            <span className="text-[#F4C430]">

                                ⭐

                            </span>

                            Smart Legal Practice Management

                        </div>

                        <h1 className="
                            mt-6
                            font-bold
                            leading-tight
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                        ">

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

                        <p className="
                            mt-6
                            text-base
                            sm:text-lg
                            text-[#6B7280]
                            max-w-xl
                            mx-auto
                            lg:mx-0
                            leading-relaxed
                        ">

                            Advonote is the all-in-one legal practice
                            management platform designed for advocates
                            and law firms to manage cases, clients,
                            hearings, documents, tasks and daily
                            activities from anywhere.

                        </p>

                        {/* BUTTONS */}

                        <div className="
                            mt-10
                            flex
                            flex-col
                            sm:flex-row
                            flex-wrap
                            gap-4
                            justify-center
                            lg:justify-start
                        ">

                            {/* Download */}

                            <a
                                href={playStoreLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    bg-[#F4C430]
                                    text-[#2D1B14]
                                    px-7
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    shadow-md
                                    hover:bg-[#E8B923]
                                    transition-all
                                    w-full
                                    sm:w-auto
                                "
                            >

                                <Download size={20} />

                                Download App

                            </a>

                            {/* Demo */}

                            <button
                                onClick={() =>
                                    scrollToSection(
                                        "contact-form"
                                    )
                                }
                                className="
                                    border
                                    border-[#E5E7EB]
                                    px-7
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    text-[#2D1B14]
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    shadow-sm
                                    hover:bg-white
                                    transition-all
                                    w-full
                                    sm:w-auto
                                    cursor-pointer
                                "
                            >

                                <CalendarDays size={20} />

                                Request Demo

                            </button>

                            {/* Contact */}

                            <button
                                onClick={() =>
                                    scrollToSection(
                                        "contact-form"
                                    )
                                }
                                className="
                                    border
                                    border-[#E5E7EB]
                                    px-7
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    text-[#2D1B14]
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    shadow-sm
                                    hover:bg-white
                                    transition-all
                                    w-full
                                    sm:w-auto
                                    cursor-pointer
                                "
                            >

                                <Phone size={20} />

                                Contact Us

                            </button>

                        </div>

                        {/* APP DOWNLOAD BUTTONS */}

                        <div
                            className="
        mt-8
        flex
        flex-wrap
        gap-4
        justify-center
        lg:justify-start
        items-center
    "
                        >

                            {/* Google Play */}

                            <a
                                href={playStoreLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <img
                                    src={googlePlay}
                                    alt="Get it on Google Play"
                                    className="
                h-12
                sm:h-14
                md:h-16
                lg:h-20
                w-auto
                hover:scale-105
                transition-transform
                duration-300
            "
                                />

                            </a>

                            {/* Apple App Store */}

                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                rel="noopener noreferrer"
                            >

                                <img
                                    src={appStore}
                                    alt="Download on the App Store"
                                    className="
            h-12
            sm:h-14
            md:h-16
            lg:h-20
            w-auto
            hover:scale-105
            transition-transform
            duration-300
        "
                                />

                            </a>



                        </div>

                    </div>

                    {/* RIGHT CONTENT */}

                    <div className="
                        relative
                        flex
                        justify-center
                        items-center
                        min-h-[300px]
                        sm:min-h-[400px]
                        md:min-h-[500px]
                        lg:min-h-[650px]
                    ">

                        <img
                            src={heroPhones}
                            alt="Advonote App Preview"
                            className="
                                relative
                                z-10
                                w-full
                                max-w-[320px]
                                sm:max-w-[420px]
                                md:max-w-[520px]
                                lg:max-w-[700px]
                                xl:max-w-[780px]
                                object-contain
                                mx-auto
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