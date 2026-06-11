import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] =
        useState(false);

    return (

        <nav className="bg-white shadow-md sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

                <div className="flex justify-between items-center">

                    {/* Logo */}

                    <Link
                        to="/"
                        className="text-2xl sm:text-3xl font-bold text-blue-700"
                    >
                        Advonote
                    </Link>

                    {/* Desktop Menu */}

                    <div className="hidden md:flex items-center gap-6">

                        <Link
                            to="/"
                            className="text-gray-700 hover:text-blue-600 font-medium transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-blue-600 font-medium transition"
                        >
                            Contact
                        </Link>

                        <Link
                            to="/advocate/login"
                            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
                        >
                            Login
                        </Link>


                        <Link
                            to="/demo"
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            Request Demo
                        </Link>
                        <Link
                            to="/admin/login"
                            className="text-gray-700 hover:text-blue-600 font-medium transition"
                        >
                            Admin Login
                        </Link>

                    </div>

                    {/* Mobile Hamburger */}

                    <button
                        className="md:hidden text-3xl"
                        onClick={() =>
                            setMenuOpen(
                                !menuOpen
                            )
                        }
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                </div>

                {/* Mobile Menu */}

                {menuOpen && (

                    <div className="md:hidden mt-4 flex flex-col gap-3 border-t pt-4">

                        <Link
                            to="/"
                            onClick={() =>
                                setMenuOpen(false)
                            }
                            className="text-gray-700 hover:text-blue-600"
                        >
                            Home
                        </Link>

                        <Link
                            to="/contact"
                            onClick={() =>
                                setMenuOpen(false)
                            }
                            className="text-gray-700 hover:text-blue-600"
                        >
                            Contact
                        </Link>

                        <Link
                            to="/advocate/login"
                            onClick={() =>
                                setMenuOpen(false)
                            }
                            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-center"
                        >
                            Advocate Login
                        </Link>

                        <Link
                            to="/demo"
                            onClick={() =>
                                setMenuOpen(false)
                            }
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
                        >
                            Request Demo
                        </Link>

                    </div>

                )}

            </div>

        </nav>

    );

}

export default Navbar;