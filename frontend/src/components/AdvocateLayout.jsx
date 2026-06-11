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
    LogOut
} from "lucide-react";

import {
    Link,
    useLocation
} from "react-router-dom";

function AdvocateLayout({ children }) {

    const location = useLocation();

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

        window.location.href = "/";

    };

    return (

        <div className="flex min-h-screen bg-gray-100">

            {/* Sidebar */}

            <div className="w-72 bg-white shadow-lg">

                <div className="p-6 border-b">

                    <h1 className="text-3xl font-bold text-blue-600">

                        ⚖️ Advonote

                    </h1>

                    <p className="text-gray-500 mt-2">

                        {advocate?.name}

                    </p>

                </div>

                <div className="p-4">

                    {menu.map((item) => (

                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 p-4 rounded-xl mb-2 transition ${location.pathname === item.path
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-gray-100"
                                }`}
                        >

                            {item.icon}

                            {item.name}

                        </Link>

                    ))}

                    <button
                        onClick={logout}
                        className="flex items-center gap-3 p-4 rounded-xl w-full text-left text-red-600 hover:bg-red-50 mt-6"
                    >

                        <LogOut size={20} />

                        Logout

                    </button>

                </div>

            </div>

            {/* Content */}

            <div className="flex-1 p-6 overflow-auto">

                {children}

            </div>

        </div>

    );

}

export default AdvocateLayout;