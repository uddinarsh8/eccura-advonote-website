import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className="bg-gray-900 text-white pt-14 sm:pt-16 pb-8">

            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

                    {/* Company */}

                    <div className="text-center md:text-left">

                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">

                            Advonote

                        </h2>

                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">

                            Smart Legal Practice Management Platform
                            designed for modern advocates to manage
                            cases, clients, hearings, tasks and
                            notifications effortlessly.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div className="text-center md:text-left">

                        <h3 className="text-lg sm:text-xl font-semibold mb-4">

                            Quick Links

                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/demo"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    Request Demo
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/advocate/login"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    Advocate Login
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div className="text-center md:text-left">

                        <h3 className="text-lg sm:text-xl font-semibold mb-4">

                            Contact

                        </h3>

                        <div className="space-y-3 text-gray-400 text-sm sm:text-base">

                            <p>
                                📧 support@advonote.com
                            </p>

                            <p>
                                📞 +91 XXXXX XXXXX
                            </p>

                            <p>
                                🇮🇳 India
                            </p>

                        </div>

                        {/* Socials */}

                        <div className="flex justify-center md:justify-start gap-4 mt-6 text-2xl">

                            <span className="cursor-pointer hover:scale-110 transition">
                                🌐
                            </span>

                            <span className="cursor-pointer hover:scale-110 transition">
                                💼
                            </span>

                            <span className="cursor-pointer hover:scale-110 transition">
                                📷
                            </span>

                            <span className="cursor-pointer hover:scale-110 transition">
                                🐦
                            </span>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm sm:text-base">

                    <p>

                        © 2026 Advonote. All Rights Reserved.

                    </p>

                    <p className="mt-2">

                        Made with ❤️ in India for Modern Advocates.

                    </p>

                </div>

            </div>

        </footer>

    );

}

export default Footer;