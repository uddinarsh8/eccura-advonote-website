import { useState } from "react";
import {
    ChevronDown,
    ChevronUp
} from "lucide-react";

function FAQ() {

    const faqs = [

        {
            question: "Is my data secure?",
            answer:
                "Yes. Advonote uses secure cloud infrastructure, encrypted authentication and industry-standard security practices to keep your legal data protected."
        },

        {
            question: "Can I access Advonote from multiple devices?",
            answer:
                "Yes. You can securely access your account from mobile phones, tablets and desktop devices using the same account."
        },

        {
            question: "Can I export reports?",
            answer:
                "Absolutely. Reports, case details and important information can be exported whenever required."
        },

        {
            question: "Do you provide support?",
            answer:
                "Yes. Our dedicated support team is available to assist you whenever you need help."
        }

    ];

    const [open, setOpen] = useState(null);

    return (

        <section
            id="faq"
            className="bg-[#FFFDF7] py-20"
        >

            <div className="max-w-4xl mx-auto px-6">

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

                        Frequently Asked

                        <span className="text-[#F4C430]">

                            {" "}Questions

                        </span>

                    </h2>

                    <p
                        className="
                            mt-4
                            text-[#6B7280]
                        "
                    >

                        Everything you need to know about Advonote.

                    </p>

                </div>

                {/* FAQ Items */}

                <div className="space-y-5">

                    {faqs.map((faq, index) => (

                        <div
                            key={index}
                            className="
                                bg-white
                                border border-[#E5E7EB]
                                rounded-3xl
                                shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                                overflow-hidden
                                transition-all
                                duration-300
                            "
                        >

                            <button
                                onClick={() =>
                                    setOpen(
                                        open === index
                                            ? null
                                            : index
                                    )
                                }
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    p-6
                                    text-left
                                    font-semibold
                                    text-[#1F1F1F]
                                    hover:bg-[#FAF7F0]
                                    transition
                                "
                            >

                                <span className="pr-4">

                                    {faq.question}

                                </span>

                                <span
                                    className="
                                        flex-shrink-0
                                        text-[#F4C430]
                                    "
                                >

                                    {open === index ? (

                                        <ChevronUp size={24} />

                                    ) : (

                                        <ChevronDown size={24} />

                                    )}

                                </span>

                            </button>

                            {open === index && (

                                <div
                                    className="
                                        px-6
                                        pb-6
                                        text-[#6B7280]
                                        leading-relaxed
                                        border-t
                                        border-[#E5E7EB]
                                    "
                                >

                                    <p className="pt-5">

                                        {faq.answer}

                                    </p>

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default FAQ;