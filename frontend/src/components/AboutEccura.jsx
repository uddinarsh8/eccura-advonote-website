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
            number: "8+",
            label: "Years of Experience"
        },
        {
            icon: Users,
            number: "200+",
            label: "Happy Clients"
        },
        {
            icon: Package,
            number: "50+",
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
                                About Eccura Technologies
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                Eccura Technologies Pvt. Ltd. is a forward-thinking
                                technology company based in Bareilly, dedicated to
                                transforming complex business challenges into seamless
                                digital experiences. From automating institutions with
                                ERP solutions to empowering legal professionals through
                                Advonote, our mission is to build intelligent software
                                that drives productivity, innovation, and growth.
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
                                Eccura Technologies Pvt. Ltd.
                            </h3>

                            <div className="space-y-4 text-gray-700">

                                {/* Email */}

                                <div className="flex items-center gap-3">

                                    <Mail
                                        size={18}
                                        className="text-[#F4C430]"
                                    />

                                    <a
                                        href="mailto:eccuratech@gmail.com"
                                        className="hover:text-[#F4C430] transition"
                                    >
                                        eccuratech@gmail.com
                                    </a>

                                </div>

                                {/* Phone */}

                                <div className="flex items-center gap-3">

                                    <Phone
                                        size={18}
                                        className="text-[#F4C430]"
                                    />

                                    <a
                                        href="tel:+916398057980"
                                        className="hover:text-[#F4C430] transition"
                                    >
                                        +91 6398057980
                                    </a>

                                </div>

                                {/* Address */}

                                <div className="flex items-start gap-3">

                                    <MapPin
                                        size={28}
                                        className="
                                            text-[#F4C430]
                                            flex-shrink-0
                                            mt-1
                                        "
                                    />

                                    <span className="leading-relaxed">
                                        Near Hotel Grand Nirvana,
                                        Karampur Chaudhary,
                                        Nainital Road,
                                        Bareilly - 243202,
                                        Uttar Pradesh, India
                                    </span>

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