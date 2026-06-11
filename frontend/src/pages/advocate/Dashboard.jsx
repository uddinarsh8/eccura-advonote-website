import { useEffect, useState } from "react";
import api from "../../services/api";

function Dashboard() {

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

        console.log(
            "Invalid advocate data"
        );

    }

    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);

    const [clientCount, setClientCount] =
        useState(0);

    const [pendingTasks, setPendingTasks] =
        useState(0);

    const [notifications,
        setNotifications] =
        useState([]);

    useEffect(() => {

        const fetchDashboardData =
            async () => {

                try {

                    if (!advocate.id) {

                        setLoading(false);
                        return;

                    }

                    const [
                        casesRes,
                        clientsRes,
                        todosRes,
                        notificationsRes
                    ] = await Promise.all([

                        api.get(
                            `/cases/today/${advocate.id}`
                        ),

                        api.get(
                            `/clients/count/${advocate.id}`
                        ),

                        api.get(
                            `/todos/count/${advocate.id}`
                        ),

                        api.get(
                            `/notifications/recent/${advocate.id}`
                        )

                    ]);

                    setCases(
                        casesRes.data
                    );

                    setClientCount(
                        clientsRes.data.totalClients || 0
                    );

                    setPendingTasks(
                        todosRes.data.pendingTasks || 0
                    );

                    setNotifications(
                        notificationsRes.data || []
                    );

                } catch (error) {

                    console.log(error);

                } finally {

                    setLoading(false);

                }

            };

        fetchDashboardData();

    }, []);

    return (

        <div className="min-h-screen bg-gray-100 p-6">

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Good Morning,
                        {" "}
                        {advocate?.name}

                    </h1>

                    <p className="text-gray-500">

                        Here's what's happening today.

                    </p>

                </div>

                {/* <div className="flex gap-4">

                    <button
                        onClick={() =>
                            window.location.href =
                            "/advocate/notifications"
                        }
                        className="text-3xl"
                    >
                        🔔
                    </button>

                    <button
                        onClick={() =>
                            window.location.href =
                            "/advocate/profile"
                        }
                        className="text-3xl"
                    >
                        👤
                    </button>

                </div> */}

            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-4 gap-6 mb-8">

                <div className="bg-blue-600 text-white p-6 rounded-2xl shadow">

                    <p>
                        Today's Hearings
                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        {cases.length}

                    </h2>

                </div>

                <div className="bg-green-600 text-white p-6 rounded-2xl shadow">

                    <p>
                        Total Clients
                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        {clientCount}

                    </h2>

                </div>

                <div className="bg-yellow-500 text-white p-6 rounded-2xl shadow">

                    <p>
                        Pending Tasks
                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        {pendingTasks}

                    </h2>

                </div>

                <div className="bg-purple-600 text-white p-6 rounded-2xl shadow">

                    <p>
                        Notifications
                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        {notifications.length}

                    </h2>

                </div>

            </div>

            {/* Quick Actions */}

            <div className="bg-white rounded-2xl shadow p-6 mb-8">

                <h2 className="text-2xl font-bold mb-6">

                    Quick Actions

                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    <button
                        onClick={() =>
                            window.location.href =
                            "/advocate/add-case"
                        }
                        className="bg-blue-100 text-blue-700 p-4 rounded-xl font-semibold"
                    >
                        ➕ Add Case
                    </button>

                    <button
                        onClick={() =>
                            window.location.href =
                            "/advocate/cases"
                        }
                        className="bg-green-100 text-green-700 p-4 rounded-xl font-semibold"
                    >
                        📂 My Cases
                    </button>

                    <button
                        onClick={() =>
                            window.location.href =
                            "/advocate/clients"
                        }
                        className="bg-purple-100 text-purple-700 p-4 rounded-xl font-semibold"
                    >
                        👥 Clients
                    </button>

                    <button
                        onClick={() =>
                            window.location.href =
                            "/advocate/add-client"
                        }
                        className="bg-pink-100 text-pink-700 p-4 rounded-xl font-semibold"
                    >
                        ➕ Add Client
                    </button>

                    <button
                        onClick={() =>
                            window.location.href =
                            "/advocate/calendar"
                        }
                        className="bg-orange-100 text-orange-700 p-4 rounded-xl font-semibold"
                    >
                        📅 Calendar
                    </button>

                    <button
                        onClick={() =>
                            window.location.href =
                            "/advocate/todos"
                        }
                        className="bg-yellow-100 text-yellow-700 p-4 rounded-xl font-semibold"
                    >
                        ✅ To-Dos
                    </button>

                </div>

            </div>

            {/* Main Content */}

            <div className="grid md:grid-cols-2 gap-6">

                {/* Cause List */}

                <div className="bg-white rounded-2xl shadow p-6">

                    <h2 className="text-2xl font-bold mb-6">

                        Today's Cause List

                    </h2>

                    {loading ? (

                        <p>
                            Loading...
                        </p>

                    ) : cases.length === 0 ? (

                        <div className="text-center py-12">

                            <div className="text-6xl">

                                ⚖️

                            </div>

                            <h3 className="text-xl font-semibold mt-4">

                                No Hearings Scheduled

                            </h3>

                            <p className="text-gray-500 mt-2">

                                You don't have any hearings today.

                            </p>

                        </div>

                    ) : (

                        cases.map((item) => (

                            <div
                                key={item.id}
                                className="border rounded-xl p-4 mb-4"
                            >

                                <h3 className="font-semibold">

                                    {item.petitioner}
                                    {" vs "}
                                    {item.respondent}

                                </h3>

                                <p>

                                    {item.courtName}

                                </p>

                                <p>

                                    Case No:
                                    {" "}
                                    {item.caseNumber}

                                </p>

                            </div>

                        ))

                    )}

                </div>

                {/* Notifications */}

                <div className="bg-white rounded-2xl shadow p-6">

                    <h2 className="text-2xl font-bold mb-6">

                        Recent Notifications

                    </h2>

                    {notifications.length === 0 ? (

                        <div className="text-center py-12">

                            <div className="text-6xl">

                                🔔

                            </div>

                            <h3 className="text-xl font-semibold mt-4">

                                No Notifications

                            </h3>

                        </div>

                    ) : (

                        notifications.map((item) => (

                            <div
                                key={item.id}
                                className="border rounded-xl p-4 mb-4"
                            >

                                <h3 className="font-semibold">

                                    {item.title}

                                </h3>

                                <p>

                                    {item.message}

                                </p>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </div>

    );

}

export default Dashboard;