import { useEffect, useState } from "react";
import api from "../../services/api";

function Notifications() {

    const [notifications, setNotifications] =
        useState([]);

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

    } catch (error) {

        console.log(error);

    }

    const fetchNotifications = async () => {

        try {

            if (!advocate.id) return;

            const response =
                await api.get(
                    `/notifications/${advocate.id}`
                );

            setNotifications(
                response.data
            );

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

        if (!confirmDelete) {

            return;

        }

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

        <div className="min-h-screen bg-gray-100 p-6">

            {/* Header */}

            <div className="mb-8">

                <h1 className="text-4xl font-bold">

                    🔔 Notifications

                </h1>

                <p className="text-gray-500 mt-2">

                    Stay updated with important activities.

                </p>

            </div>

            {/* Statistics */}

            <div className="grid md:grid-cols-3 gap-6 mb-8">

                <div className="bg-blue-600 text-white rounded-2xl shadow p-6">

                    <p>Total Notifications</p>

                    <h2 className="text-4xl font-bold mt-2">

                        {notifications.length}

                    </h2>

                </div>

                <div className="bg-red-500 text-white rounded-2xl shadow p-6">

                    <p>Unread</p>

                    <h2 className="text-4xl font-bold mt-2">

                        {unreadCount}

                    </h2>

                </div>

                <div className="bg-green-600 text-white rounded-2xl shadow p-6">

                    <p>Read</p>

                    <h2 className="text-4xl font-bold mt-2">

                        {readCount}

                    </h2>

                </div>

            </div>

            {/* Empty State */}

            {notifications.length === 0 ? (

                <div className="bg-white rounded-3xl shadow p-12 text-center">

                    <div className="text-6xl mb-4">

                        📭

                    </div>

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
                            className={`rounded-3xl shadow-lg p-6 transition hover:shadow-xl ${
                                notification.isRead
                                    ? "bg-white"
                                    : "bg-blue-50 border-l-4 border-blue-600"
                            }`}
                        >

                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">

                                <div className="flex-1">

                                    <div className="flex items-center gap-3">

                                        <h2 className="text-xl font-bold">

                                            {notification.title}

                                        </h2>

                                        {!notification.isRead && (

                                            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">

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

                                <div className="flex gap-3">

                                    {!notification.isRead && (

                                        <button
                                            onClick={() =>
                                                markAsRead(
                                                    notification.id
                                                )
                                            }
                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl"
                                        >

                                            ✓ Read

                                        </button>

                                    )}

                                    <button
                                        onClick={() =>
                                            deleteNotification(
                                                notification.id
                                            )
                                        }
                                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl"
                                    >

                                        Delete

                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}

export default Notifications;