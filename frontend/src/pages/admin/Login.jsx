import { useState } from "react";
import api from "../../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {

        try {

            setLoading(true);

            const response = await api.post(
                "/auth/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "admin",
                JSON.stringify(
                    response.data.admin
                )
            );

            alert("Login Successful");

            window.location.href =
                "/admin/dashboard";

        } catch (error) {

            console.log(error);

            alert("Invalid Credentials");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

                {/* Left Side */}

                <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12">

                    <div>

                        <h1 className="text-5xl font-bold mb-6">

                            Advonote

                        </h1>

                        <p className="text-xl leading-relaxed text-blue-100">

                            Secure access to the administrative
                            control center of Advonote.

                        </p>

                        <div className="mt-10 space-y-5">

                            <div className="flex items-center gap-3">

                                <span className="text-2xl">
                                    🔐
                                </span>

                                <span>
                                    Secure Authentication
                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <span className="text-2xl">
                                    📊
                                </span>

                                <span>
                                    Dashboard Analytics
                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <span className="text-2xl">
                                    👥
                                </span>

                                <span>
                                    Lead Management
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div className="p-8 sm:p-12 flex flex-col justify-center">

                    <div className="text-center lg:text-left">

                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">

                            Admin Login

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Sign in to continue to the Admin Dashboard.

                        </p>

                    </div>

                    <div className="mt-8 space-y-5">

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">

                                Email Address

                            </label>

                            <input
                                type="email"
                                placeholder="admin@example.com"
                                value={email}
                                onChange={(e) =>
                                    setEmail(
                                        e.target.value
                                    )
                                }
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />

                        </div>

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">

                                Password

                            </label>

                            <div className="relative">

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-14 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                                >

                                    {showPassword
                                        ? "🙈"
                                        : "👁️"}

                                </button>

                            </div>

                        </div>

                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            className={`w-full py-3 rounded-xl font-semibold text-white transition ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700"
                            }`}
                        >

                            {loading
                                ? "Signing In..."
                                : "Login"}

                        </button>

                    </div>

                    <p className="mt-8 text-center text-sm text-gray-500">

                        © 2026 Advonote Admin Portal

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Login;