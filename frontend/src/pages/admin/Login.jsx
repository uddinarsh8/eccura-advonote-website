import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Eye,
    EyeOff,
    ShieldCheck,
    BarChart3,
    Users
} from "lucide-react";

import api from "../../services/api";
import logo from "../../assets/advonote-logo.png";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] =
        useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const [loading, setLoading] =
        useState(false);

    const handleLogin = async () => {

        if (
            !email.trim() ||
            !password.trim()
        ) {

            alert(
                "Please enter email and password."
            );

            return;

        }

        try {

            setLoading(true);

            const response =
                await api.post(
                    "/auth/login",
                    {
                        email,
                        password
                    }
                );

            localStorage.setItem(
                "adminToken",
                response.data.token
            );

            localStorage.setItem(
                "admin",
                JSON.stringify(
                    response.data.admin
                )
            );

            alert(
                "Login Successful"
            );

            navigate(
                "/admin/dashboard"
            );

        } catch (error) {

            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Invalid Credentials"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="
            min-h-screen
            bg-[#FFFDF7]
            flex
            items-center
            justify-center
            px-4
            py-8
        ">

            <div className="
                w-full
                max-w-6xl
                bg-white
                rounded-[36px]
                overflow-hidden
                shadow-2xl
                grid
                lg:grid-cols-2
            ">

                {/* Left Side */}

                <div className="
                    hidden
                    lg:flex
                    flex-col
                    justify-between
                    bg-[#F4C430]
                    p-12
                ">

                    <div>

                        <img
                            src={logo}
                            alt="Advonote"
                            className="
                                w-24
                                h-24
                                object-contain
                            "
                        />

                        <h1 className="
                            mt-6
                            text-5xl
                            font-bold
                            text-[#2D1B14]
                        ">

                            Admin Portal

                        </h1>

                        <p className="
                            mt-4
                            text-lg
                            leading-relaxed
                            text-[#5B4636]
                        ">

                            Secure access to
                            Advonote administration
                            tools and analytics.

                        </p>

                    </div>

                    <div className="space-y-6">

                        <div className="
                            flex
                            items-center
                            gap-4
                        ">

                            <div className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-white
                                flex
                                items-center
                                justify-center
                            ">

                                <ShieldCheck
                                    size={28}
                                    className="
                                        text-[#2D1B14]
                                    "
                                />

                            </div>

                            <span className="
                                text-[#2D1B14]
                                font-semibold
                                text-lg
                            ">

                                Secure Authentication

                            </span>

                        </div>

                        <div className="
                            flex
                            items-center
                            gap-4
                        ">

                            <div className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-white
                                flex
                                items-center
                                justify-center
                            ">

                                <BarChart3
                                    size={28}
                                    className="
                                        text-[#2D1B14]
                                    "
                                />

                            </div>

                            <span className="
                                text-[#2D1B14]
                                font-semibold
                                text-lg
                            ">

                                Dashboard Analytics

                            </span>

                        </div>

                        <div className="
                            flex
                            items-center
                            gap-4
                        ">

                            <div className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-white
                                flex
                                items-center
                                justify-center
                            ">

                                <Users
                                    size={28}
                                    className="
                                        text-[#2D1B14]
                                    "
                                />

                            </div>

                            <span className="
                                text-[#2D1B14]
                                font-semibold
                                text-lg
                            ">

                                Lead Management

                            </span>

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div className="
                    p-8
                    sm:p-10
                    lg:p-14
                    flex
                    flex-col
                    justify-center
                ">

                    {/* Mobile Logo */}

                    <div className="
                        lg:hidden
                        text-center
                        mb-8
                    ">

                        <img
                            src={logo}
                            alt="Advonote"
                            className="
                                w-20
                                h-20
                                mx-auto
                            "
                        />

                    </div>

                    <div>

                        <h2 className="
                            text-3xl
                            sm:text-4xl
                            font-bold
                            text-[#2D1B14]
                        ">

                            Welcome Back

                        </h2>

                        <p className="
                            mt-2
                            text-gray-500
                        ">

                            Sign in to continue to
                            the Admin Dashboard.

                        </p>

                    </div>

                    <div className="
                        mt-8
                        space-y-6
                    ">

                        <div>

                            <label className="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                mb-2
                            ">

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
                                className="
                                    w-full
                                    border
                                    border-gray-200
                                    rounded-2xl
                                    px-5
                                    py-4
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-[#F4C430]
                                "
                            />

                        </div>

                        <div>

                            <label className="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                mb-2
                            ">

                                Password

                            </label>

                            <div className="
                                relative
                            ">

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
                                    onKeyDown={(e) => {

                                        if (
                                            e.key === "Enter"
                                        ) {

                                            handleLogin();

                                        }

                                    }}
                                    className="
                                        w-full
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                        pr-14
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#F4C430]
                                    "
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                    className="
                                        absolute
                                        right-5
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-500
                                    "
                                >

                                    {

                                        showPassword
                                            ? (
                                                <EyeOff
                                                    size={22}
                                                />
                                            )
                                            : (
                                                <Eye
                                                    size={22}
                                                />
                                            )

                                    }

                                </button>

                            </div>

                        </div>

                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            className={`
                                w-full
                                py-4
                                rounded-2xl
                                font-bold
                                text-lg
                                transition
                                ${
                                    loading
                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        : "bg-[#F4C430] text-[#2D1B14] hover:bg-[#E5B521]"
                                }
                            `}
                        >

                            {

                                loading
                                    ? "Signing In..."
                                    : "Login"

                            }

                        </button>

                    </div>

                    <p className="
                        mt-10
                        text-center
                        text-sm
                        text-gray-500
                    ">

                        © {new Date().getFullYear()}
                        {" "}
                        Advonote Admin Portal

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Login;