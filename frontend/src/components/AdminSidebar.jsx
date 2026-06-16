import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

import {
    LayoutDashboard,
    Users,
    BarChart3,
    LogOut,
    Shield
} from "lucide-react";

import logo from "../assets/advonote-logo.png";

function AdminSidebar() {

    const location = useLocation();
    const navigate = useNavigate();

    const admin = JSON.parse(
        localStorage.getItem("admin")
    );

    const menus = [

        {
            title: "Dashboard",
            path: "/admin/dashboard",
            icon: LayoutDashboard
        },

        {
            title: "Leads",
            path: "/admin/leads",
            icon: Users
        },

        {
            title: "Analytics",
            path: "/admin/analytics",
            icon: BarChart3
        }

    ];

    const handleLogout = () => {

        localStorage.removeItem(
            "adminToken"
        );

        localStorage.removeItem(
            "admin"
        );

        navigate("/admin");

    };

    return (

        <aside
            className="
                w-72
                h-screen
                bg-[#2D1B14]
                text-white
                flex
                flex-col
                shadow-2xl
            "
        >

            {/* Logo */}

            <div
                className="
                    px-6
                    py-8
                    border-b
                    border-white/10
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >

                    <img
                        src={logo}
                        alt="Advonote"
                        className="
                            w-14
                            h-14
                            object-contain
                            bg-white
                            rounded-2xl
                            p-2
                        "
                    />

                    <div>

                        <h2
                            className="
                                text-2xl
                                font-bold
                            "
                        >

                            Advonote

                        </h2>

                        <p
                            className="
                                text-sm
                                text-[#F4C430]
                            "
                        >

                            Admin Portal

                        </p>

                    </div>

                </div>

            </div>

            {/* Admin Info */}

            <div
                className="
                    px-6
                    py-6
                    border-b
                    border-white/10
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >

                    <div
                        className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-[#F4C430]
                            text-[#2D1B14]
                            flex
                            items-center
                            justify-center
                            font-bold
                            text-xl
                        "
                    >

                        {

                            admin?.name
                                ?.charAt(0)
                                ?.toUpperCase()

                            || "A"

                        }

                    </div>

                    <div>

                        <p
                            className="
                                text-sm
                                text-gray-400
                            "
                        >

                            Logged in as

                        </p>

                        <h3
                            className="
                                font-semibold
                            "
                        >

                            {

                                admin?.name
                                || "Admin"

                            }

                        </h3>

                        <p
                            className="
                                text-xs
                                text-gray-400
                                truncate
                                max-w-[150px]
                            "
                        >

                            {admin?.email}

                        </p>

                    </div>

                </div>

            </div>

            {/* Navigation */}

            <nav
                className="
                    flex-1
                    p-4
                    space-y-3
                "
            >

                {

                    menus.map((menu) => {

                        const Icon =
                            menu.icon;

                        const active =
                            location.pathname ===
                            menu.path;

                        return (

                            <Link
                                key={menu.path}
                                to={menu.path}
                                className={`
                                    flex
                                    items-center
                                    gap-4
                                    px-5
                                    py-4
                                    rounded-2xl
                                    transition

                                    ${
                                        active

                                        ? "bg-[#F4C430] text-[#2D1B14] font-bold shadow-lg"

                                        : "hover:bg-white/10 text-white"
                                    }
                                `}
                            >

                                <Icon
                                    size={22}
                                />

                                {menu.title}

                            </Link>

                        );

                    })

                }

            </nav>

            {/* Logout */}

            <div
                className="
                    p-4
                    border-t
                    border-white/10
                "
            >

                <button
                    onClick={handleLogout}
                    className="
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-3
                        bg-red-500
                        hover:bg-red-600
                        py-4
                        rounded-2xl
                        font-semibold
                        transition
                    "
                >

                    <LogOut size={20} />

                    Logout

                </button>

            </div>

        </aside>

    );

}

export default AdminSidebar;