import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../../components/AdminLayout";
import {
    Users,
    Phone,
    MonitorPlay
} from "lucide-react";

function Dashboard() {

    const admin = JSON.parse(
        localStorage.getItem("admin")
    );

    const [stats, setStats] = useState({
        totalLeads: 0,
        contactRequests: 0,
        demoRequests: 0,
        recentLeads: []
    });

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const response =
                    await api.get(
                        "/admin/dashboard"
                    );

                setStats(
                    response.data
                );

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchDashboard();

    }, []);

    return (

        <AdminLayout>

            <div className="space-y-8">

                {/* Welcome Banner */}

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-8 shadow-xl">

                    <h1 className="text-3xl sm:text-4xl font-bold">

                        Welcome back,
                        {" "}
                        {admin?.name}

                        👋

                    </h1>

                    <p className="mt-3 text-blue-100">

                        Here's an overview of
                        your Advonote platform.

                    </p>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Total Leads

                                </p>

                                <h2 className="text-4xl font-bold mt-2">

                                    {stats.totalLeads}

                                </h2>

                            </div>

                            <div className="bg-blue-100 p-4 rounded-2xl">

                                <Users
                                    size={32}
                                    className="text-blue-600"
                                />

                            </div>

                        </div>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Contact Requests

                                </p>

                                <h2 className="text-4xl font-bold mt-2">

                                    {stats.contactRequests}

                                </h2>

                            </div>

                            <div className="bg-green-100 p-4 rounded-2xl">

                                <Phone
                                    size={32}
                                    className="text-green-600"
                                />

                            </div>

                        </div>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Demo Requests

                                </p>

                                <h2 className="text-4xl font-bold mt-2">

                                    {stats.demoRequests}

                                </h2>

                            </div>

                            <div className="bg-purple-100 p-4 rounded-2xl">

                                <MonitorPlay
                                    size={32}
                                    className="text-purple-600"
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Recent Leads */}

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <div className="flex justify-between items-center mb-6">

                        <h2 className="text-2xl font-bold">

                            Recent Leads

                        </h2>

                        <span className="text-gray-500">

                            Latest enquiries

                        </span>

                    </div>

                    {loading ? (

                        <div className="text-center py-12">

                            Loading...

                        </div>

                    ) : stats.recentLeads.length === 0 ? (

                        <div className="text-center py-12">

                            <div className="text-6xl mb-4">

                                📭

                            </div>

                            <h3 className="text-xl font-semibold">

                                No Leads Found

                            </h3>

                            <p className="text-gray-500 mt-2">

                                Leads will appear here.

                            </p>

                        </div>

                    ) : (

                        <div className="overflow-x-auto">

                            <table className="w-full">

                                <thead>

                                    <tr className="border-b bg-gray-50">

                                        <th className="text-left p-4">

                                            Name

                                        </th>

                                        <th className="text-left p-4">

                                            Email

                                        </th>

                                        <th className="text-left p-4">

                                            Phone

                                        </th>

                                        <th className="text-left p-4">

                                            Status

                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {stats.recentLeads.map((lead) => (

                                        <tr
                                            key={lead.id}
                                            className="border-b hover:bg-gray-50"
                                        >

                                            <td className="p-4">

                                                {lead.name}

                                            </td>

                                            <td className="p-4">

                                                {lead.email}

                                            </td>

                                            <td className="p-4">

                                                {lead.phone}

                                            </td>

                                            <td className="p-4">

                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                        lead.status === "New"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-gray-100 text-gray-700"
                                                    }`}
                                                >

                                                    {lead.status}

                                                </span>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </div>

        </AdminLayout>

    );

}

export default Dashboard;