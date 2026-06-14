import {
    LayoutDashboard,
    FolderKanban,
    PlusCircle,
    Users,
    UserPlus,
    CalendarDays,
    CheckSquare,
    Bell,
    User,
    LogOut,
    Menu,
    X
} from "lucide-react";

import {
    Link,
    useLocation
} from "react-router-dom";

import { useState } from "react";

function AdvocateLayout({ children }) {

    const location = useLocation();

    const [mobileMenu, setMobileMenu] =
        useState(false);

    let advocate = {};

    try {

        advocate = JSON.parse(
            localStorage.getItem("advocate")
        ) || {};

    } catch {

        advocate = {};

    }

    const menu = [

        {
            name: "Dashboard",
            path: "/advocate/dashboard",
            icon: <LayoutDashboard size={20} />
        },

        {
            name: "My Cases",
            path: "/advocate/cases",
            icon: <FolderKanban size={20} />
        },

        {
            name: "Add Case",
            path: "/advocate/add-case",
            icon: <PlusCircle size={20} />
        },

        {
            name: "Clients",
            path: "/advocate/clients",
            icon: <Users size={20} />
        },

        {
            name: "Add Client",
            path: "/advocate/add-client",
            icon: <UserPlus size={20} />
        },

        {
            name: "Calendar",
            path: "/advocate/calendar",
            icon: <CalendarDays size={20} />
        },

        {
            name: "ToDos",
            path: "/advocate/todos",
            icon: <CheckSquare size={20} />
        },

        {
            name: "Notifications",
            path: "/advocate/notifications",
            icon: <Bell size={20} />
        },

        {
            name: "Profile",
            path: "/advocate/profile",
            icon: <User size={20} />
        }

    ];

    const logout = () => {

        localStorage.removeItem(
            "advocate"
        );

        localStorage.removeItem(
            "advocateToken"
        );

        window.location.href =
            "/advocate/login";

    };

    return (

        <div className="min-h-screen bg-[#F7F7F7]">

            {/* MOBILE HEADER */}

            <div
                className="
                    lg:hidden
                    bg-[#F4C430]
                    px-4
                    py-4
                    sticky
                    top-0
                    z-50
                    shadow
                "
            >

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                w-12
                                h-12
                                rounded-full
                                bg-black
                                text-white
                                flex
                                items-center
                                justify-center
                                font-bold
                            "
                        >
                            ⚖
                        </div>

                        <div>

                            <h2
                                className="
                                    font-bold
                                    text-lg
                                    text-black
                                "
                            >
                                {advocate?.name ||
                                    "Advocate"}
                            </h2>

                            <p
                                className="
                                    text-xs
                                    text-black/70
                                "
                            >
                                Advocate
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={() =>
                            setMobileMenu(
                                !mobileMenu
                            )
                        }
                    >

                        {mobileMenu ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}

                    </button>

                </div>

                {/* MOBILE MENU */}

                {mobileMenu && (

                    <div
                        className="
                            mt-4
                            bg-white
                            rounded-2xl
                            p-3
                            shadow-lg
                        "
                    >

                        {menu.map((item) => (

                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() =>
                                    setMobileMenu(
                                        false
                                    )
                                }
                                className={`
                                    flex
                                    items-center
                                    gap-3
                                    p-3
                                    rounded-xl
                                    mb-2
                                    ${
                                        location.pathname ===
                                        item.path
                                            ? "bg-[#F4C430] font-semibold"
                                            : "hover:bg-gray-100"
                                    }
                                `}
                            >

                                {item.icon}

                                {item.name}

                            </Link>

                        ))}

                        <button
                            onClick={logout}
                            className="
                                flex
                                items-center
                                gap-3
                                p-3
                                text-red-600
                                w-full
                            "
                        >

                            <LogOut size={20} />

                            Logout

                        </button>

                    </div>

                )}

            </div>

            <div className="flex">

                {/* DESKTOP SIDEBAR */}

                <div
                    className="
                        hidden
                        lg:block
                        w-72
                        min-h-screen
                        bg-white
                        shadow-lg
                    "
                >

                    <div
                        className="
                            p-6
                            border-b
                        "
                    >

                        <h1
                            className="
                                text-3xl
                                font-bold
                                text-[#F4C430]
                            "
                        >
                            ⚖ Advonote
                        </h1>

                        <p
                            className="
                                text-gray-500
                                mt-2
                            "
                        >
                            {advocate?.name}
                        </p>

                    </div>

                    <div className="p-4">

                        {menu.map((item) => (

                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                                    flex
                                    items-center
                                    gap-3
                                    p-4
                                    rounded-xl
                                    mb-2
                                    transition
                                    ${
                                        location.pathname ===
                                        item.path
                                            ? "bg-[#F4C430] text-black font-semibold"
                                            : "hover:bg-gray-100"
                                    }
                                `}
                            >

                                {item.icon}

                                {item.name}

                            </Link>

                        ))}

                        <button
                            onClick={logout}
                            className="
                                flex
                                items-center
                                gap-3
                                p-4
                                rounded-xl
                                w-full
                                text-left
                                text-red-600
                                hover:bg-red-50
                                mt-6
                            "
                        >

                            <LogOut size={20} />

                            Logout

                        </button>

                    </div>

                </div>

                {/* PAGE CONTENT */}

                <div
                    className="
                        flex-1
                        overflow-auto
                        min-h-screen
                    "
                >

                    <div
                        className="
                            p-3
                            sm:p-4
                            lg:p-6
                            pb-24
                        "
                    >

                        {children}

                    </div>

                </div>

            </div>

            {/* MOBILE BOTTOM NAV */}

            <div
                className="
                    lg:hidden
                    fixed
                    bottom-0
                    left-0
                    right-0
                    bg-[#F4C430]
                    border-t
                    shadow-lg
                    z-50
                "
            >

                <div
                    className="
                        grid
                        grid-cols-4
                        py-3
                    "
                >

                    <Link
                        to="/advocate/dashboard"
                        className="
                            flex
                            flex-col
                            items-center
                            text-xs
                        "
                    >
                        <LayoutDashboard
                            size={22}
                        />
                        Dashboard
                    </Link>

                    <Link
                        to="/advocate/calendar"
                        className="
                            flex
                            flex-col
                            items-center
                            text-xs
                        "
                    >
                        <CalendarDays
                            size={22}
                        />
                        Calendar
                    </Link>

                    <Link
                        to="/advocate/notifications"
                        className="
                            flex
                            flex-col
                            items-center
                            text-xs
                        "
                    >
                        <Bell size={22} />
                        Alerts
                    </Link>

                    <Link
                        to="/advocate/profile"
                        className="
                            flex
                            flex-col
                            items-center
                            text-xs
                        "
                    >
                        <User size={22} />
                        Profile
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default AdvocateLayout;