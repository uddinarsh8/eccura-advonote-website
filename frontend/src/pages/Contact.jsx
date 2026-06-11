import { useState } from "react";
import api from "../services/api";

function Contact() {

    const [form, setForm] = useState({

        name: "",
        email: "",
        phone: "",
        message: ""

    });

    const [loading, setLoading] =
        useState(false);

    const handleChange = (e) => {

        setForm({

            ...form,
            [e.target.name]:
                e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response =
                await api.post(
                    "/contact",
                    form
                );

            alert(
                response.data.message
            );

            setForm({

                name: "",
                email: "",
                phone: "",
                message: ""

            });

        } catch (error) {

            alert(
                "Error submitting form"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gray-100">

            {/* Hero */}

            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold">

                        📞 Contact Advonote

                    </h1>

                    <p className="mt-4 text-xl text-blue-100">

                        We'd love to hear from you.

                        Reach out anytime.

                    </p>

                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Contact Cards */}

                <div className="grid md:grid-cols-3 gap-6 mb-12">

                    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                        <div className="text-5xl mb-4">

                            📧

                        </div>

                        <h3 className="text-xl font-bold">

                            Email

                        </h3>

                        <p className="text-gray-500 mt-2">

                            support@advonote.com

                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                        <div className="text-5xl mb-4">

                            📱

                        </div>

                        <h3 className="text-xl font-bold">

                            Phone

                        </h3>

                        <p className="text-gray-500 mt-2">

                            +91 XXXXX XXXXX

                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                        <div className="text-5xl mb-4">

                            📍

                        </div>

                        <h3 className="text-xl font-bold">

                            Address

                        </h3>

                        <p className="text-gray-500 mt-2">

                            India

                        </p>

                    </div>

                </div>

                {/* Form */}

                <div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto">

                    <h2 className="text-3xl font-bold mb-8 text-center">

                        Send Us a Message

                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <div className="grid md:grid-cols-2 gap-6">

                            <input
                                type="text"
                                name="name"
                                placeholder="👤 Full Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border rounded-2xl p-4"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="✉️ Email Address"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border rounded-2xl p-4"
                                required
                            />

                        </div>

                        <input
                            type="text"
                            name="phone"
                            placeholder="📱 Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border rounded-2xl p-4"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="💬 Your Message"
                            value={form.message}
                            onChange={handleChange}
                            rows="6"
                            className="w-full border rounded-2xl p-4"
                            required
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-2xl text-white font-semibold transition ${
                                loading
                                    ? "bg-gray-400"
                                    : "bg-blue-600 hover:bg-blue-700"
                            }`}
                        >

                            {loading
                                ? "Sending..."
                                : "Send Message"}

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default Contact;