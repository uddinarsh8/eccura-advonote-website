import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    UserCog,
    Building2,
    Users,
    Briefcase,
    ClipboardList,
    CircleCheck,
    MessageCircle,
    Share2,
    Video,
    Trash2,
    FileText,
    Receipt,
    Tag,
    LogOut
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/advonote-logo.png";

function Profile() {

    const navigate = useNavigate();

    const [showDeleteModal, setShowDeleteModal] =
        useState(false);

    let advocate = {};

    try {

        const storedAdvocate =
            localStorage.getItem("advocate");

        if (
            storedAdvocate &&
            storedAdvocate !== "undefined"
        ) {

            advocate =
                JSON.parse(storedAdvocate);

        }

    } catch {

        advocate = {};

    }

    const handleLogout = () => {

        localStorage.removeItem(
            "advocate"
        );

        localStorage.removeItem(
            "advocateToken"
        );

        window.location.href = "/";

    };

    const handleDeleteAccount = async () => {

        try {

            /*
            Uncomment when backend API is ready

            await api.delete(
                `/advocates/${advocate.id}`
            );
            */

            localStorage.removeItem(
                "advocate"
            );

            localStorage.removeItem(
                "advocateToken"
            );

            alert(
                "Account deleted successfully."
            );

            window.location.href = "/";

        } catch (error) {

            console.log(error);

            alert(
                "Failed to delete account."
            );

        }

    };

    const menuItems = [

        {
            icon: UserCog,
            title: "View Profile",
            path: "/advocate/view-profile"
        },

        {
            icon: Building2,
            title: "Court Management",
            path: "/advocate/court-management"
        },

        {
            icon: Users,
            title: "My Team",
            path: "#"
        },

        {
            icon: Briefcase,
            title: "My Cases",
            path: "/advocate/cases"
        },

        {
            icon: ClipboardList,
            title: "Manage Clients",
            path: "/advocate/clients"
        },

        {
            icon: CircleCheck,
            title: "To Do List",
            path: "/advocate/todos"
        },

        {
            icon: MessageCircle,
            title: "Support",
            path: "/contact"
        }

    ];

    const otherItems = [

        {
            icon: Share2,
            title: "Refer to Friends",
            bg: "bg-green-100",
            color: "text-green-700",
            path: "/advocate/refer-friends"
        },

        {
            icon: Video,
            title: "Tutorials",
            path: "/advocate/tutorials"
        },

        {
            icon: FileText,
            title: "Privacy Policy",
            path: "/advocate/privacy-policy"
        },

        {
            icon: FileText,
            title: "Term & Conditions",
            path: "#"
        },

        {
            icon: FileText,
            title: "Return & Refund",
            path: "#"
        },

        {
            icon: Receipt,
            title: "Invoices",
            bg: "bg-green-100",
            color: "text-green-700",
            path: "#"
        },

        {
            icon: Tag,
            title: "Subscriptions",
            bg: "bg-yellow-200",
            color: "text-green-700",
            path: "#"
        }

    ];

    return (

        <div className="min-h-screen bg-[#F3F3F3]">

            {/* Header */}

            <div className="bg-[#F4C430] px-4 md:px-6 py-5 flex items-center gap-4 shadow">

                <button
                    onClick={() => navigate(-1)}
                    className="
                        w-14 h-14
                        md:w-16 md:h-16
                        bg-white
                        rounded-2xl
                        shadow-md
                        flex
                        items-center
                        justify-center
                    "
                >

                    <ArrowLeft size={28} />

                </button>

                <h1 className="
                    text-2xl
                    md:text-4xl
                    font-bold
                ">

                    Profile

                </h1>

            </div>

            <div className="
                max-w-2xl
                mx-auto
                px-4 md:px-5
                py-8
            ">

                {/* Profile */}

                <div className="text-center mb-8">

                    <img
                        src={logo}
                        alt="Advonote"
                        className="
                            w-28 h-28
                            md:w-40 md:h-40
                            mx-auto
                            object-contain
                        "
                    />

                    <h2 className="
                        text-2xl
                        md:text-4xl
                        font-bold
                        mt-4
                    ">

                        {advocate?.name || "ADVOCATE"}

                    </h2>

                </div>

                <hr className="mb-6" />

                {/* Main Menu */}

                <div className="space-y-5">

                    {menuItems.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <Link
                                key={index}
                                to={item.path}
                                className="
                                    bg-white
                                    rounded-3xl
                                    shadow-md
                                    px-5 md:px-6
                                    py-6
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <div className="flex items-center gap-4">

                                    <Icon size={28} />

                                    <span className="
                                        text-xl
                                        md:text-3xl
                                        font-bold
                                    ">

                                        {item.title}

                                    </span>

                                </div>

                                <ArrowRight size={28} />

                            </Link>

                        );

                    })}

                </div>

                {/* Secondary Menu */}

                <div className="space-y-5 mt-5">

                    {otherItems.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <Link
                                key={index}
                                to={item.path}
                                className={`
                                    rounded-3xl
                                    shadow-md
                                    px-5 md:px-6
                                    py-6
                                    flex
                                    items-center
                                    justify-between
                                    ${item.bg || "bg-white"}
                                    ${item.color || ""}
                                `}
                            >

                                <div className="flex items-center gap-4">

                                    <Icon size={28} />

                                    <span className="
                                        text-xl
                                        md:text-3xl
                                        font-bold
                                    ">

                                        {item.title}

                                    </span>

                                </div>

                                <ArrowRight size={28} />

                            </Link>

                        );

                    })}

                </div>

                {/* Delete Account */}

                <button
                    onClick={() =>
                        setShowDeleteModal(true)
                    }
                    className="
                        w-full
                        mt-5
                        bg-white
                        rounded-3xl
                        shadow-md
                        px-5 md:px-6
                        py-6
                        flex
                        items-center
                        justify-between
                    "
                >

                    <div className="flex items-center gap-4">

                        <Trash2 size={28} />

                        <span className="
                            text-xl
                            md:text-3xl
                            font-bold
                        ">

                            Delete Account?

                        </span>

                    </div>

                    <ArrowRight size={28} />

                </button>

                {/* Logout */}

                <button
                    onClick={handleLogout}
                    className="
                        w-full
                        mt-8
                        bg-[#F4C430]
                        py-6
                        rounded-3xl
                        shadow-md
                        flex
                        items-center
                        justify-center
                        gap-4
                        text-xl
                        md:text-3xl
                        font-bold
                    "
                >

                    LOG OUT

                    <LogOut size={30} />

                </button>

            </div>

            {/* Delete Modal */}

            {
                showDeleteModal && (

                    <div className="
                        fixed inset-0
                        bg-black/50
                        flex items-center justify-center
                        z-50 px-5
                    ">

                        <div className="
                            bg-white
                            rounded-3xl
                            shadow-xl
                            w-full
                            max-w-md
                            p-8
                        ">

                            <h2 className="
                                text-3xl
                                font-bold
                                mb-4
                            ">

                                Confirm Delete

                            </h2>

                            <p className="
                                text-gray-600
                                text-lg
                                leading-relaxed
                            ">

                                Are you sure you want to
                                delete your account?
                                This action cannot be undone.

                            </p>

                            <div className="
                                flex justify-end
                                gap-4
                                mt-10
                            ">

                                <button
                                    onClick={() =>
                                        setShowDeleteModal(false)
                                    }
                                    className="
                                        bg-gray-200
                                        px-6 py-3
                                        rounded-xl
                                        font-semibold
                                    "
                                >

                                    Cancel

                                </button>

                                <button
                                    onClick={handleDeleteAccount}
                                    className="
                                        bg-red-500
                                        hover:bg-red-600
                                        text-white
                                        px-6 py-3
                                        rounded-xl
                                        font-semibold
                                    "
                                >

                                    Yes, Delete

                                </button>

                            </div>

                        </div>

                    </div>

                )
            }

        </div>

    );

}

export default Profile;