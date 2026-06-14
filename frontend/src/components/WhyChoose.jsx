import {
    ShieldCheck,
    Scale,
    MonitorSmartphone,
    Clock3,
    RefreshCcw,
    Headphones
} from "lucide-react";

function WhyChoose() {

    const reasons = [
        {
            icon: ShieldCheck,
            title: "Secure Cloud-Based Platform",
            description:
                "Your legal data is protected with enterprise-grade security and cloud backups."
        },
        {
            icon: Scale,
            title: "Built for Advocates",
            description:
                "Designed specifically to meet the daily needs of advocates and law firms."
        },
        {
            icon: MonitorSmartphone,
            title: "Easy-to-Use Interface",
            description:
                "A simple and intuitive experience that requires minimal learning."
        },
        {
            icon: Clock3,
            title: "24/7 Accessibility",
            description:
                "Access your cases, clients and documents anytime, anywhere."
        },
        {
            icon: RefreshCcw,
            title: "Regular Updates",
            description:
                "Continuously improved with new features and enhancements."
        },
        {
            icon: Headphones,
            title: "Dedicated Support",
            description:
                "Our support team is always ready to assist your practice."
        }
    ];

    return (

        <section
            id="why-choose"
            className="bg-[#FFFDF7] py-20"
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

                        Why Choose

                        <span className="text-[#F4C430]">

                            {" "}Advonote?

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

                        Built to simplify, secure and modernize legal practice management.

                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {reasons.map((reason, index) => {

                        const Icon = reason.icon;

                        return (

                            <div
                                key={index}
                                className="
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

                                {/* Icon */}

                                <div
                                    className="
                                        w-16
                                        h-16
                                        rounded-2xl
                                        bg-[#FFF4CC]
                                        flex
                                        items-center
                                        justify-center
                                        mb-6
                                    "
                                >

                                    <Icon
                                        size={30}
                                        className="text-[#F5C542]"
                                    />

                                </div>

                                {/* Title */}

                                <h3
                                    className="
                                        text-xl
                                        font-bold
                                        text-[#1F1F1F]
                                        mb-4
                                    "
                                >

                                    {reason.title}

                                </h3>

                                {/* Description */}

                                <p
                                    className="
                                        text-[#6B7280]
                                        leading-relaxed
                                    "
                                >

                                    {reason.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default WhyChoose;