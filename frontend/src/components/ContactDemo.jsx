import { useState } from "react";
import {
    Scale,
    Send,
    CalendarCheck
} from "lucide-react";

import api from "../services/api";

function ContactDemo() {

    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [contactLoading, setContactLoading] =
        useState(false);

    const [demoForm, setDemoForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });

    const [demoLoading, setDemoLoading] =
        useState(false);

    const handleContactChange = (e) => {

        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });

    };

    const handleDemoChange = (e) => {

        setDemoForm({
            ...demoForm,
            [e.target.name]: e.target.value
        });

    };

    const handleContactSubmit = async (e) => {

        e.preventDefault();

        try {

            setContactLoading(true);

            const response = await api.post(
                "/contact",
                contactForm
            );

            alert(response.data.message);

            setContactForm({
                name: "",
                email: "",
                phone: "",
                message: ""
            });

        } catch (error) {

            console.error(error);

            alert("Error submitting contact form.");

        } finally {

            setContactLoading(false);

        }

    };

    const handleDemoSubmit = async (e) => {

        e.preventDefault();

        try {

            setDemoLoading(true);

            const response = await api.post(
                "/demo",
                demoForm
            );

            alert(response.data.message);

            setDemoForm({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: ""
            });

        } catch (error) {

            console.error(error);

            alert("Error submitting demo request.");

        } finally {

            setDemoLoading(false);

        }

    };

    return (

        <section
            id="contact-demo"
            className="bg-[#FFFDF7] py-16 lg:py-24"
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* CONTACT */}

                    <div
                        id="contact-form"
                        className="
                            bg-white
                            rounded-[32px]
                            shadow-lg
                            border border-[#EFE7DA]
                            p-6 sm:p-8 lg:p-10
                        "
                    >

                        <div className="flex items-center gap-4 mb-8">

                            <div
                                className="
                                    w-14 h-14
                                    rounded-2xl
                                    bg-[#FFF4CC]
                                    flex items-center justify-center
                                    shrink-0
                                "
                            >

                                <Scale
                                    size={28}
                                    className="text-[#F4C430]"
                                />

                            </div>

                            <div>

                                <h2 className="text-2xl sm:text-3xl font-bold text-[#2D1B14]">

                                    Get in Touch

                                </h2>

                                <p className="text-gray-500">

                                    We'd love to hear from you.

                                </p>

                            </div>

                        </div>

                        <form
                            onSubmit={handleContactSubmit}
                            className="space-y-5"
                        >

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={contactForm.name}
                                    onChange={handleContactChange}
                                    required
                                    className="
                                        w-full
                                        px-5 py-4
                                        rounded-xl
                                        border border-gray-200
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#F4C430]
                                    "
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={contactForm.email}
                                    onChange={handleContactChange}
                                    required
                                    className="
                                        w-full
                                        px-5 py-4
                                        rounded-xl
                                        border border-gray-200
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#F4C430]
                                    "
                                />

                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={contactForm.phone}
                                    onChange={handleContactChange}
                                    required
                                    className="
                                        w-full
                                        px-5 py-4
                                        rounded-xl
                                        border border-gray-200
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#F4C430]
                                    "
                                />

                            </div>

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                value={contactForm.message}
                                onChange={handleContactChange}
                                required
                                className="
                                    w-full
                                    px-5 py-4
                                    rounded-xl
                                    border border-gray-200
                                    resize-none
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-[#F4C430]
                                "
                            />

                            <button
                                type="submit"
                                disabled={contactLoading}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    bg-[#F4C430]
                                    text-[#2D1B14]
                                    px-7 py-4
                                    rounded-xl
                                    font-semibold
                                    hover:bg-[#E6B620]
                                    transition
                                "
                            >

                                <Send size={18} />

                                {contactLoading
                                    ? "Sending..."
                                    : "Send Message"}

                            </button>


                        </form>

                    </div>

                    {/* DEMO FORM */}

                    <div
                        className="
                            bg-[#F4C430]
                            rounded-[32px]
                            shadow-lg
                            p-8 lg:p-10
                        "
                    >

                        <div className="flex items-center gap-4 mb-8">

                            <div
                                className="
                                    w-14 h-14
                                    rounded-2xl
                                    bg-white
                                    flex items-center justify-center
                                "
                            >

                                <CalendarCheck
                                    className="text-[#2D1B14]"
                                    size={28}
                                />

                            </div>

                            <div>

                                <h2 className="text-3xl font-bold text-[#2D1B14]">

                                    Request a Demo

                                </h2>

                                <p className="text-[#5C4634]">

                                    Experience Advonote in action.

                                </p>

                            </div>

                        </div>

                        <form
                            onSubmit={handleDemoSubmit}
                            className="space-y-5"
                        >

                            <div className="grid md:grid-cols-3 gap-4">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={demoForm.name}
                                    onChange={handleDemoChange}
                                    className="w-full px-5 py-4 rounded-xl bg-white"
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={demoForm.email}
                                    onChange={handleDemoChange}
                                    className="w-full px-5 py-4 rounded-xl bg-white"
                                    required
                                />

                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={demoForm.phone}
                                    onChange={handleDemoChange}
                                    className="w-full px-5 py-4 rounded-xl bg-white"
                                    required
                                />

                            </div>

                            <input
                                type="text"
                                name="company"
                                placeholder="Law Firm / Organization"
                                value={demoForm.company}
                                onChange={handleDemoChange}
                                className="w-full px-5 py-4 rounded-xl bg-white"
                            />

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Tell us about your requirements"
                                value={demoForm.message}
                                onChange={handleDemoChange}
                                className="
                                    w-full
                                    px-5 py-4
                                    rounded-xl
                                    bg-white
                                    resize-none
                                "
                            />

                            <button
                                type="submit"
                                disabled={demoLoading}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    bg-[#2D1B14]
                                    text-white
                                    px-7 py-4
                                    rounded-xl
                                    font-semibold
                                    hover:bg-[#1E120D]
                                    transition
                                "
                            >

                                <CalendarCheck size={18} />

                                {
                                    demoLoading
                                        ? "Submitting..."
                                        : "Request Demo"
                                }

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default ContactDemo;