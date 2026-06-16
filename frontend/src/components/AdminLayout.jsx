import { useState } from "react";
import { Menu, X } from "lucide-react";
import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] =
        useState(false);

    return (

        <div className="min-h-screen bg-[#FFFDF7] flex">

            {/* Mobile Overlay */}

            {sidebarOpen && (

                <div
                    className="
                        fixed
                        inset-0
                        bg-black/50
                        z-40
                        lg:hidden
                    "
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                />

            )}

            {/* Sidebar */}

            <div
                className={`
                    fixed
                    top-0
                    left-0
                    h-full
                    z-50
                    transform
                    transition-transform
                    duration-300
                    lg:translate-x-0
                    ${
                        sidebarOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
            >

                <AdminSidebar />

            </div>

            {/* Main Content */}

            <div className="flex-1 lg:ml-72">

                {/* Mobile Header */}

                <header
                    className="
                        lg:hidden
                        sticky
                        top-0
                        z-30
                        bg-[#F4C430]
                        px-4
                        py-4
                        flex
                        items-center
                        justify-between
                        shadow-md
                    "
                >

                    <h1
                        className="
                            text-2xl
                            font-bold
                            text-[#2D1B14]
                        "
                    >

                        Advonote Admin

                    </h1>

                    <button
                        onClick={() =>
                            setSidebarOpen(
                                !sidebarOpen
                            )
                        }
                        className="
                            w-12
                            h-12
                            bg-white
                            rounded-2xl
                            flex
                            items-center
                            justify-center
                            shadow
                        "
                    >

                        {

                            sidebarOpen
                                ? (
                                    <X
                                        size={24}
                                        className="
                                            text-[#2D1B14]
                                        "
                                    />
                                )
                                : (
                                    <Menu
                                        size={24}
                                        className="
                                            text-[#2D1B14]
                                        "
                                    />
                                )

                        }

                    </button>

                </header>

                {/* Page Content */}

                <main
                    className="
                        p-4
                        sm:p-6
                        lg:p-8
                        overflow-x-hidden
                    "
                >

                    {children}

                </main>

            </div>

        </div>

    );

}

export default AdminLayout;