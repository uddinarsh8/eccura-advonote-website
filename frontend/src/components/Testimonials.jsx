import {
    Star,
    Quote,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

import {
    useState,
    useEffect
} from "react";

function Testimonials() {

    const testimonials = [

        {
            name: "Adv. Adil Kamal",
            role: "Advocate",
            review:
                "Advonote has simplified my daily practice. Managing cases, clients and hearing dates is now effortless."
        },

        {
            name: "Adv. Shahbaz Khan",
            role: "Advocate",
            review:
                "The platform is easy to use and helps me stay organized. The reminders feature is extremely useful."
        },

        {
            name: "Adv. Mustajeebur Rehman",
            role: "Advocate",
            review:
                "Advonote saves significant time and allows me to focus more on my clients and legal work."
        },

        {
            name: "Adv. Fariyad Hussain",
            role: "Advocate",
            review:
                "A reliable solution for case tracking and client management. Highly recommended for advocates."
        },

        {
            name: "Adv. Sultan Khan",
            role: "Advocate",
            review:
                "The hearing management and document organization features are excellent."
        },

        {
            name: "Adv. Pramod Kumar",
            role: "Advocate",
            review:
                "Advonote has improved productivity across my practice and reduced manual work."
        },

        {
            name: "Adv. Anuj Kumar Yadav",
            role: "Advocate",
            review:
                "Everything I need for managing cases and clients is available in one platform."
        },

        {
            name: "Adv. Pramod Sagar",
            role: "Advocate",
            review:
                "A modern legal practice management tool that helps me stay organized every day."
        }

    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrent((prev) =>
                prev === testimonials.length - 1
                    ? 0
                    : prev + 1
            );

        }, 4000);

        return () => clearInterval(interval);

    }, []);

    const prevSlide = () => {

        setCurrent(
            current === 0
                ? testimonials.length - 1
                : current - 1
        );

    };

    const nextSlide = () => {

        setCurrent(
            current === testimonials.length - 1
                ? 0
                : current + 1
        );

    };

    const isMobile =
        typeof window !== "undefined" &&
        window.innerWidth < 768;

    return (

        <section
            id="testimonials"
            className="bg-[#FAF7F0] py-20 overflow-hidden"
        >

            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2
                        className="
                            text-4xl
                            lg:text-5xl
                            font-bold
                            text-[#1F1F1F]
                        "
                    >

                        What

                        <span className="text-[#F4C430]">

                            {" "}Advocates Say

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

                        Trusted by legal professionals to simplify
                        their daily practice and improve efficiency.

                    </p>

                </div>

                {/* Carousel */}

                <div className="relative">

                    {/* Left Arrow */}

                    <button
                        onClick={prevSlide}
                        className="
                            hidden md:flex
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            z-50
                            bg-white
                            shadow-xl
                            rounded-full
                            p-3
                            hover:bg-[#F4C430]
                            transition-all
                            items-center
                            justify-center
                        "
                    >

                        <ChevronLeft size={22} />

                    </button>

                    {/* Slides */}

                    <div
                        className="
                            relative
                            h-[480px]
                            md:h-[430px]
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                        "
                    >

                        {testimonials.map((testimonial, index) => {

                            const offset =
                                (index - current + testimonials.length) %
                                testimonials.length;

                            let position = offset;

                            if (
                                offset >
                                testimonials.length / 2
                            ) {

                                position =
                                    offset -
                                    testimonials.length;

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
                                            translateX(${
                                                isMobile
                                                    ? position * 250
                                                    : position * 380
                                            }px)
                                            scale(${isActive ? 1 : 0.85})
                                        `,
                                        opacity:
                                            isMobile
                                                ? position === 0
                                                    ? 1
                                                    : 0
                                                : Math.abs(position) > 2
                                                    ? 0
                                                    : isActive
                                                        ? 1
                                                        : 0.5,
                                        zIndex:
                                            100 -
                                            Math.abs(position)
                                    }}
                                >

                                    <div
                                        className="
                                            relative
                                            bg-white
                                            border
                                            border-[#E5E7EB]
                                            rounded-3xl
                                            p-6
                                            md:p-8
                                            shadow-[0_8px_30px_rgba(0,0,0,0.10)]
                                            w-[260px]
                                            sm:w-[320px]
                                            md:w-[340px]
                                        "
                                    >

                                        <div
                                            className="
                                                absolute
                                                top-6
                                                right-6
                                                text-[#F4C430]
                                            "
                                        >

                                            <Quote size={30} />

                                        </div>

                                        <div className="flex gap-1 mb-5">

                                            {[...Array(5)].map((_, i) => (

                                                <Star
                                                    key={i}
                                                    size={18}
                                                    fill="#F4C430"
                                                    color="#F4C430"
                                                />

                                            ))}

                                        </div>

                                        <p
                                            className="
                                                text-[#6B7280]
                                                leading-relaxed
                                                mb-8
                                                min-h-[140px]
                                                md:min-h-[120px]
                                                text-sm
                                                md:text-base
                                            "
                                        >

                                            "{testimonial.review}"

                                        </p>

                                        <div className="flex items-center gap-4">

                                            <div
                                                className="
                                                    w-12
                                                    h-12
                                                    md:w-14
                                                    md:h-14
                                                    rounded-full
                                                    bg-[#FFF4CC]
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-[#2D1B14]
                                                    font-bold
                                                "
                                            >

                                                {testimonial.name
                                                    .split(" ")
                                                    .slice(-2)
                                                    .map(
                                                        name =>
                                                            name[0]
                                                    )
                                                    .join("")}

                                            </div>

                                            <div>

                                                <h3
                                                    className="
                                                        text-base
                                                        md:text-lg
                                                        font-bold
                                                        text-[#1F1F1F]
                                                    "
                                                >

                                                    {testimonial.name}

                                                </h3>

                                                <p
                                                    className="
                                                        text-sm
                                                        text-[#6B7280]
                                                    "
                                                >

                                                    {testimonial.role}

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                    {/* Right Arrow */}

                    <button
                        onClick={nextSlide}
                        className="
                            hidden md:flex
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            z-50
                            bg-white
                            shadow-xl
                            rounded-full
                            p-3
                            hover:bg-[#F4C430]
                            transition-all
                            items-center
                            justify-center
                        "
                    >

                        <ChevronRight size={22} />

                    </button>

                </div>

            </div>

        </section>

    );

}

export default Testimonials;