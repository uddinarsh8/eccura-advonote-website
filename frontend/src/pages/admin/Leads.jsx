import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../../components/AdminLayout";
import {
    Search,
    Users,
    Phone,
    Mail
} from "lucide-react";

function Leads() {

    const [leads, setLeads] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchLeads = async () => {

        try {

            const response =
                await api.get(
                    "/admin/leads"
                );

            setLeads(
                response.data
            );

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const searchLeads = async () => {

        try {

            setLoading(true);

            const response =
                await api.get(
                    `/admin/search?search=${search}`
                );

            setLeads(
                response.data
            );

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchLeads();

    }, []);

    return (

        <AdminLayout>

            <div className="space-y-8">

                {/* Header */}

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">

                    <h1 className="text-3xl sm:text-4xl font-bold">

                        Leads Management

                    </h1>

                    <p className="mt-2 text-blue-100">

                        Manage enquiries and track potential customers.

                    </p>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Total Leads

                                </p>

                                <h2 className="text-4xl font-bold mt-2">

                                    {leads.length}

                                </h2>

                            </div>

                            <div className="bg-blue-100 p-4 rounded-2xl">

                                <Users
                                    className="text-blue-600"
                                    size={32}
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

                                    {
                                        leads.filter(
                                            lead =>
                                                lead.source === "Contact"
                                        ).length
                                    }

                                </h2>

                            </div>

                            <div className="bg-green-100 p-4 rounded-2xl">

                                <Phone
                                    className="text-green-600"
                                    size={32}
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

                                    {
                                        leads.filter(
                                            lead =>
                                                lead.source === "Demo"
                                        ).length
                                    }

                                </h2>

                            </div>

                            <div className="bg-purple-100 p-4 rounded-2xl">

                                <Mail
                                    className="text-purple-600"
                                    size={32}
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Search */}

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <div className="flex flex-col sm:flex-row gap-4">

                        <div className="relative flex-1">

                            <Search
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                size={20}
                            />

                            <input
                                type="text"
                                placeholder="Search by name, email or phone..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                                className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
                            />

                        </div>

                        <button
                            onClick={searchLeads}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
                        >

                            Search

                        </button>

                    </div>

                </div>

                {/* Leads Table */}

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <h2 className="text-2xl font-bold mb-6">

                        Recent Leads

                    </h2>

                    {loading ? (

                        <div className="text-center py-12">

                            Loading...

                        </div>

                    ) : leads.length === 0 ? (

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

                                    <tr className="bg-gray-50 border-b">

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

                                            Source

                                        </th>

                                        <th className="text-left p-4">

                                            Status

                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {leads.map((lead) => (

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

                                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                                                    {lead.source}

                                                </span>

                                            </td>

                                            <td className="p-4">

                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                        lead.status === "New"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-yellow-100 text-yellow-700"
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

export default Leads;