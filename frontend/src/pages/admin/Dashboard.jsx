import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../../components/AdminLayout";

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

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const response =
                    await api.get("/admin/dashboard");

                setStats(response.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchDashboard();

    }, []);

    return (

        <AdminLayout>

            <h1 className="text-4xl font-bold mb-4">
                Dashboard
            </h1>

            <h2 className="text-2xl mb-8">
                Welcome, {admin?.name}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="shadow-lg p-6 rounded-lg">
                    <h2>Total Leads</h2>

                    <p className="text-3xl font-bold">
                        {stats.totalLeads}
                    </p>
                </div>

                <div className="shadow-lg p-6 rounded-lg">
                    <h2>Contact Requests</h2>

                    <p className="text-3xl font-bold">
                        {stats.contactRequests}
                    </p>
                </div>

                <div className="shadow-lg p-6 rounded-lg">
                    <h2>Demo Requests</h2>

                    <p className="text-3xl font-bold">
                        {stats.demoRequests}
                    </p>
                </div>
                <div className="mt-10">

                    <h2 className="text-2xl font-bold mb-4">
                        Recent Leads
                    </h2>

                    <table className="w-full border">

                        <thead>

                            <tr className="bg-gray-200">

                                <th className="border p-2">
                                    Name
                                </th>

                                <th className="border p-2">
                                    Email
                                </th>

                                <th className="border p-2">
                                    Phone
                                </th>

                                <th className="border p-2">
                                    Status
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {stats.recentLeads.map((lead) => (

                                <tr key={lead.id}>

                                    <td className="border p-2">
                                        {lead.name}
                                    </td>

                                    <td className="border p-2">
                                        {lead.email}
                                    </td>

                                    <td className="border p-2">
                                        {lead.phone}
                                    </td>

                                    <td className="border p-2">
                                        {lead.status}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </AdminLayout>

    );

}

export default Dashboard;