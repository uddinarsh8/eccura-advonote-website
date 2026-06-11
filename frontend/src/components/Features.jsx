import {
    FileText,
    Users,
    BarChart,
    Calendar,
    Bell,
    CheckSquare
} from "lucide-react";

function Features() {

    const features = [

        {
            icon: FileText,
            title: "Case Management",
            description:
                "Manage legal cases, hearing dates, and case history efficiently."
        },

        {
            icon: Users,
            title: "Client Management",
            description:
                "Store and organize client details with quick access anytime."
        },

        {
            icon: Calendar,
            title: "Calendar & Hearings",
            description:
                "Track upcoming hearings and never miss important court dates."
        },

        {
            icon: Bell,
            title: "Notifications",
            description:
                "Receive instant alerts for hearings, tasks and updates."
        },

        {
            icon: CheckSquare,
            title: "Task Management",
            description:
                "Create, track and complete daily legal tasks effortlessly."
        },

        {
            icon: BarChart,
            title: "Analytics Dashboard",
            description:
                "Get insights into your cases, clients and overall productivity."
        }

    ];

    return (

        <section className="py-16 sm:py-20 lg:py-24 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}

                <div className="text-center mb-12 lg:mb-16">

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">

                        Powerful Features

                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">

                        Everything an advocate needs to manage
                        legal practice from one secure platform.

                    </p>

                </div>

                {/* Feature Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (

                            <div
                                key={index}
                                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">

                                    <Icon size={32} />

                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">

                                    {feature.title}

                                </h3>

                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">

                                    {feature.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default Features;