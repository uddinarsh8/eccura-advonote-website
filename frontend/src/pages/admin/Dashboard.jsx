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

                <div
                    className="
                        bg-[#F4C430]
                        rounded-[32px]
                        p-6
                        md:p-8
                        shadow-lg
                    "
                >

                    <h1
                        className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2D1B14]
                        "
                    >

                        Welcome back,
                        {" "}
                        {admin?.name || "Admin"}
                        {" "}
                        👋

                    </h1>

                    <p
                        className="
                            mt-3
                            text-[#5C4634]
                            text-base
                            md:text-lg
                        "
                    >

                        Here's an overview of your
                        Advonote platform.

                    </p>

                </div>

                {/* Stats */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        xl:grid-cols-3
                        gap-6
                    "
                >

                    {/* Total Leads */}

                    <div
                        className="
                            bg-[#F4C430]
                            rounded-[32px]
                            shadow-lg
                            p-6
                        "
                    >

                        <div
                            className="
                                flex
                                justify-between
                                items-center
                            "
                        >

                            <div>

                                <p
                                    className="
                                        text-[#5C4634]
                                    "
                                >

                                    Total Leads

                                </p>

                                <h2
                                    className="
                                        text-4xl
                                        font-bold
                                        mt-2
                                        text-[#2D1B14]
                                    "
                                >

                                    {stats.totalLeads}

                                </h2>

                            </div>

                            <div
                                className="
                                    bg-white
                                    p-4
                                    rounded-2xl
                                "
                            >

                                <Users
                                    size={32}
                                    className="
                                        text-[#2D1B14]
                                    "
                                />

                            </div>

                        </div>

                    </div>

                    {/* Contact Requests */}

                    <div
                        className="
                            bg-[#F4C430]
                            rounded-[32px]
                            shadow-lg
                            p-6
                        "
                    >

                        <div
                            className="
                                flex
                                justify-between
                                items-center
                            "
                        >

                            <div>

                                <p
                                    className="
                                        text-[#5C4634]
                                    "
                                >

                                    Contact Requests

                                </p>

                                <h2
                                    className="
                                        text-4xl
                                        font-bold
                                        mt-2
                                        text-[#2D1B14]
                                    "
                                >

                                    {stats.contactRequests}

                                </h2>

                            </div>

                            <div
                                className="
                                    bg-white
                                    p-4
                                    rounded-2xl
                                "
                            >

                                <Phone
                                    size={32}
                                    className="
                                        text-[#2D1B14]
                                    "
                                />

                            </div>

                        </div>

                    </div>

                    {/* Demo Requests */}

                    <div
                        className="
                            bg-[#F4C430]
                            rounded-[32px]
                            shadow-lg
                            p-6
                        "
                    >

                        <div
                            className="
                                flex
                                justify-between
                                items-center
                            "
                        >

                            <div>

                                <p
                                    className="
                                        text-[#5C4634]
                                    "
                                >

                                    Demo Requests

                                </p>

                                <h2
                                    className="
                                        text-4xl
                                        font-bold
                                        mt-2
                                        text-[#2D1B14]
                                    "
                                >

                                    {stats.demoRequests}

                                </h2>

                            </div>

                            <div
                                className="
                                    bg-white
                                    p-4
                                    rounded-2xl
                                "
                            >

                                <MonitorPlay
                                    size={32}
                                    className="
                                        text-[#2D1B14]
                                    "
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Recent Leads */}

                <div
                    className="
                        bg-white
                        rounded-[32px]
                        shadow-lg
                        p-6
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-row
                            justify-between
                            items-start
                            sm:items-center
                            gap-4
                            mb-6
                        "
                    >

                        <h2
                            className="
                                text-2xl
                                md:text-3xl
                                font-bold
                                text-[#2D1B14]
                            "
                        >

                            Recent Leads

                        </h2>

                        <span
                            className="
                                text-[#5C4634]
                            "
                        >

                            Latest enquiries

                        </span>

                    </div>

                    {loading ? (

                        <div
                            className="
                                text-center
                                py-12
                                text-[#5C4634]
                            "
                        >

                            Loading...

                        </div>

                    ) : stats.recentLeads.length === 0 ? (

                        <div
                            className="
                                text-center
                                py-12
                            "
                        >

                            <div className="text-6xl">

                                📭

                            </div>

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                    mt-4
                                    text-[#2D1B14]
                                "
                            >

                                No Leads Found

                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-[#5C4634]
                                "
                            >

                                Leads will appear here.

                            </p>

                        </div>

                    ) : (

                        <>
                            {/* Desktop Table */}

                            <div className="hidden md:block overflow-x-auto">

                                <table className="w-full">

                                    <thead>

                                        <tr
                                            className="
                                                bg-[#FFF8E1]
                                            "
                                        >

                                            <th className="p-4 text-left">

                                                Name

                                            </th>

                                            <th className="p-4 text-left">

                                                Email

                                            </th>

                                            <th className="p-4 text-left">

                                                Phone

                                            </th>

                                            <th className="p-4 text-left">

                                                Status

                                            </th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {stats.recentLeads.map((lead) => (

                                            <tr
                                                key={lead.id}
                                                className="
                                                    border-b
                                                    hover:bg-[#FFFDF7]
                                                "
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
                                                        className="
                                                            bg-[#F4C430]
                                                            text-[#2D1B14]
                                                            px-4
                                                            py-1
                                                            rounded-full
                                                            text-sm
                                                            font-semibold
                                                        "
                                                    >

                                                        {lead.status}

                                                    </span>

                                                </td>

                                            </tr>

                                        ))}

                                    </tbody>

                                </table>

                            </div>

                            {/* Mobile Cards */}

                            <div className="md:hidden space-y-4">

                                {stats.recentLeads.map((lead) => (

                                    <div
                                        key={lead.id}
                                        className="
                                            border
                                            rounded-2xl
                                            p-4
                                            space-y-2
                                        "
                                    >

                                        <h3
                                            className="
                                                font-bold
                                                text-[#2D1B14]
                                            "
                                        >

                                            {lead.name}

                                        </h3>

                                        <p>

                                            {lead.email}

                                        </p>

                                        <p>

                                            {lead.phone}

                                        </p>

                                        <span
                                            className="
                                                inline-block
                                                bg-[#F4C430]
                                                text-[#2D1B14]
                                                px-3
                                                py-1
                                                rounded-full
                                                text-sm
                                                font-semibold
                                            "
                                        >

                                            {lead.status}

                                        </span>

                                    </div>

                                ))}

                            </div>

                        </>

                    )}

                </div>

            </div>

        </AdminLayout>

    );

}

export default Dashboard;