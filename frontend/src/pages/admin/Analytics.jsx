import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "../../components/AdminLayout";

import {
    Users,
    Phone,
    MonitorPlay,
    TrendingUp
} from "lucide-react";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Legend
} from "recharts";

function Analytics() {

    const [analytics, setAnalytics] = useState({

        totalLeads: 0,
        contactRequests: 0,
        demoRequests: 0,
        growthRate: 0,
        sourceData: [],
        statusData: []

    });

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const fetchAnalytics = async () => {

            try {

                const response =
                    await api.get(
                        "/admin/analytics"
                    );

                setAnalytics(
                    response.data
                );

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchAnalytics();

    }, []);

    if (loading) {

        return (

            <AdminLayout>

                <div className="min-h-[60vh] flex items-center justify-center">

                    <div className="text-center">

                        <div className="w-16 h-16 border-4 border-[#F4C430] border-t-transparent rounded-full animate-spin mx-auto"></div>

                        <p className="mt-4 text-[#2D1B14] font-semibold">

                            Loading Analytics...

                        </p>

                    </div>

                </div>

            </AdminLayout>

        );

    }

    const chartData = [

        {
            name: "Leads",
            value: analytics.totalLeads
        },

        {
            name: "Contact",
            value: analytics.contactRequests
        },

        {
            name: "Demo",
            value: analytics.demoRequests
        }

    ];

    const COLORS = [

        "#F4C430",
        "#2D1B14",
        "#D4A017"

    ];

    return (

        <AdminLayout>

            <div className="space-y-8">

                {/* Header */}

                <div className="bg-[#F4C430] rounded-[32px] p-8 shadow-lg">

                    <h1 className="text-3xl sm:text-4xl font-bold text-[#2D1B14]">

                        Analytics Dashboard

                    </h1>

                    <p className="mt-2 text-[#5C4634]">

                        Monitor platform growth and customer engagement.

                    </p>

                </div>

                {/* KPI Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                    {/* Total Leads */}

                    <div className="bg-white rounded-[32px] shadow-lg p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Total Leads

                                </p>

                                <h2 className="text-4xl font-bold mt-2 text-[#2D1B14]">

                                    {analytics.totalLeads}

                                </h2>

                            </div>

                            <div className="bg-[#FFF4CC] p-4 rounded-2xl">

                                <Users
                                    className="text-[#2D1B14]"
                                    size={32}
                                />

                            </div>

                        </div>

                    </div>

                    {/* Contact */}

                    <div className="bg-white rounded-[32px] shadow-lg p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Contact Requests

                                </p>

                                <h2 className="text-4xl font-bold mt-2 text-[#2D1B14]">

                                    {analytics.contactRequests}

                                </h2>

                            </div>

                            <div className="bg-[#FFF4CC] p-4 rounded-2xl">

                                <Phone
                                    className="text-[#2D1B14]"
                                    size={32}
                                />

                            </div>

                        </div>

                    </div>

                    {/* Demo */}

                    <div className="bg-white rounded-[32px] shadow-lg p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Demo Requests

                                </p>

                                <h2 className="text-4xl font-bold mt-2 text-[#2D1B14]">

                                    {analytics.demoRequests}

                                </h2>

                            </div>

                            <div className="bg-[#FFF4CC] p-4 rounded-2xl">

                                <MonitorPlay
                                    className="text-[#2D1B14]"
                                    size={32}
                                />

                            </div>

                        </div>

                    </div>

                    {/* Growth */}

                    <div className="bg-white rounded-[32px] shadow-lg p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Growth Rate

                                </p>

                                <h2 className="text-4xl font-bold mt-2 text-[#2D1B14]">

                                    {analytics.growthRate}%

                                </h2>

                            </div>

                            <div className="bg-[#FFF4CC] p-4 rounded-2xl">

                                <TrendingUp
                                    className="text-[#2D1B14]"
                                    size={32}
                                />

                            </div>

                        </div>

                    </div>

                </div>
                {/* Charts */}

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                    {/* Bar Chart */}

                    <div className="bg-white rounded-[32px] shadow-lg p-6">

                        <h2 className="text-2xl font-bold text-[#2D1B14] mb-6">

                            Lead Performance

                        </h2>

                        <div className="h-80">

                            <ResponsiveContainer width="100%" height="100%">

                                <BarChart data={chartData}>

                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#F3F4F6"
                                    />

                                    <XAxis
                                        dataKey="name"
                                        tick={{
                                            fill: "#2D1B14"
                                        }}
                                    />

                                    <YAxis
                                        tick={{
                                            fill: "#2D1B14"
                                        }}
                                    />

                                    <Tooltip />

                                    <Bar
                                        dataKey="value"
                                        fill="#F4C430"
                                        radius={[10, 10, 0, 0]}
                                    />

                                </BarChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                    {/* Pie Chart */}

                    <div className="bg-white rounded-[32px] shadow-lg p-6">

                        <h2 className="text-2xl font-bold text-[#2D1B14] mb-6">

                            Lead Distribution

                        </h2>

                        <div className="h-80">

                            <ResponsiveContainer width="100%" height="100%">

                                <PieChart>

                                    <Pie
                                        data={chartData}
                                        dataKey="value"
                                        nameKey="name"
                                        outerRadius={100}
                                        label
                                    >

                                        {chartData.map(
                                            (
                                                entry,
                                                index
                                            ) => (

                                                <Cell
                                                    key={index}
                                                    fill={
                                                        COLORS[
                                                        index %
                                                        COLORS.length
                                                        ]
                                                    }
                                                />

                                            )
                                        )}

                                    </Pie>

                                    <Tooltip />

                                    <Legend />

                                </PieChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                </div>

                {/* Insights */}

                <div className="bg-white rounded-[32px] shadow-lg p-6">

                    <h2 className="text-2xl font-bold text-[#2D1B14] mb-6">

                        Insights

                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-[#FFF8E1] rounded-2xl p-5">

                            <h3 className="font-bold text-[#2D1B14]">

                                Total Leads

                            </h3>

                            <p className="text-gray-600 mt-2">

                                You have received{" "}

                                <span className="font-semibold">

                                    {analytics.totalLeads}

                                </span>

                                {" "}leads in total.

                            </p>

                        </div>

                        <div className="bg-[#FFF8E1] rounded-2xl p-5">

                            <h3 className="font-bold text-[#2D1B14]">

                                Contact Requests

                            </h3>

                            <p className="text-gray-600 mt-2">

                                Contact enquiries received:{" "}

                                <span className="font-semibold">

                                    {analytics.contactRequests}

                                </span>

                            </p>

                        </div>

                        <div className="bg-[#FFF8E1] rounded-2xl p-5">

                            <h3 className="font-bold text-[#2D1B14]">

                                Growth Trend

                            </h3>

                            <p className="text-gray-600 mt-2">

                                Current growth rate:{" "}

                                <span className="font-semibold">

                                    {analytics.growthRate}%

                                </span>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </AdminLayout>

    );

}

export default Analytics;