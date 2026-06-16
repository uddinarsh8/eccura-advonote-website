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
    const [loading, setLoading] =
        useState(true);

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

                <div
                    className="
                        bg-[#F4C430]
                        rounded-[32px]
                        p-6 md:p-8
                        shadow-lg
                    "
                >

                    <h1
                        className="
                            text-3xl md:text-4xl
                            font-bold
                            text-[#2D1B14]
                        "
                    >

                        Leads Management

                    </h1>

                    <p
                        className="
                            mt-2
                            text-[#5C4634]
                        "
                    >

                        Manage enquiries and
                        track potential customers.

                    </p>

                </div>

                {/* Stats */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-6
                    "
                >

                    {/* Total */}

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

                                <p className="text-[#5C4634]">

                                    Total Leads

                                </p>

                                <h2
                                    className="
                                        text-4xl
                                        font-bold
                                        text-[#2D1B14]
                                        mt-2
                                    "
                                >

                                    {leads.length}

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

                    {/* Contact */}

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

                                <p className="text-[#5C4634]">

                                    Contact Requests

                                </p>

                                <h2
                                    className="
                                        text-4xl
                                        font-bold
                                        text-[#2D1B14]
                                        mt-2
                                    "
                                >

                                    {

                                        leads.filter(
                                            lead =>
                                                lead.source ===
                                                "Contact"
                                        ).length

                                    }

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

                    {/* Demo */}

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

                                <p className="text-[#5C4634]">

                                    Demo Requests

                                </p>

                                <h2
                                    className="
                                        text-4xl
                                        font-bold
                                        text-[#2D1B14]
                                        mt-2
                                    "
                                >

                                    {

                                        leads.filter(
                                            lead =>
                                                lead.source ===
                                                "Demo"
                                        ).length

                                    }

                                </h2>

                            </div>

                            <div
                                className="
                                    bg-white
                                    p-4
                                    rounded-2xl
                                "
                            >

                                <Mail
                                    size={32}
                                    className="
                                        text-[#2D1B14]
                                    "
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Search */}

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
                            md:flex-row
                            gap-4
                        "
                    >

                        <div
                            className="
                                relative
                                flex-1
                            "
                        >

                            <Search
                                size={20}
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-400
                                "
                            />

                            <input
                                type="text"
                                value={search}
                                placeholder="
                                    Search by name,
                                    email or phone...
                                "
                                onChange={(e) =>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                                className="
                                    w-full
                                    border
                                    rounded-2xl
                                    py-4
                                    pl-12
                                    pr-4
                                    focus:ring-2
                                    focus:ring-[#F4C430]
                                    outline-none
                                "
                            />

                        </div>

                        <button
                            onClick={searchLeads}
                            className="
                                bg-[#F4C430]
                                hover:bg-[#E8B923]
                                text-[#2D1B14]
                                font-semibold
                                px-8
                                py-4
                                rounded-2xl
                                transition
                            "
                        >

                            Search

                        </button>

                    </div>

                </div>

                {/* Leads */}

                <div
                    className="
                        bg-white
                        rounded-[32px]
                        shadow-lg
                        p-6
                    "
                >

                    <h2
                        className="
                            text-2xl
                            font-bold
                            text-[#2D1B14]
                            mb-6
                        "
                    >

                        Recent Leads

                    </h2>

                    {loading ? (

                        <div
                            className="
                                text-center
                                py-12
                            "
                        >

                            Loading...

                        </div>

                    ) : leads.length === 0 ? (

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

                        </div>

                    ) : (

                        <>
                            {/* Desktop */}

                            <div className="hidden md:block overflow-x-auto">

                                <table className="w-full">

                                    <thead>

                                        <tr
                                            className="
                                                bg-[#FFF8E1]
                                            "
                                        >

                                            <th className="p-4 text-left">Name</th>
                                            <th className="p-4 text-left">Email</th>
                                            <th className="p-4 text-left">Phone</th>
                                            <th className="p-4 text-left">Source</th>
                                            <th className="p-4 text-left">Status</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {leads.map((lead) => (

                                            <tr
                                                key={lead.id}
                                                className="
                                                    border-b
                                                    hover:bg-[#FFFDF7]
                                                "
                                            >

                                                <td className="p-4">{lead.name}</td>
                                                <td className="p-4">{lead.email}</td>
                                                <td className="p-4">{lead.phone}</td>

                                                <td className="p-4">

                                                    <span
                                                        className="
                                                            bg-[#F4C430]
                                                            text-[#2D1B14]
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-sm
                                                        "
                                                    >

                                                        {lead.source}

                                                    </span>

                                                </td>

                                                <td className="p-4">

                                                    <span
                                                        className="
                                                            bg-[#2D1B14]
                                                            text-white
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-sm
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

                            {/* Mobile */}

                            <div className="md:hidden space-y-4">

                                {leads.map((lead) => (

                                    <div
                                        key={lead.id}
                                        className="
                                            border
                                            rounded-2xl
                                            p-4
                                            space-y-3
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

                                        <p>{lead.email}</p>
                                        <p>{lead.phone}</p>

                                        <div className="flex gap-2 flex-wrap">

                                            <span
                                                className="
                                                    bg-[#F4C430]
                                                    text-[#2D1B14]
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    text-sm
                                                "
                                            >

                                                {lead.source}

                                            </span>

                                            <span
                                                className="
                                                    bg-[#2D1B14]
                                                    text-white
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    text-sm
                                                "
                                            >

                                                {lead.status}

                                            </span>

                                        </div>

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

export default Leads;