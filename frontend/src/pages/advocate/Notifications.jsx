import { useEffect, useState } from "react";
import {
    ArrowLeft,
    Bell,
    Trash2,
    CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Notifications() {

    const navigate = useNavigate();

    const [notifications, setNotifications] = useState([]);

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

    const fetchNotifications = async () => {

        try {

            if (!advocate.id) return;

            const response =
                await api.get(
                    `/notifications/${advocate.id}`
                );

            setNotifications(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchNotifications();

    }, []);

    const markAsRead = async (id) => {

        try {

            await api.put(
                `/notifications/read/${id}`
            );

            fetchNotifications();

        } catch (error) {

            console.log(error);

        }

    };

    const deleteNotification = async (id) => {

        const confirmDelete =
            window.confirm(
                "Delete this notification?"
            );

        if (!confirmDelete) return;

        try {

            await api.delete(
                `/notifications/${id}`
            );

            fetchNotifications();

        } catch (error) {

            console.log(error);

        }

    };

    const unreadCount =
        notifications.filter(
            item => !item.isRead
        ).length;

    const readCount =
        notifications.length -
        unreadCount;

    return (

        <div className="min-h-screen bg-[#F3F3F3]">

            {/* Header */}

            <div className="bg-[#F4C430] px-5 py-5 flex items-center gap-4 shadow">

                <button
                    onClick={() => navigate(-1)}
                    className="
                        w-14 h-14
                        bg-white
                        rounded-2xl
                        shadow-md
                        flex
                        items-center
                        justify-center
                    "
                >

                    <ArrowLeft size={30} />

                </button>

                <div>

                    <h1 className="text-3xl font-bold">

                        Notifications

                    </h1>

                    <p className="text-sm text-black/70">

                        Stay updated with important activities

                    </p>

                </div>

            </div>

            <div className="max-w-5xl mx-auto p-5">

                {/* Statistics */}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

                    <div className="bg-white rounded-3xl shadow p-5">

                        <p className="text-gray-500">

                            Total

                        </p>

                        <h2 className="text-4xl font-bold">

                            {notifications.length}

                        </h2>

                    </div>

                    <div className="bg-red-100 rounded-3xl shadow p-5">

                        <p className="text-red-600">

                            Unread

                        </p>

                        <h2 className="text-4xl font-bold text-red-600">

                            {unreadCount}

                        </h2>

                    </div>

                    <div className="bg-green-100 rounded-3xl shadow p-5">

                        <p className="text-green-700">

                            Read

                        </p>

                        <h2 className="text-4xl font-bold text-green-700">

                            {readCount}

                        </h2>

                    </div>

                </div>

                {/* Empty State */}

                {notifications.length === 0 ? (

                    <div className="
                        bg-white
                        rounded-3xl
                        shadow
                        py-20
                        px-6
                        text-center
                    ">

                        <Bell
                            size={70}
                            className="
                                mx-auto
                                text-[#F4C430]
                                mb-5
                            "
                        />

                        <h2 className="text-2xl font-bold">

                            No Notifications

                        </h2>

                        <p className="text-gray-500 mt-2">

                            You're all caught up.

                        </p>

                    </div>

                ) : (

                    <div className="space-y-5">

                        {notifications.map((notification) => (

                            <div
                                key={notification.id}
                                className={`
                                    rounded-3xl
                                    shadow-md
                                    p-6
                                    ${
                                        notification.isRead
                                            ? "bg-white"
                                            : "bg-blue-50 border-l-4 border-blue-600"
                                    }
                                `}
                            >

                                <div className="flex justify-between items-start gap-4">

                                    <div className="flex-1">

                                        <div className="flex flex-wrap items-center gap-3">

                                            <h2 className="text-xl font-bold">

                                                {notification.title}

                                            </h2>

                                            {!notification.isRead && (

                                                <span className="
                                                    bg-red-500
                                                    text-white
                                                    text-xs
                                                    px-3 py-1
                                                    rounded-full
                                                ">

                                                    NEW

                                                </span>

                                            )}

                                        </div>

                                        <p className="text-gray-600 mt-3">

                                            {notification.message}

                                        </p>

                                        <p className="text-sm text-gray-400 mt-4">

                                            🕒 {

                                                notification.createdAt
                                                    ? new Date(
                                                        notification.createdAt
                                                    ).toLocaleString()
                                                    : "Recently"

                                            }

                                        </p>

                                    </div>

                                </div>

                                <div className="
                                    flex
                                    flex-wrap
                                    gap-3
                                    mt-5
                                ">

                                    {!notification.isRead && (

                                        <button
                                            onClick={() =>
                                                markAsRead(
                                                    notification.id
                                                )
                                            }
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                bg-green-600
                                                text-white
                                                px-5 py-3
                                                rounded-2xl
                                                font-semibold
                                            "
                                        >

                                            <CheckCircle size={20} />

                                            Mark Read

                                        </button>

                                    )}

                                    <button
                                        onClick={() =>
                                            deleteNotification(
                                                notification.id
                                            )
                                        }
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            bg-red-600
                                            text-white
                                            px-5 py-3
                                            rounded-2xl
                                            font-semibold
                                        "
                                    >

                                        <Trash2 size={20} />

                                        Delete

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}

export default Notifications;