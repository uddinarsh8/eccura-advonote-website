import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Search,
    Plus,
    User,
    Phone,
    Mail,
    Users
} from "lucide-react";

function Clients() {

    const navigate = useNavigate();

    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("");

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

    } catch {

        advocate = {};

    }

    useEffect(() => {

        const fetchClients = async () => {

            try {

                if (!advocate.id) return;

                const response =
                    await api.get(
                        `/clients/${advocate.id}`
                    );

                setClients(
                    response.data
                );

            } catch (error) {

                console.log(error);

            }

        };

        fetchClients();

    }, []);

    const filteredClients =
        clients.filter((client) => {

            const query =
                search.toLowerCase();

            return (

                client.name
                    ?.toLowerCase()
                    .includes(query)

                ||

                client.mobile
                    ?.includes(query)

                ||

                client.email
                    ?.toLowerCase()
                    .includes(query)

            );

        });

    return (

        <div className="min-h-screen bg-[#F3F3F3]">

            {/* Header */}

            <div className="bg-[#F4C430] px-5 py-5 shadow">

                <div className="flex items-center gap-4">

                    <button
                        onClick={() => navigate(-1)}
                        className="
                            w-14 h-14
                            bg-white
                            rounded-2xl
                            shadow-md
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <ArrowLeft size={28} />

                    </button>

                    <div>

                        <h1 className="text-3xl font-bold">

                            Clients

                        </h1>

                        <p className="text-black/70">

                            Manage your client relationships

                        </p>

                    </div>

                </div>

            </div>

            <div className="max-w-6xl mx-auto p-5">

                {/* Stats */}

                <div className="grid grid-cols-2 gap-4 mb-6">

                    <div className="
                        bg-white
                        rounded-3xl
                        shadow-md
                        p-5
                    ">

                        <p className="text-gray-500">

                            Total Clients

                        </p>

                        <h2 className="text-4xl font-bold">

                            {clients.length}

                        </h2>

                    </div>

                    <div className="
                        bg-green-100
                        rounded-3xl
                        shadow-md
                        p-5
                    ">

                        <p className="text-green-700">

                            Search Results

                        </p>

                        <h2 className="
                            text-4xl
                            font-bold
                            text-green-700
                        ">

                            {filteredClients.length}

                        </h2>

                    </div>

                </div>

                {/* Search */}

                <div className="relative mb-6">

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
                        placeholder="Search clients..."
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                        className="
                            w-full
                            bg-white
                            rounded-2xl
                            shadow-md
                            py-4
                            pl-12
                            pr-4
                            outline-none
                        "
                    />

                </div>

                {/* Add Client */}

                <button
                    onClick={() =>
                        navigate(
                            "/advocate/add-client"
                        )
                    }
                    className="
                        w-full
                        mb-6
                        bg-[#F4C430]
                        py-4
                        rounded-2xl
                        font-bold
                        shadow-md
                        flex
                        items-center
                        justify-center
                        gap-2
                    "
                >

                    <Plus size={22} />

                    Add New Client

                </button>

                {/* Empty State */}

                {filteredClients.length === 0 ? (

                    <div className="
                        bg-white
                        rounded-3xl
                        shadow-md
                        p-16
                        text-center
                    ">

                        <Users
                            size={70}
                            className="
                                mx-auto
                                text-[#F4C430]
                                mb-5
                            "
                        />

                        <h2 className="text-2xl font-bold">

                            No Clients Found

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Start by adding your first client.

                        </p>

                    </div>

                ) : (

                    <div className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-5
                    ">

                        {filteredClients.map((client) => (

                            <div
                                key={client.id}
                                className="
                                    bg-white
                                    rounded-3xl
                                    shadow-md
                                    p-6
                                "
                            >

                                {/* Avatar */}

                                <div className="
                                    flex
                                    items-center
                                    gap-4
                                    mb-5
                                ">

                                    <div className="
                                        w-16
                                        h-16
                                        rounded-full
                                        bg-[#F4C430]
                                        flex
                                        items-center
                                        justify-center
                                        text-2xl
                                        font-bold
                                    ">

                                        {

                                            client.name

                                                ? client.name
                                                    .charAt(0)
                                                    .toUpperCase()

                                                : <User size={28} />

                                        }

                                    </div>

                                    <div>

                                        <h2 className="
                                            text-xl
                                            font-bold
                                        ">

                                            {client.name}

                                        </h2>

                                        <p className="
                                            text-sm
                                            text-gray-500
                                        ">

                                            Client ID:
                                            {" "}
                                            {client.id}

                                        </p>

                                    </div>

                                </div>

                                {/* Details */}

                                <div className="
                                    space-y-3
                                    text-gray-700
                                ">

                                    <p className="
                                        flex
                                        items-center
                                        gap-2
                                    ">

                                        <Phone size={18} />

                                        {

                                            client.mobile ||

                                            "N/A"

                                        }

                                    </p>

                                    <p className="
                                        flex
                                        items-center
                                        gap-2
                                        break-all
                                    ">

                                        <Mail size={18} />

                                        {

                                            client.email ||

                                            "N/A"

                                        }

                                    </p>

                                    <p>

                                        🏠
                                        {" "}
                                        {

                                            client.address ||

                                            "No address provided"

                                        }

                                    </p>

                                </div>

                                {/* Actions */}

                                <div className="
                                    flex
                                    gap-3
                                    mt-6
                                ">

                                    <a
                                        href={`tel:${client.mobile}`}
                                        className="
                                            flex-1
                                            bg-green-600
                                            hover:bg-green-700
                                            text-white
                                            py-3
                                            rounded-2xl
                                            text-center
                                            font-semibold
                                        "
                                    >

                                        Call

                                    </a>

                                    <a
                                        href={`mailto:${client.email}`}
                                        className="
                                            flex-1
                                            bg-blue-600
                                            hover:bg-blue-700
                                            text-white
                                            py-3
                                            rounded-2xl
                                            text-center
                                            font-semibold
                                        "
                                    >

                                        Email

                                    </a>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}

export default Clients;