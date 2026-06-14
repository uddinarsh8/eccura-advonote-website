import { useEffect, useState } from "react";
import api from "../../services/api";

function Dashboard() {

    let advocate = {};

    try {
        const storedAdvocate = localStorage.getItem("advocate");

        if (
            storedAdvocate &&
            storedAdvocate !== "undefined"
        ) {
            advocate = JSON.parse(storedAdvocate);
        }
    } catch (error) {
        console.log("Invalid advocate data");
    }

    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);

    const [clientCount, setClientCount] = useState(0);

    const [pendingTasks, setPendingTasks] = useState(0);

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {

        const fetchDashboardData = async () => {

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

                    api.get(`/cases/today/${advocate.id}`),

                    api.get(`/clients/count/${advocate.id}`),

                    api.get(`/todos/count/${advocate.id}`),

                    api.get(`/notifications/recent/${advocate.id}`)
                ]);

                setCases(casesRes.data);

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

        <div className="min-h-screen bg-[#F7F7F7] pb-32">

            {/* Header */}

            <div className="hidden lg:block bg-[#F4C430] px-6 py-5 shadow rounded-3xl mb-6">

                <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between xl:items-center">

                    <div className="flex items-center gap-4">

                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-3xl">
                            ⚖
                        </div>

                        <div>

                            <h1 className="text-3xl font-bold">
                                {advocate?.name || "Advocate"}
                            </h1>

                            <p className="text-lg">
                                Advocate
                            </p>

                        </div>

                    </div>

                    <div className="flex gap-4">

                        <button
                            onClick={() => window.print()}
                            className="bg-[#1D1B2A] text-white px-4 py-3 rounded-2xl font-semibold"
                        >
                            Print Cause List
                        </button>

                        <button
                            onClick={() =>
                                window.location.href =
                                "/advocate/notifications"
                            }
                            className="text-4xl"
                        >
                            🔔
                        </button>

                    </div>

                </div>

            </div>

            {/* Date Selector */}

            <div className="bg-white px-4 py-4 overflow-x-auto">

                <div className="flex gap-3">

                    {["8", "9", "10", "11", "12", "13"].map((day, index) => (

                        <button
                            key={index}
                            className={`min-w-[80px] rounded-3xl border shadow p-3 ${
                                index === 1
                                    ? "bg-blue-600 text-white"
                                    : "bg-white"
                            }`}
                        >

                            <p className="font-bold text-xl">
                                {["M", "T", "W", "T", "F", "S"][index]}
                            </p>

                            <p className="text-2xl">
                                {day}
                            </p>

                        </button>

                    ))}

                </div>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

                <div className="bg-blue-600 text-white rounded-3xl p-6">

                    <p>Hearings</p>

                    <h2 className="text-4xl font-bold mt-2">
                        {cases.length}
                    </h2>

                </div>

                <div className="bg-green-700 text-white rounded-3xl p-6">

                    <p>Clients</p>

                    <h2 className="text-4xl font-bold mt-2">
                        {clientCount}
                    </h2>

                </div>

                <div className="bg-yellow-400 rounded-3xl p-6">

                    <p>Tasks</p>

                    <h2 className="text-4xl font-bold mt-2">
                        {pendingTasks}
                    </h2>

                </div>

                <div className="bg-purple-700 text-white rounded-3xl p-6">

                    <p>Notifications</p>

                    <h2 className="text-4xl font-bold mt-2">
                        {notifications.length}
                    </h2>

                </div>

            </div>

            {/* Cause List */}

            <div className="bg-white rounded-3xl mx-6 p-6 shadow mb-6">

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

                    <h2 className="text-3xl font-bold">
                        Cause List
                    </h2>

                    <div className="flex gap-3">

                        <button className="bg-green-700 text-white px-5 py-2 rounded-full">
                            Hearing
                        </button>

                        <button className="bg-[#F4C430] px-5 py-2 rounded-full">
                            Undated
                        </button>

                    </div>

                </div>

                {loading ? (

                    <p>Loading...</p>

                ) : cases.length === 0 ? (

                    <div className="bg-gray-100 rounded-xl p-6 text-center">

                        <p className="text-xl">
                            There are no cases on this date.
                        </p>

                    </div>

                ) : (

                    cases.map((item) => (

                        <div
                            key={item.id}
                            className="border rounded-xl p-4 mb-4"
                        >

                            <h3 className="font-bold text-lg">

                                {item.petitioner}
                                {" vs "}
                                {item.respondent}

                            </h3>

                            <p>{item.courtName}</p>

                            <p>
                                Case No: {item.caseNumber}
                            </p>

                        </div>

                    ))

                )}

            </div>

            {/* Notifications */}

            <div className="bg-white rounded-3xl mx-6 p-6 shadow">

                <h2 className="text-3xl font-bold mb-6">
                    Recent Notifications
                </h2>

                {notifications.length === 0 ? (

                    <div className="text-center py-12">

                        <div className="text-6xl mb-4">
                            🔔
                        </div>

                        <h3 className="text-xl font-semibold">
                            No Notifications
                        </h3>

                    </div>

                ) : (

                    notifications.map((item) => (

                        <div
                            key={item.id}
                            className="border rounded-xl p-4 mb-4"
                        >

                            <h3 className="font-bold">
                                {item.title}
                            </h3>

                            <p>{item.message}</p>

                        </div>

                    ))

                )}

            </div>

            {/* Floating Add */}

            <button
                onClick={() =>
                    window.location.href =
                    "/advocate/add-case"
                }
                className="
                    fixed
                    lg:bottom-8 bottom-24
                    right-6
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#1D1B2A]
                    text-white
                    text-4xl
                    shadow-xl
                "
            >
                +
            </button>

            {/* Bottom Navigation */}

            

                <button
                    onClick={() =>
                        window.location.href =
                        "/advocate/dashboard"
                    }
                    className="font-semibold"
                >
                    Dashboard
                </button>

                <button
                    onClick={() =>
                        window.location.href =
                        "/advocate/calendar"
                    }
                    className="font-semibold"
                >
                    Calendar
                </button>

                <button
                    onClick={() =>
                        window.location.href =
                        "/advocate/profile"
                    }
                    className="font-semibold"
                >
                    Profile & Settings
                </button>

          

        </div>

    );

}

export default Dashboard;