import {
    Star,
    Quote
} from "lucide-react";


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
        },

        {
            name: "Adv. Shikhar Shrivastav",
            role: "Advocate",
            review:
                "The interface is clean, professional and very easy to navigate."
        },

        {
            name: "Adv. Feroz Ali Khan",
            role: "Advocate",
            review:
                "Advonote has become an important part of my legal practice workflow."
        },

        {
            name: "Adv. Anjali",
            role: "Advocate",
            review:
                "Managing clients, hearings and case details is now much more efficient."
        },

        {
            name: "Adv. Ayesha Shaikh",
            role: "Advocate",
            review:
                "The platform is secure, reliable and designed perfectly for legal professionals."
        },

        {
            name: "Adv. Devendra Kumar",
            role: "Advocate",
            review:
                "Advonote helps me manage my practice professionally and efficiently."
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
                {/* Testimonial Cards */}

                <div className="relative">

                    <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">

                        {testimonials.map((testimonial, index) => (

                            <div
                                key={index}
                                className="
                    flex-shrink-0
                    w-[340px]
                "
                            >

                                <div
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
                        h-full
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
                                        <Quote size={32} />
                                    </div>

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

                                    <p
                                        className="
                            text-[#6B7280]
                            leading-relaxed
                            mb-8
                            min-h-[120px]
                        "
                                    >
                                        "{testimonial.review}"
                                    </p>

                                    <div className="flex items-center gap-4">

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

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Testimonials;