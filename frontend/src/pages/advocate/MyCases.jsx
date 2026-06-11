import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function MyCases() {

    const navigate = useNavigate();

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

        console.log(
            "Invalid advocate data"
        );

    }

    const [cases, setCases] = useState([]);
    const [search, setSearch] =
        useState("");

    const fetchCases = async () => {

        try {

            if (!advocate.id) {

                return;

            }

            const response =
                await api.get(
                    `/cases/${advocate.id}`
                );

            setCases(
                response.data
            );

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchCases();

    }, []);

    const handleDelete = async (id) => {

        const confirmDelete =
            window.confirm(
                "Delete this case?"
            );

        if (!confirmDelete) {

            return;

        }

        try {

            await api.delete(
                `/cases/${id}`
            );

            alert(
                "Case Deleted Successfully"
            );

            fetchCases();

        } catch (error) {

            console.log(error);

            alert(
                "Failed to delete case"
            );

        }

    };

    const filteredCases =
        cases.filter((item) => {

            const query =
                search.toLowerCase();

            return (

                item.petitioner
                    ?.toLowerCase()
                    .includes(query)

                ||

                item.respondent
                    ?.toLowerCase()
                    .includes(query)

                ||

                item.caseNumber
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

                        ⚖️ My Cases

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Manage and track all your cases.

                    </p>

                </div>

                <button
                    onClick={() =>
                        navigate(
                            "/advocate/add-case"
                        )
                    }
                    className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow"
                >

                    + Add Case

                </button>

            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-2 gap-6 mb-8">

                <div className="bg-blue-600 text-white rounded-2xl shadow p-6">

                    <p>

                        Total Cases

                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        {cases.length}

                    </h2>

                </div>

                <div className="bg-green-600 text-white rounded-2xl shadow p-6">

                    <p>

                        Search Results

                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        {filteredCases.length}

                    </h2>

                </div>

            </div>

            {/* Search */}

            <div className="mb-8">

                <input
                    type="text"
                    placeholder="🔍 Search by petitioner, respondent or case number..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    className="w-full border rounded-2xl p-4 shadow-sm"
                />

            </div>

            {/* Cases */}

            {filteredCases.length === 0 ? (

                <div className="bg-white rounded-2xl shadow p-12 text-center">

                    <div className="text-6xl mb-4">

                        ⚖️

                    </div>

                    <h2 className="text-2xl font-bold">

                        No Cases Found

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Start by adding your first case.

                    </p>

                </div>

            ) : (

                <div className="grid md:grid-cols-2 gap-6">

                    {filteredCases.map((item) => (

                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
                        >

                            <div className="flex justify-between items-start mb-4">

                                <div>

                                    <h2 className="text-xl font-bold">

                                        {item.petitioner}
                                        {" vs "}
                                        {item.respondent}

                                    </h2>

                                    <p className="text-gray-500">

                                        Case No:
                                        {" "}
                                        {item.caseNumber}

                                    </p>

                                </div>

                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                                    {item.priority ||
                                        "Regular"}

                                </span>

                            </div>

                            <div className="space-y-2 text-gray-700">

                                <p>

                                    🏛️
                                    {" "}
                                    {item.courtName}

                                </p>

                                <p>

                                    📅
                                    {" "}
                                    {item.hearingDate
                                        ?.split("T")[0]}

                                </p>

                                <p>

                                    📚
                                    {" "}
                                    {item.caseType ||
                                        "General"}

                                </p>

                            </div>

                            <div className="flex gap-3 mt-6">

                                <button
                                    onClick={() =>
                                        navigate(
                                            `/advocate/edit-case/${item.id}`
                                        )
                                    }
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
                                >

                                    ✏️ Edit

                                </button>

                                <button
                                    onClick={() =>
                                        handleDelete(
                                            item.id
                                        )
                                    }
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold"
                                >

                                    🗑️ Delete

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}

export default MyCases;