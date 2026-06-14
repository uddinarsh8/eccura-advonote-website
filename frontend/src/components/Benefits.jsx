import {
    Scale,
    Building2,
    Briefcase
} from "lucide-react";

function Benefits() {

    const benefits = [
        {
            icon: Scale,
            title: "For Advocates",
            description:
                "Manage hearings, cases, clients, reminders and daily tasks efficiently from a single platform."
        },
        {
            icon: Building2,
            title: "For Law Firms",
            description:
                "Collaborate with your team, streamline operations and improve overall productivity."
        },
        {
            icon: Briefcase,
            title: "For Legal Consultants",
            description:
                "Access case information securely from anywhere and deliver better legal services."
        }
    ];

    return (

        <section
            id="benefits"
            className="py-20 bg-[#FAF7F0]"
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

                        Benefits of

                        <span className="text-[#F4C430]">

                            {" "}Advonote

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

                        Designed to empower advocates, law firms and legal professionals with smarter practice management.

                    </p>

                </div>

                {/* Benefit Cards */}

                <div className="grid md:grid-cols-3 gap-8">

                    {benefits.map((benefit, index) => {

                        const Icon = benefit.icon;

                        return (

                            <div
                                key={index}
                                className="
                                    bg-white
                                    border border-[#E5E7EB]
                                    rounded-3xl
                                    shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                                    p-8
                                    text-center
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                                "
                            >

                                {/* Icon */}

                                <div
                                    className="
                                        w-16
                                        h-16
                                        mx-auto
                                        mb-6
                                        rounded-2xl
                                        bg-[#FFF4CC]
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <Icon
                                        size={32}
                                        className="text-[#F5C542]"
                                    />

                                </div>

                                {/* Title */}

                                <h3
                                    className="
                                        text-2xl
                                        font-bold
                                        text-[#1F1F1F]
                                        mb-4
                                    "
                                >

                                    {benefit.title}

                                </h3>

                                {/* Description */}

                                <p
                                    className="
                                        text-[#6B7280]
                                        leading-relaxed
                                    "
                                >

                                    {benefit.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default Benefits;