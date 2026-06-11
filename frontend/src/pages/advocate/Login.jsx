import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Login() {

    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendOTP = async () => {

        try {

            setLoading(true);

            await api.post(
                "/advocates/send-otp",
                { mobile }
            );

            alert("OTP Sent");

            setOtpSent(true);

        } catch (error) {

            alert("Failed to send OTP");

        } finally {

            setLoading(false);

        }

    };

    // Demo Login
    const verifyOTP = async () => {

        try {

            const response =
                await api.post(
                    "/advocates/verify-otp",
                    {
                        mobile,
                        otp
                    }
                );

            localStorage.setItem(
                "advocateToken",
                response.data.token
            );

            localStorage.setItem(
                "advocate",
                JSON.stringify(
                    response.data.advocate
                )
            );

            window.location.href =
                "/advocate/dashboard";

        } catch (error) {

            alert(
                error?.response?.data?.message ||
                "Invalid OTP"
            );

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center p-6">

            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">

                {/* Logo */}

                <div className="text-center mb-8">

                    <div className="text-6xl mb-4">

                        ⚖️

                    </div>

                    <h1 className="text-4xl font-bold text-blue-600">

                        ADVONOTE

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Legal Practice Simplified

                    </p>

                </div>

                {/* Login */}

                <div>

                    <input
                        type="text"
                        placeholder="📱 Mobile Number"
                        value={mobile}
                        onChange={(e) =>
                            setMobile(
                                e.target.value
                            )
                        }
                        className="w-full border rounded-2xl p-4 mb-4 focus:ring-2 focus:ring-blue-500"
                    />

                    {!otpSent ? (

                        <button
                            onClick={sendOTP}
                            disabled={loading}
                            className={`w-full py-4 rounded-2xl text-white font-semibold transition ${loading
                                    ? "bg-gray-400"
                                    : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >

                            {loading
                                ? "Sending OTP..."
                                : "Send OTP"}

                        </button>

                    ) : (

                        <>

                            <input
                                type="text"
                                placeholder="🔐 Enter OTP"
                                value={otp}
                                onChange={(e) =>
                                    setOtp(
                                        e.target.value
                                    )
                                }
                                className="w-full border rounded-2xl p-4 mb-4 mt-4 focus:ring-2 focus:ring-green-500"
                            />

                            <button
                                onClick={verifyOTP}
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold"
                            >

                                Verify OTP

                            </button>

                        </>

                    )}

                </div>

                {/* Register */}

                <p className="mt-6 text-center text-gray-600">

                    Don't have an account?

                    <Link
                        to="/advocate/register"
                        className="text-blue-600 font-semibold ml-1 hover:underline"
                    >

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;