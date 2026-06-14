import {
    UserPlus,
    Users,
    FileText,
    CalendarDays,
    BarChart3
} from "lucide-react";

function HowItWorks() {

    const steps = [

        {
            icon: UserPlus,
            title: "Create Account",
            description:
                "Register and set up your advocate profile within minutes."
        },

        {
            icon: Users,
            title: "Add Clients",
            description:
                "Store and manage all your client information securely."
        },

        {
            icon: FileText,
            title: "Manage Cases",
            description:
                "Create cases, upload documents and organize records."
        },

        {
            icon: CalendarDays,
            title: "Track Hearings",
            description:
                "Stay updated with hearings, reminders and schedules."
        },

        {
            icon: BarChart3,
            title: "Monitor Progress",
            description:
                "View reports and improve your legal practice efficiency."
        }

    ];

    return (

        <section
            id="how-it-works"
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

                        How

                        <span className="text-[#F4C430]">

                            {" "}Advonote

                        </span>

                        {" "}Works

                    </h2>

                    <p
                        className="
                            mt-4
                            text-[#6B7280]
                            max-w-2xl
                            mx-auto
                        "
                    >

                        A simple workflow designed specifically
                        for advocates and law firms.

                    </p>

                </div>

                {/* Steps */}

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

                    {steps.map((step, index) => {

                        const Icon = step.icon;

                        return (

                            <div
                                key={index}
                                className="
                                    relative
                                    text-center
                                    group
                                "
                            >

                                {/* Connecting Line */}

                                {index !== steps.length - 1 && (

                                    <div
                                        className="
                                            hidden
                                            lg:block
                                            absolute
                                            top-10
                                            left-[60%]
                                            w-full
                                            h-[2px]
                                            bg-[#E5E7EB]
                                            -z-10
                                        "
                                    />

                                )}

                                {/* Step Number */}

                                <div
                                    className="
                                        absolute
                                        -top-4
                                        left-1/2
                                        -translate-x-1/2
                                        bg-[#F4C430]
                                        text-[#2D1B14]
                                        w-9
                                        h-9
                                        rounded-full
                                        flex
                                        items-center
                                        justify-center
                                        font-bold
                                        shadow-md
                                    "
                                >

                                    {index + 1}

                                </div>

                                {/* Card */}

                                <div
                                    className="
                                        bg-white
                                        border
                                        border-[#E5E7EB]
                                        rounded-3xl
                                        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                                        p-8
                                        pt-12
                                        h-full
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
                                            mb-3
                                        "
                                    >

                                        {step.title}

                                    </h3>

                                    {/* Description */}

                                    <p
                                        className="
                                            text-[#6B7280]
                                            text-sm
                                            leading-relaxed
                                        "
                                    >

                                        {step.description}

                                    </p>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default HowItWorks;