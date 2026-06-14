import { Mail, Download } from "lucide-react";
import logo from "../assets/advonote-logo.png";

function Footer() {
    return (
        <footer className="bg-[#2B1A12] text-white">

            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

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
                                <a href="#about" className="hover:text-[#F4C430]">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#features" className="hover:text-[#F4C430]">
                                    Features
                                </a>
                            </li>

                            <li>
                                <a href="#screenshots" className="hover:text-[#F4C430]">
                                    Screenshots
                                </a>
                            </li>

                            <li>
                                <a href="#faq" className="hover:text-[#F4C430]">
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
                                <a href="#" className="hover:text-[#F4C430]">
                                    Blog
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#F4C430]">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#F4C430]">
                                    Terms & Conditions
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
                                <span className="text-[#F4C430]">●</span>

                                <span>
                                    ECCURA TECHNOLOGIES PVT. LTD.
                                </span>
                            </div>

                            <div className="flex items-start gap-2">
                                <Mail
                                    size={16}
                                    className="text-[#F4C430] mt-0.5"
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

                        <button
                            className="
                                flex items-center gap-3
                                bg-black
                                px-5 py-3
                                rounded-xl
                                hover:bg-[#111]
                                transition
                            "
                        >
                            <Download size={20} />

                            <div className="text-left">
                                <p className="text-xs text-gray-400">
                                    GET IT ON
                                </p>

                                <p className="font-semibold">
                                    Google Play
                                </p>
                            </div>
                        </button>
                    </div>

                </div>

                {/* Bottom */}
                <div
                    className="
                        border-t border-white/10
                        mt-10
                        pt-6
                        text-center
                        text-sm
                        text-gray-400
                    "
                >
                    © {new Date().getFullYear()} Advonote. All Rights Reserved.
                </div>

            </div>

        </footer>
    );
}

export default Footer;