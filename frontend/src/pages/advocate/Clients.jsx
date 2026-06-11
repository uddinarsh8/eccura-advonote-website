import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function Clients() {

    const navigate = useNavigate();

    const [clients, setClients] =
        useState([]);

    const [search, setSearch] =
        useState("");

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

        console.log(error);

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

        <div className="min-h-screen bg-gray-100 p-6">

            {/* Header */}

            <div className="flex flex-col md:flex-row justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        👥 Clients

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Manage all your clients in one place.

                    </p>

                </div>

                <button
                    onClick={() =>
                        navigate(
                            "/advocate/add-client"
                        )
                    }
                    className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow"
                >

                    + Add Client

                </button>

            </div>

            {/* Stats */}

            <div className="bg-blue-600 text-white rounded-2xl shadow p-6 mb-8">

                <p>

                    Total Clients

                </p>

                <h2 className="text-4xl font-bold mt-2">

                    {clients.length}

                </h2>

            </div>

            {/* Search */}

            <div className="mb-8">

                <input
                    type="text"
                    placeholder="🔍 Search by name, mobile or email..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    className="w-full border rounded-2xl p-4 shadow-sm"
                />

            </div>

            {/* Clients */}

            {filteredClients.length === 0 ? (

                <div className="bg-white rounded-2xl shadow p-12 text-center">

                    <div className="text-6xl mb-4">

                        👥

                    </div>

                    <h2 className="text-2xl font-bold">

                        No Clients Found

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Start by adding your first client.

                    </p>

                </div>

            ) : (

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {filteredClients.map((client) => (

                        <div
                            key={client.id}
                            className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
                        >

                            {/* Avatar */}

                            <div className="flex items-center mb-4">

                                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mr-4">

                                    {client.name
                                        ?.charAt(0)
                                        ?.toUpperCase()}

                                </div>

                                <div>

                                    <h2 className="text-xl font-bold">

                                        {client.name}

                                    </h2>

                                    <p className="text-gray-500">

                                        Client ID:
                                        {" "}
                                        {client.id}

                                    </p>

                                </div>

                            </div>

                            {/* Details */}

                            <div className="space-y-3 text-gray-700">

                                <p>

                                    📞
                                    {" "}
                                    {client.mobile ||
                                        "N/A"}

                                </p>

                                <p>

                                    ✉️
                                    {" "}
                                    {client.email ||
                                        "N/A"}

                                </p>

                                <p>

                                    🏠
                                    {" "}
                                    {client.address ||
                                        "No address provided"}

                                </p>

                            </div>

                            {/* Quick Actions */}

                            <div className="mt-6 flex gap-3">

                                <a
                                    href={`tel:${client.mobile}`}
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-center font-semibold"
                                >

                                    Call

                                </a>

                                <a
                                    href={`mailto:${client.email}`}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-center font-semibold"
                                >

                                    Email

                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}

export default Clients;