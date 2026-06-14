import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        state: "",
        city: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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

            alert("Registration Successful");

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
        <div className="min-h-screen bg-[#F4C430]">

            {/* Header */}
            <div className="pt-16 pb-10 text-center">

                <h1 className="text-6xl font-black text-black">
                    SIGN UP
                </h1>

                <p className="text-2xl text-gray-700 mt-4">
                    Create your account
                </p>

            </div>

            {/* White Card */}
            <div
                className="
                    bg-white
                    rounded-t-[50px]
                    min-h-[75vh]
                    px-8
                    py-12
                    shadow-xl
                "
            >

                <div className="max-w-md mx-auto">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* Full Name */}
                        <div>

                            <label className="block text-gray-500 font-semibold text-sm uppercase mb-3">
                                FULL NAME
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="
                                    w-full
                                    bg-gray-100
                                    rounded-3xl
                                    px-7
                                    py-5
                                    text-xl
                                    outline-none
                                "
                                required
                            />

                        </div>

                        {/* Mobile */}
                        <div>

                            <label className="block text-gray-500 font-semibold text-sm uppercase mb-3">
                                MOBILE NUMBER
                            </label>

                            <input
                                type="text"
                                name="mobile"
                                placeholder="Enter your number"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="
                                    w-full
                                    bg-gray-100
                                    rounded-3xl
                                    px-7
                                    py-5
                                    text-xl
                                    outline-none
                                "
                                required
                            />

                        </div>

                        {/* Email */}
                        <div>

                            <label className="block text-gray-500 font-semibold text-sm uppercase mb-3">
                                EMAIL ADDRESS
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="
                                    w-full
                                    bg-gray-100
                                    rounded-3xl
                                    px-7
                                    py-5
                                    text-xl
                                    outline-none
                                "
                                required
                            />

                        </div>

                        {/* State */}
                        <div>

                            <label className="block text-black text-2xl mb-3">
                                State
                            </label>

                            <input
                                type="text"
                                name="state"
                                placeholder="Select State"
                                value={formData.state}
                                onChange={handleChange}
                                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-3xl
                                    px-7
                                    py-5
                                    text-xl
                                    outline-none
                                "
                                required
                            />

                        </div>

                        {/* City */}
                        <div>

                            <label className="block text-black text-2xl mb-3">
                                City
                            </label>

                            <input
                                type="text"
                                name="city"
                                placeholder="Select City"
                                value={formData.city}
                                onChange={handleChange}
                                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-3xl
                                    px-7
                                    py-5
                                    text-xl
                                    outline-none
                                "
                                required
                            />

                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                w-full
                                bg-[#F4C430]
                                hover:bg-[#E8B923]
                                text-black
                                font-bold
                                py-5
                                rounded-3xl
                                text-2xl
                                transition
                            "
                        >
                            {loading
                                ? "Submitting..."
                                : "SUBMIT"}
                        </button>

                    </form>

                    {/* Login */}
                    <div className="text-center mt-12">

                        <p className="text-gray-500 text-xl">

                            Already have an account?

                            <Link
                                to="/advocate/login"
                                className="
                                    text-black
                                    font-bold
                                    ml-2
                                "
                            >
                                Login
                            </Link>

                        </p>

                    </div>

                    {/* Footer */}
                    <div className="text-center mt-12">

                        <p className="text-2xl font-medium">
                            Powered By
                        </p>

                        <h2 className="text-4xl font-black mt-3">
                            Eccura Technologies Pvt. Ltd.
                        </h2>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;