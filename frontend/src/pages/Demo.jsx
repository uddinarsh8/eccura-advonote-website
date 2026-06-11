import { useState } from "react";
import api from "../services/api";

function Demo() {

    const [form, setForm] = useState({

        name: "",
        email: "",
        phone: "",
        company: "",
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
                    "/demo",
                    form
                );

            alert(
                response.data.message
            );

            setForm({

                name: "",
                email: "",
                phone: "",
                company: "",
                message: ""

            });

        } catch (error) {

            console.log(error);

            alert(
                "Error submitting demo request"
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

                        🎥 Book a Personalized Demo

                    </h1>

                    <p className="text-xl mt-4 text-blue-100">

                        Discover how Advonote can transform your legal practice.

                    </p>

                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Benefits */}

                <div className="grid md:grid-cols-3 gap-6 mb-12">

                    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                        <div className="text-5xl mb-4">

                            ⚖️

                        </div>

                        <h3 className="text-xl font-bold">

                            Case Management

                        </h3>

                        <p className="text-gray-500 mt-2">

                            Organize and manage hearings efficiently.

                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                        <div className="text-5xl mb-4">

                            👥

                        </div>

                        <h3 className="text-xl font-bold">

                            Client Management

                        </h3>

                        <p className="text-gray-500 mt-2">

                            Keep client information and communication streamlined.

                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

                        <div className="text-5xl mb-4">

                            📅

                        </div>

                        <h3 className="text-xl font-bold">

                            Smart Scheduling

                        </h3>

                        <p className="text-gray-500 mt-2">

                            Never miss an important hearing.

                        </p>

                    </div>

                </div>

                {/* Demo Form */}

                <div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto">

                    <h2 className="text-3xl font-bold text-center mb-8">

                        Request Your Demo

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

                        <div className="grid md:grid-cols-2 gap-6">

                            <input
                                type="text"
                                name="phone"
                                placeholder="📱 Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full border rounded-2xl p-4"
                                required
                            />

                            <input
                                type="text"
                                name="company"
                                placeholder="🏢 Law Firm / Company"
                                value={form.company}
                                onChange={handleChange}
                                className="w-full border rounded-2xl p-4"
                            />

                        </div>

                        <textarea
                            name="message"
                            placeholder="💬 Tell us about your requirements"
                            value={form.message}
                            onChange={handleChange}
                            rows="5"
                            className="w-full border rounded-2xl p-4"
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
                                ? "Submitting..."
                                : "🚀 Request Demo"}

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default Demo;