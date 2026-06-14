import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Calendar,
    LogIn
} from "lucide-react";

import logo from "../assets/advonote-logo.png";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "#hero" },
        { name: "About", path: "#AboutEccura" },
        { name: "Features", path: "#features" },
        { name: "Screenshots", path: "#screenshots" },
        { name: "How It Works", path: "#how-it-works" },
        { name: "Benefits", path: "#benefits" },
        { name: "FAQ", path: "#faq" },
        { name: "Contact", path: "#contact-demo" },
    ];

    return (

        <nav className="bg-white sticky top-0 z-50 border-b border-[#E5E7EB] shadow-sm">

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between h-24">

                    {/* Logo */}

                    <Link
                        to="/"
                        className="flex items-center gap-2"
                    >

                        <img
                            src={logo}
                            alt="Advonote Logo"
                            className="w-25 h-25 object-contain"
                        />

                        <div className="leading-tight">

                            <h1 className="text-2xl font-bold text-[#2D1B14]">
                                ADVONOTE
                            </h1>

                            <p className="text-[11px] text-[#9A7B4F] -mt-1">
                                Lawyer's Best Diary
                            </p>

                        </div>

                    </Link>

                    {/* Desktop Menu */}

                    <div className="hidden lg:flex items-center gap-8">

                        {navLinks.map((item, index) => (

                            item.path.startsWith("#") ? (

                                <a
                                    key={index}
                                    href={`/${item.path}`}
                                    className="
                                        text-sm
                                        font-medium
                                        text-[#6B7280]
                                        hover:text-[#2D1B14]
                                        transition
                                    "
                                >

                                    {item.name}

                                </a>

                            ) : (

                                <Link
                                    key={index}
                                    to={item.path}
                                    className="
                                        text-sm
                                        font-medium
                                        text-[#2D1B14]
                                        transition
                                    "
                                >

                                    {item.name}

                                </Link>

                            )

                        ))}

                    </div>

                    {/* Buttons */}

                    <div className="hidden lg:flex items-center gap-3">

                        <Link
                            to="/advocate/login"
                            className="
                                flex items-center gap-2
                                border border-[#D8CBB6]
                                text-[#4A2E1A]
                                px-5 py-3
                                rounded-lg
                                font-semibold
                                hover:bg-[#FFF8EA]
                                transition
                            "
                        >

                            <LogIn size={18} />

                            Login

                        </Link>

                        <a
                            href="/#contact-demo"
                            className="
                                flex items-center gap-2
                                bg-[#F4C430]
                                text-[#2D1B14]
                                px-5 py-3
                                rounded-lg
                                font-semibold
                                shadow-sm
                                hover:bg-[#E8B923]
                                transition
                            "
                        >

                            Request Demo

                            <Calendar size={18} />

                        </a>

                    </div>

                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-3xl text-[#2D1B14]"
                    >

                        {menuOpen ? "✕" : "☰"}

                    </button>

                </div>

                {/* Mobile Menu */}

                {menuOpen && (

                    <div className="lg:hidden pb-6 pt-4 space-y-4 border-t border-[#E5E7EB]">

                        {navLinks.map((item, index) => (

                            item.path.startsWith("#") ? (

                                <a
                                    key={index}
                                    href={`/${item.path}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="
                                        block
                                        text-[#6B7280]
                                        hover:text-[#2D1B14]
                                        font-medium
                                    "
                                >

                                    {item.name}

                                </a>

                            ) : (

                                <Link
                                    key={index}
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="
                                        block
                                        text-[#6B7280]
                                        hover:text-[#2D1B14]
                                        font-medium
                                    "
                                >

                                    {item.name}

                                </Link>

                            )

                        ))}

                        <Link
                            to="/advocate/login"
                            onClick={() => setMenuOpen(false)}
                            className="
                                inline-flex
                                items-center gap-2
                                border border-[#D8CBB6]
                                px-5 py-3
                                rounded-lg
                                font-semibold
                                text-[#4A2E1A]
                            "
                        >

                            <LogIn size={18} />

                            Login

                        </Link>

                        <a
                            href="/#contact-demo"
                            onClick={() => setMenuOpen(false)}
                            className="
                                inline-flex
                                items-center gap-2
                                bg-[#F4C430]
                                px-5 py-3
                                rounded-lg
                                font-semibold
                                text-[#2D1B14]
                            "
                        >

                            Request Demo

                            <Calendar size={18} />

                        </a>

                    </div>

                )}

            </div>

        </nav>

    );

}

export default Navbar;