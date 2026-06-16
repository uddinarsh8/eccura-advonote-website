import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Calendar,
    BookOpen,
    Menu,
    X
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
        { name: "Contact", path: "#contact-demo" }
    ];

    return (
        <nav
            className="
                sticky
                top-0
                z-50
                bg-white
                border-b
                border-[#E5E7EB]
                shadow-sm
            "
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        h-20
                        lg:h-24
                        relative
                    "
                >

                    {/* Logo */}

                    <Link
                        to="/"
                        className="flex items-center gap-3 shrink-0"
                    >
                        <img
                            src={logo}
                            alt="Advonote Logo"
                            className="
                                w-14
                                h-14
                                lg:w-16
                                lg:h-16
                                object-contain
                            "
                        />

                        <div className="leading-tight">
                            <h1
                                className="
                                    text-xl
                                    lg:text-2xl
                                    font-bold
                                    text-[#2D1B14]
                                "
                            >
                                ADVONOTE
                            </h1>

                            <p
                                className="
                                    text-[10px]
                                    lg:text-[11px]
                                    text-[#9A7B4F]
                                "
                            >
                                Lawyer's Best Diary
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}

                    <div
                        className="
                            hidden
                            xl:flex
                            items-center
                            gap-6
                        "
                    >
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
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
                        ))}
                    </div>

                    {/* Desktop Buttons */}

                    <div
                        className="
                            hidden
                            lg:flex
                            items-center
                            gap-3
                        "
                    >

                        {/* Tutorial Button */}

                        <Link
                            to="/tutorials"
                            className="
                                flex
                                items-center
                                gap-2
                                border
                                border-[#D8CBB6]
                                text-[#4A2E1A]
                                px-5
                                py-3
                                rounded-xl
                                font-semibold
                                hover:bg-[#FFF8EA]
                                transition
                            "
                        >
                            <BookOpen size={18} />
                            Tutorial
                        </Link>

                        {/* Request Demo Button */}

                        <a
                            href="#contact-demo"
                            className="
                                flex
                                items-center
                                gap-2
                                bg-[#F4C430]
                                text-[#2D1B14]
                                px-5
                                py-3
                                rounded-xl
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
                        className="
                            lg:hidden
                            p-2
                            rounded-lg
                            hover:bg-gray-100
                            transition
                        "
                    >
                        {menuOpen ? (
                            <X
                                size={30}
                                className="text-[#2D1B14]"
                            />
                        ) : (
                            <Menu
                                size={30}
                                className="text-[#2D1B14]"
                            />
                        )}
                    </button>

                    {/* Mobile Menu */}

                    <div
                        className={`
                            lg:hidden
                            absolute
                            top-full
                            left-0
                            w-full
                            bg-white
                            shadow-xl
                            border-t
                            border-[#E5E7EB]
                            overflow-hidden
                            transition-all
                            duration-300
                            ${
                                menuOpen
                                    ? "max-h-[700px] opacity-100"
                                    : "max-h-0 opacity-0"
                            }
                        `}
                    >
                        <div
                            className="
                                px-6
                                py-5
                                space-y-2
                            "
                        >
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="
                                        block
                                        py-4
                                        border-b
                                        border-gray-100
                                        text-[#2D1B14]
                                        font-medium
                                        hover:text-[#F4C430]
                                        transition
                                    "
                                >
                                    {item.name}
                                </a>
                            ))}

                            <div
                                className="
                                    pt-5
                                    space-y-3
                                "
                            >

                                {/* Tutorial Button */}

                                <Link
                                    to="/tutorials"
                                    onClick={() => setMenuOpen(false)}
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        w-full
                                        border
                                        border-[#D8CBB6]
                                        text-[#4A2E1A]
                                        py-4
                                        rounded-xl
                                        font-semibold
                                    "
                                >
                                    <BookOpen size={18} />
                                    Tutorial
                                </Link>

                                {/* Request Demo Button */}

                                <a
                                    href="#contact-demo"
                                    onClick={() => setMenuOpen(false)}
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        w-full
                                        bg-[#F4C430]
                                        text-[#2D1B14]
                                        py-4
                                        rounded-xl
                                        font-semibold
                                        hover:bg-[#E8B923]
                                        transition
                                    "
                                >
                                    Request Demo

                                    <Calendar size={18} />
                                </a>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;