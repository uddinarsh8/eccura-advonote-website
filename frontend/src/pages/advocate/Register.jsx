import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Register() {

    const [formData, setFormData] =
        useState({

            name: "",
            mobile: "",
            email: "",
            state: "",
            city: ""

        });

    const [loading, setLoading] =
        useState(false);

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

            setLoading(true);

            await api.post(
                "/advocates/register",
                formData
            );

            alert(
                "Registration Successful"
            );

            window.location.href =
                "/advocate/login";

        } catch (error) {

            alert(

                error?.response?.data?.message ||

                "Registration Failed"

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center p-6">

            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">

                <div className="text-center mb-8">

                    <div className="text-6xl">

                        ⚖️

                    </div>

                    <h1 className="text-4xl font-bold text-blue-600 mt-3">

                        Create Account

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Join Advonote today

                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="👤 Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-2xl p-4"
                        required
                    />

                    <input
                        type="text"
                        name="mobile"
                        placeholder="📱 Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full border rounded-2xl p-4"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="✉️ Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-2xl p-4"
                        required
                    />

                    <input
                        type="text"
                        name="state"
                        placeholder="🏛️ State"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full border rounded-2xl p-4"
                        required
                    />

                    <input
                        type="text"
                        name="city"
                        placeholder="🏙️ City"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border rounded-2xl p-4"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 rounded-2xl text-white font-semibold ${
                            loading
                                ? "bg-gray-400"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >

                        {loading
                            ? "Creating Account..."
                            : "Register"}

                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">

                    Already have an account?

                    <Link
                        to="/advocate/login"
                        className="text-blue-600 font-semibold ml-1 hover:underline"
                    >

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;