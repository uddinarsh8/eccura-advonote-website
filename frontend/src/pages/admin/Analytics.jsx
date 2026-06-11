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

    const data = [

        {
            name: "Leads",
            value: 10
        },

        {
            name: "Contact",
            value: 6
        },

        {
            name: "Demo",
            value: 4
        }

    ];

    const COLORS = [
        "#2563eb",
        "#16a34a",
        "#9333ea"
    ];

    return (

        <AdminLayout>

            <div className="space-y-8">

                {/* Header */}

                <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">

                    <h1 className="text-3xl sm:text-4xl font-bold">

                        Analytics Dashboard

                    </h1>

                    <p className="mt-2 text-blue-100">

                        Monitor platform growth and customer engagement.

                    </p>

                </div>

                {/* KPI Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Total Leads

                                </p>

                                <h2 className="text-4xl font-bold mt-2">

                                    10

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

                                    6

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

                                    4

                                </h2>

                            </div>

                            <div className="bg-purple-100 p-4 rounded-2xl">

                                <MonitorPlay
                                    className="text-purple-600"
                                    size={32}
                                />

                            </div>

                        </div>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Growth Rate

                                </p>

                                <h2 className="text-4xl font-bold mt-2">

                                    +18%

                                </h2>

                            </div>

                            <div className="bg-orange-100 p-4 rounded-2xl">

                                <TrendingUp
                                    className="text-orange-600"
                                    size={32}
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Charts */}

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                    {/* Bar Chart */}

                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <h2 className="text-2xl font-bold mb-6">

                            Lead Performance

                        </h2>

                        <div className="h-80">

                            <ResponsiveContainer>

                                <BarChart data={data}>

                                    <CartesianGrid strokeDasharray="3 3" />

                                    <XAxis dataKey="name" />

                                    <YAxis />

                                    <Tooltip />

                                    <Bar
                                        dataKey="value"
                                        fill="#2563eb"
                                        radius={[8, 8, 0, 0]}
                                    />

                                </BarChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                    {/* Pie Chart */}

                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <h2 className="text-2xl font-bold mb-6">

                            Lead Distribution

                        </h2>

                        <div className="h-80">

                            <ResponsiveContainer>

                                <PieChart>

                                    <Pie
                                        data={data}
                                        dataKey="value"
                                        nameKey="name"
                                        outerRadius={100}
                                        label
                                    >

                                        {data.map((entry, index) => (

                                            <Cell
                                                key={index}
                                                fill={COLORS[index]}
                                            />

                                        ))}

                                    </Pie>

                                    <Tooltip />

                                    <Legend />

                                </PieChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                </div>

                {/* Insights */}

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <h2 className="text-2xl font-bold mb-6">

                        Insights

                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-blue-50 rounded-2xl p-5">

                            <h3 className="font-bold text-blue-700">

                                Best Channel

                            </h3>

                            <p className="text-gray-600 mt-2">

                                Contact forms generate the highest engagement.

                            </p>

                        </div>

                        <div className="bg-green-50 rounded-2xl p-5">

                            <h3 className="font-bold text-green-700">

                                Conversion Opportunity

                            </h3>

                            <p className="text-gray-600 mt-2">

                                Demo requests show strong purchase intent.

                            </p>

                        </div>

                        <div className="bg-purple-50 rounded-2xl p-5">

                            <h3 className="font-bold text-purple-700">

                                Growth Trend

                            </h3>

                            <p className="text-gray-600 mt-2">

                                Overall lead acquisition is improving steadily.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </AdminLayout>

    );

}

export default Analytics;