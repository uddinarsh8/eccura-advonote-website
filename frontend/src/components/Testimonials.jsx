import {
    Star,
    Quote
} from "lucide-react";

function Testimonials() {

    const testimonials = [

        {
            name: "Adv. Rahul Sharma",
            role: "Criminal Advocate",
            review:
                "Advonote has completely transformed the way I manage my cases and clients. The hearing reminders are a lifesaver."
        },

        {
            name: "Adv. Priya Mehta",
            role: "Corporate Lawyer",
            review:
                "The client and case management system is incredibly intuitive. It has significantly improved my productivity."
        },

        {
            name: "Adv. Arjun Verma",
            role: "Family Law Specialist",
            review:
                "I can access all my case information from anywhere. Advonote is now an essential part of my practice."
        }

    ];

    return (

        <section
            id="testimonials"
            className="bg-[#FAF7F0] py-20"
        >

            <div className="max-w-7xl mx-auto px-6">

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

                {/* Testimonial Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {testimonials.map((testimonial, index) => (

                        <div
                            key={index}
                            className="
                                relative
                                bg-white
                                border border-[#E5E7EB]
                                rounded-3xl
                                p-8
                                shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                            "
                        >

                            {/* Quote Icon */}

                            <div
                                className="
                                    absolute
                                    top-6
                                    right-6
                                    text-[#F4C430]
                                "
                            >

                                <Quote size={32} />

                            </div>

                            {/* Stars */}

                            <div className="flex gap-1 mb-6">

                                {[...Array(5)].map((_, i) => (

                                    <Star
                                        key={i}
                                        size={18}
                                        fill="#F4C430"
                                        color="#F4C430"
                                    />

                                ))}

                            </div>

                            {/* Review */}

                            <p
                                className="
                                    text-[#6B7280]
                                    leading-relaxed
                                    mb-8
                                "
                            >

                                "{testimonial.review}"

                            </p>

                            {/* User */}

                            <div className="flex items-center gap-4">

                                {/* Avatar */}

                                <div
                                    className="
                                        w-14
                                        h-14
                                        rounded-full
                                        bg-[#FFF4CC]
                                        flex
                                        items-center
                                        justify-center
                                        text-[#2D1B14]
                                        font-bold
                                        text-lg
                                    "
                                >

                                    {testimonial.name
                                        .split(" ")
                                        .slice(-2)
                                        .map(name => name[0])
                                        .join("")}

                                </div>

                                <div>

                                    <h3
                                        className="
                                            text-lg
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

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Testimonials;