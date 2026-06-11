import { useState } from "react";
import api from "../../services/api";

function AddClient() {

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({
            name: "",
            mobile: "",
            email: "",
            address: ""
        });

    let advocate = {};

    try {

        const storedAdvocate =
            localStorage.getItem("advocate");

        if (
            storedAdvocate &&
            storedAdvocate !== "undefined"
        ) {

            advocate =
                JSON.parse(storedAdvocate);

        }

    } catch (error) {

        console.log(error);

    }

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]:
                e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (!advocate.id) {

                alert(
                    "Please login again."
                );

                return;

            }

            setLoading(true);

            await api.post(
                "/clients",
                {
                    ...formData,
                    advocateId:
                        advocate.id
                }
            );

            alert(
                "Client Added Successfully"
            );

            window.location.href =
                "/advocate/clients";

        } catch (error) {

            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to add client"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gray-100 p-6">

            <div className="max-w-2xl mx-auto">

                {/* Header */}

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-lg mb-8">

                    <h1 className="text-4xl font-bold">

                        👥 Add New Client

                    </h1>

                    <p className="mt-2 opacity-90">

                        Build and manage your client relationships efficiently.

                    </p>

                </div>

                {/* Client Preview */}

                <div className="bg-white rounded-3xl shadow-lg p-6 mb-8 flex items-center">

                    <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mr-6">

                        {formData.name
                            ? formData.name
                                .charAt(0)
                                .toUpperCase()
                            : "?"}

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold">

                            {formData.name ||
                                "Client Name"}

                        </h2>

                        <p className="text-gray-500">

                            {formData.email ||
                                "client@example.com"}

                        </p>

                    </div>

                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl shadow-lg p-8"
                >

                    <div className="space-y-6">

                        <div>

                            <label className="block font-semibold mb-2">

                                Full Name

                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter client name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border rounded-2xl p-4 focus:ring-2 focus:ring-blue-500"
                                required
                            />

                        </div>

                        <div>

                            <label className="block font-semibold mb-2">

                                Mobile Number

                            </label>

                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Enter mobile number"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full border rounded-2xl p-4 focus:ring-2 focus:ring-blue-500"
                                required
                            />

                        </div>

                        <div>

                            <label className="block font-semibold mb-2">

                                Email Address

                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded-2xl p-4 focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                        <div>

                            <label className="block font-semibold mb-2">

                                Address

                            </label>

                            <textarea
                                name="address"
                                placeholder="Enter address"
                                value={formData.address}
                                onChange={handleChange}
                                rows="4"
                                className="w-full border rounded-2xl p-4 focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-2xl font-semibold text-white transition ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700"
                            }`}
                        >

                            {loading
                                ? "Saving Client..."
                                : "💾 Save Client"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddClient;