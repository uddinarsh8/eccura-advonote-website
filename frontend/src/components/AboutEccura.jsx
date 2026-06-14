import {
    Briefcase,
    Users,
    Package,
    Headphones,
    Mail,
    Phone,
    MapPin
} from "lucide-react";

function AboutEccura() {

    const stats = [
        {
            icon: Briefcase,
            number: "5+",
            label: "Years of Experience"
        },
        {
            icon: Users,
            number: "100+",
            label: "Happy Clients"
        },
        {
            icon: Package,
            number: "20+",
            label: "Products Delivered"
        },
        {
            icon: Headphones,
            number: "24/7",
            label: "Customer Support"
        }
    ];

    return (

        <section id="AboutEccura" className="bg-white py-16">

            <div className="max-w-7xl mx-auto px-6">

                {/* Top Section */}

                <div className="bg-[#FFFDF7] rounded-3xl border border-[#EFE7DA] overflow-hidden">

                    <div className="grid lg:grid-cols-[2fr_1fr_1fr]">

                        {/* About ECCURA */}

                        <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#EFE7DA]">

                            <h2 className="text-3xl font-bold text-[#2D1B14] mb-5">
                                About ECCURA Technologies
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                ECCURA Technologies Pvt. Ltd. is a software
                                development company focused on building
                                innovative, reliable and user-friendly
                                solutions for businesses and professionals.
                                Our mission is to empower legal professionals
                                with technology that simplifies their daily
                                practice.
                            </p>

                        </div>

                        {/* Statistics */}

                        <div className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-2 border-b lg:border-b-0 lg:border-r border-[#EFE7DA]">

                            {stats.map((stat, index) => {

                                const Icon = stat.icon;

                                return (

                                    <div
                                        key={index}
                                        className="p-6 text-center border border-[#EFE7DA]"
                                    >

                                        <Icon
                                            size={28}
                                            className="mx-auto mb-3 text-[#F4C430]"
                                        />

                                        <h3 className="text-2xl font-bold text-[#2D1B14]">
                                            {stat.number}
                                        </h3>

                                        <p className="text-sm text-gray-600">
                                            {stat.label}
                                        </p>

                                    </div>

                                );

                            })}

                        </div>

                        {/* ECCURA Contact */}

                        <div className="p-8">

                            <h3 className="text-4xl font-bold text-[#F4C430] mb-6">
                                ECCURA
                            </h3>

                            <div className="space-y-4 text-gray-700">

                                <div className="flex items-center gap-3">

                                    <Mail
                                        size={18}
                                        className="text-[#F4C430]"
                                    />

                                    support@eccuratech.com

                                </div>

                                <div className="flex items-center gap-3">

                                    <Phone
                                        size={18}
                                        className="text-[#F4C430]"
                                    />

                                    +91 12345 67890

                                </div>

                                <div className="flex items-center gap-3">

                                    <MapPin
                                        size={18}
                                        className="text-[#F4C430]"
                                    />

                                    Ahmedabad, Gujarat, India

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Middle Content */}

                <div className="text-center mt-12">

                    <h2 className="text-3xl font-bold text-[#2D1B14] mb-4">
                        Legal Practice Management Software for Advocates & Law Firms
                    </h2>

                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Advonote helps advocates and law firms manage cases,
                        clients, documents, hearings, tasks and more in one
                        secure platform. Improve productivity, save time and
                        focus on what matters the most — winning cases and
                        serving clients.
                    </p>

                </div>

                {/* Tags */}

                <div className="flex flex-wrap justify-center gap-4 mt-10">

                    {[
                        "Advocate Case Management",
                        "Law Firm Management",
                        "Legal Practice Automation",
                        "Case Tracking Software",
                        "Document Management",
                        "Calendar & Reminders"
                    ].map((tag, index) => (

                        <span
                            key={index}
                            className="
                                px-5 py-3
                                rounded-full
                                bg-[#FFF4CC]
                                text-[#2D1B14]
                                font-medium
                                text-sm
                            "
                        >

                            {tag}

                        </span>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default AboutEccura;