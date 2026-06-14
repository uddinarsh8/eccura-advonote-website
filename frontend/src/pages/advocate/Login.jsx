import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import logo from "../../assets/advonote-logo.png";

function Login() {
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendOTP = async () => {
        try {
            setLoading(true);

            await api.post("/advocates/send-otp", {
                mobile
            });

            alert("OTP Sent Successfully");
            setOtpSent(true);
        } catch (error) {
            alert(
                error?.response?.data?.message ||
                "Failed to send OTP"
            );
        } finally {
            setLoading(false);
        }
    };

    const verifyOTP = async () => {
        try {
            const response = await api.post(
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
                JSON.stringify(response.data.advocate)
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
        <div className="min-h-screen bg-[#F4C430] flex justify-center items-center px-4 py-10">

            <div className="w-full max-w-md">

                {/* Logo Section */}
                <div className="text-center mb-6">

                    <img
                        src={logo}
                        alt="Advonote Logo"
                        className="w-40 mx-auto"
                    />

                    <h1 className="text-5xl font-black text-black mt-2">
                        ADVONOTE
                    </h1>

                    <p className="text-gray-700 text-xl mt-1">
                        Lawyer's Case Diary
                    </p>

                </div>

                {/* Card */}
                <div className="bg-white rounded-[40px] px-8 py-10 shadow-xl">

                    <h2 className="text-5xl font-bold text-center text-black">
                        Login
                    </h2>

                    <p className="text-center text-gray-500 mt-3 text-xl">
                        Sign in to continue.
                    </p>

                    {/* Mobile Number */}
                    <div className="mt-10">

                        <label className="block text-gray-500 font-semibold mb-3 uppercase">
                            Mobile Number
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Your Mobile No."
                            value={mobile}
                            onChange={(e) =>
                                setMobile(e.target.value)
                            }
                            className="
                                w-full
                                bg-gray-100
                                rounded-2xl
                                px-6
                                py-5
                                text-xl
                                outline-none
                            "
                        />

                    </div>

                    {!otpSent ? (
                        <button
                            onClick={sendOTP}
                            disabled={loading}
                            className="
                                w-full
                                mt-10
                                bg-[#F4C430]
                                hover:bg-[#E8B923]
                                text-black
                                font-bold
                                py-5
                                rounded-2xl
                                text-2xl
                                transition
                            "
                        >
                            {loading
                                ? "Sending OTP..."
                                : "Login"}
                        </button>
                    ) : (
                        <>
                            <div className="mt-8">

                                <label className="block text-gray-500 font-semibold mb-3 uppercase">
                                    OTP
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) =>
                                        setOtp(e.target.value)
                                    }
                                    className="
                                        w-full
                                        bg-gray-100
                                        rounded-2xl
                                        px-6
                                        py-5
                                        text-xl
                                        outline-none
                                    "
                                />

                            </div>

                            <button
                                onClick={verifyOTP}
                                className="
                                    w-full
                                    mt-8
                                    bg-[#F4C430]
                                    hover:bg-[#E8B923]
                                    text-black
                                    font-bold
                                    py-5
                                    rounded-2xl
                                    text-2xl
                                    transition
                                "
                            >
                                Verify OTP
                            </button>
                        </>
                    )}

                    {/* Extra Buttons */}
                    {!otpSent && (
                        <div className="mt-8 space-y-5">

                            <Link
                                to="/admin/login"
                                className="
        block
        w-full
        bg-green-500
        hover:bg-green-600
        text-black
        text-center
        font-bold
        py-5
        rounded-2xl
        text-2xl
        transition
    "
                            >
                                Member Login
                            </Link>

                            <Link
                                to="/advocate/register"
                                className="
                                    block
                                    w-full
                                    bg-cyan-400
                                    hover:bg-cyan-500
                                    text-black
                                    text-center
                                    font-bold
                                    py-5
                                    rounded-2xl
                                    text-2xl
                                    transition
                                "
                            >
                                Register
                            </Link>

                            <Link
                                to="/demo/login"
                                className="
                                    block
                                    w-full
                                    bg-sky-400
                                    hover:bg-sky-500
                                    text-black
                                    text-center
                                    font-bold
                                    py-5
                                    rounded-2xl
                                    text-2xl
                                    transition
                                "
                            >
                                Demo Login
                            </Link>

                        </div>
                    )}

                    {/* Footer */}
                    <div className="text-center mt-12">

                        <p className="text-gray-500 text-lg">
                            Powered By
                        </p>

                        <h3 className="font-bold text-2xl mt-2">
                            Eccura Technologies Pvt. Ltd.
                        </h3>

                        <div className="mt-6 flex justify-center flex-wrap gap-4 text-blue-600 font-medium">

                            <Link to="/privacy-policy">
                                Privacy Policy
                            </Link>

                            <span>|</span>

                            <Link to="/terms">
                                Terms & Conditions
                            </Link>

                            <span>|</span>

                            <Link to="/refund-policy">
                                Return & Refund
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;