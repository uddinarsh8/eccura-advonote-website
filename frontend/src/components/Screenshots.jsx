import {
    ChevronLeft,
    ChevronRight
} from "lucide-react";

import {
    useState,
    useEffect
} from "react";

import login from "../assets/screenshots/login.jpg";
import dashboard from "../assets/screenshots/dashboard.jpg";
import calendar from "../assets/screenshots/calendar.jpg";
import profile from "../assets/screenshots/profile.jpg";
import addCase from "../assets/screenshots/add-case.jpg";
import caseForm from "../assets/screenshots/case-form.jpg";

const screens = [
    { image: login, title: "Login" },
    { image: dashboard, title: "Dashboard" },
    { image: calendar, title: "Calendar" },
    { image: profile, title: "Profile" },
    { image: addCase, title: "Add New Case" },
    { image: caseForm, title: "Case Details" }
];

function Screenshots() {

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrent((prev) =>
                prev === screens.length - 1
                    ? 0
                    : prev + 1
            );

        }, 3000);

        return () => clearInterval(interval);

    }, []);

    const prevSlide = () => {

        setCurrent(
            current === 0
                ? screens.length - 1
                : current - 1
        );

    };

    const nextSlide = () => {

        setCurrent(
            current === screens.length - 1
                ? 0
                : current + 1
        );

    };

    return (

        <section
            id="screenshots"
            className="bg-[#FAF7F0] py-20 overflow-hidden"
        >

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1F1F1F]">

                        Explore The

                        <span className="text-[#F4C430]">

                            {" "}Advonote App

                        </span>

                    </h2>

                    <p
                        className="
                            mt-4
                            text-[#6B7280]
                            max-w-2xl
                            mx-auto
                        "
                    >

                        Discover the intuitive interface designed
                        to simplify legal practice management.

                    </p>

                </div>

                {/* Carousel */}

                <div className="relative">

                    {/* Left Button */}

                    <button
                        onClick={prevSlide}
                        className="
                            absolute
                            left-0
                            md:left-4
                            top-1/2
                            -translate-y-1/2
                            z-30
                            bg-white
                            shadow-xl
                            rounded-full
                            p-3
                            hover:bg-[#F4C430]
                            transition-all
                        "
                    >

                        <ChevronLeft size={24} />

                    </button>

                    {/* Slides */}

                    <div
                        className="
                            relative
                            h-[580px]
                            flex
                            items-center
                            justify-center
                        "
                    >

                        {screens.map((screen, index) => {

                            const offset =
                                (index - current + screens.length) %
                                screens.length;

                            let position = offset;

                            if (
                                offset > screens.length / 2
                            ) {

                                position =
                                    offset - screens.length;

                            }

                            const isActive =
                                position === 0;

                            return (

                                <div
                                    key={index}
                                    className="
                                        absolute
                                        transition-all
                                        duration-700
                                        ease-in-out
                                    "
                                    style={{
                                        transform: `
                                            translateX(${position * 280}px)
                                            scale(${isActive ? 1 : 0.82})
                                        `,
                                        opacity:
                                            Math.abs(position) > 2
                                                ? 0
                                                : isActive
                                                    ? 1
                                                    : 0.55,
                                        zIndex:
                                            100 -
                                            Math.abs(position)
                                    }}
                                >

                                    {/* Mobile Frame */}

                                    <div
                                        className="
                                            bg-black
                                            rounded-[42px]
                                            p-2
                                            border-[3px]
                                            border-black
                                            shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                                            w-[220px]
                                            md:w-[250px]
                                        "
                                    >

                                        <img
                                            src={screen.image}
                                            alt={screen.title}
                                            className="
                                                rounded-[34px]
                                                h-[450px]
                                                md:h-[500px]
                                                w-full
                                                object-cover
                                            "
                                        />

                                    </div>

                                    <h3
                                        className="
                                            mt-4
                                            text-center
                                            font-semibold
                                            text-[#1F1F1F]
                                        "
                                    >

                                        {screen.title}

                                    </h3>

                                </div>

                            );

                        })}

                    </div>

                    {/* Right Button */}

                    <button
                        onClick={nextSlide}
                        className="
                            absolute
                            right-0
                            md:right-4
                            top-1/2
                            -translate-y-1/2
                            z-30
                            bg-white
                            shadow-xl
                            rounded-full
                            p-3
                            hover:bg-[#F4C430]
                            transition-all
                        "
                    >

                        <ChevronRight size={24} />

                    </button>

                </div>

            </div>

        </section>

    );

}

export default Screenshots;