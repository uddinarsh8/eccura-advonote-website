import { Link } from "react-router-dom";

function Hero() {

    return (

        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-14 sm:py-20 lg:py-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                    {/* Left Side */}

                    <div>

                        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-xs sm:text-sm font-semibold">

                            ⚖️ Trusted Legal Practice Management Platform

                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 leading-tight text-gray-900">

                            Transform Your

                            <span className="text-blue-700">

                                {" "}Legal Practice

                            </span>

                            <br />

                            With Advonote

                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-6 leading-relaxed">

                            Manage cases, clients, hearings,
                            notifications, and daily tasks from one
                            secure platform designed specifically
                            for modern advocates.

                        </p>

                        {/* Buttons */}

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">

                            <Link
                                to="/demo"
                                className="bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg text-center"
                            >
                                Book Demo
                            </Link>

                            <Link
                                to="/advocate/login"
                                className="border-2 border-blue-600 text-blue-600 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-center"
                            >
                                Advocate Login
                            </Link>

                        </div>

                        {/* Statistics */}

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">

                            <div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-blue-700">

                                    500+

                                </h3>

                                <p className="text-sm sm:text-base text-gray-600">

                                    Cases Managed

                                </p>

                            </div>

                            <div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-blue-700">

                                    100+

                                </h3>

                                <p className="text-sm sm:text-base text-gray-600">

                                    Advocates

                                </p>

                            </div>

                            <div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-blue-700">

                                    99%

                                </h3>

                                <p className="text-sm sm:text-base text-gray-600">

                                    Satisfaction

                                </p>

                            </div>

                            <div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-blue-700">

                                    24/7

                                </h3>

                                <p className="text-sm sm:text-base text-gray-600">

                                    Secure Access

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="relative">

                        <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8">

                            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">

                                Dashboard Preview

                            </h2>

                            <div className="space-y-4">

                                <div className="bg-blue-50 rounded-xl p-4 flex justify-between">

                                    <span className="text-sm sm:text-base">

                                        Today's Hearings

                                    </span>

                                    <span className="font-bold text-blue-700">

                                        5

                                    </span>

                                </div>

                                <div className="bg-green-50 rounded-xl p-4 flex justify-between">

                                    <span className="text-sm sm:text-base">

                                        Active Clients

                                    </span>

                                    <span className="font-bold text-green-700">

                                        42

                                    </span>

                                </div>

                                <div className="bg-yellow-50 rounded-xl p-4 flex justify-between">

                                    <span className="text-sm sm:text-base">

                                        Pending Tasks

                                    </span>

                                    <span className="font-bold text-yellow-700">

                                        7

                                    </span>

                                </div>

                                <div className="bg-red-50 rounded-xl p-4 flex justify-between">

                                    <span className="text-sm sm:text-base">

                                        Notifications

                                    </span>

                                    <span className="font-bold text-red-700">

                                        3

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;