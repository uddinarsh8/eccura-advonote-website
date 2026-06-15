import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/advonote-logo.png";
import googlePlay from "../assets/google-play.png";

function Footer() {

    const playStoreLink =
        "https://play.google.com/store/apps/details?id=YOUR_APP_PACKAGE";

    return (

        <footer className="bg-[#2B1A12] text-white">

            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Logo */}

                    <div>

                        <div className="flex items-center gap-3 mb-4">

                            <img
                                src={logo}
                                alt="Advonote Logo"
                                className="w-14 h-14 object-contain"
                            />

                            <div>

                                <h3 className="text-2xl font-bold">

                                    ADVONOTE

                                </h3>

                                <p className="text-sm text-[#D4B483]">

                                    Lawyer's Best Diary

                                </p>

                            </div>

                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">

                            The complete legal practice management
                            solution designed for advocates and law firms.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h4 className="font-semibold text-lg mb-4">

                            Quick Links

                        </h4>

                        <ul className="space-y-3 text-gray-300 text-sm">

                            <li>

                                <a
                                    href="#about"
                                    className="hover:text-[#F4C430] transition"
                                >

                                    About

                                </a>

                            </li>

                            <li>

                                <a
                                    href="#features"
                                    className="hover:text-[#F4C430] transition"
                                >

                                    Features

                                </a>

                            </li>

                            <li>

                                <a
                                    href="#screenshots"
                                    className="hover:text-[#F4C430] transition"
                                >

                                    Screenshots

                                </a>

                            </li>

                            <li>

                                <a
                                    href="#faq"
                                    className="hover:text-[#F4C430] transition"
                                >

                                    FAQ

                                </a>

                            </li>

                        </ul>

                    </div>

                    {/* Resources */}

                    <div>

                        <h4 className="font-semibold text-lg mb-4">

                            Resources

                        </h4>

                        <ul className="space-y-3 text-gray-300 text-sm">

                            <li>

                                <Link
                                    to="/privacy-policy"
                                    className="hover:text-[#F4C430] transition"
                                >

                                    Privacy Policy

                                </Link>

                            </li>

                            <li>

                                <Link
                                    to="/terms-and-conditions"
                                    className="hover:text-[#F4C430] transition"
                                >

                                    Terms & Conditions

                                </Link>

                            </li>

                            <li>

                                <a
                                    href="#"
                                    className="hover:text-[#F4C430] transition"
                                >

                                    Blog

                                </a>

                            </li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h4 className="font-semibold text-lg mb-4">

                            Contact Us

                        </h4>

                        <div className="space-y-4 text-sm text-gray-300">

                            <div className="flex items-start gap-2">

                                <span className="text-[#F4C430]">

                                    ●

                                </span>

                                <span>

                                    ECCURA TECHNOLOGIES PVT. LTD.

                                </span>

                            </div>

                            <div className="flex items-start gap-2">

                                <Mail
                                    size={16}
                                    className="text-[#F4C430] mt-0.5 shrink-0"
                                />

                                <span>

                                    support@eccuratech.com

                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Download */}

                    <div>

                        <h4 className="font-semibold text-lg mb-4">

                            Download Advonote

                        </h4>

                        <a
                            href="https://play.google.com/store/apps/details?id=com.aamni.AdvoNote&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >

                            <img
                                src={googlePlay}
                                alt="Get it on Google Play"
                                className="
                                    h-12
                                    sm:h-14
                                    w-auto
                                    hover:scale-105
                                    transition-transform
                                    duration-300
                                "
                            />

                        </a>

                    </div>

                </div>

                {/* Bottom */}

                <div
                    className="
                        border-t
                        border-white/10
                        mt-10
                        pt-6
                        text-center
                        text-sm
                        text-gray-400
                    "
                >

                    © {new Date().getFullYear()} Advonote.
                    All Rights Reserved.

                </div>

            </div>

        </footer>

    );

}

export default Footer;