import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Search,
    Plus,
    Pencil,
    Trash2,
    Scale
} from "lucide-react";

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

    } catch {

        advocate = {};

    }

    const [cases, setCases] = useState([]);
    const [search, setSearch] = useState("");

    const fetchCases = async () => {

        try {

            if (!advocate.id) return;

            const response =
                await api.get(
                    `/cases/${advocate.id}`
                );

            setCases(response.data);

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

        if (!confirmDelete) return;

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

                            My Cases

                        </h1>

                        <p className="text-black/70">

                            Manage your legal matters

                        </p>

                    </div>

                </div>

            </div>

            <div className="max-w-6xl mx-auto p-5">

                {/* Statistics */}

                <div className="grid grid-cols-2 gap-4 mb-6">

                    <div className="
                        bg-white
                        rounded-3xl
                        shadow
                        p-5
                    ">

                        <p className="text-gray-500">

                            Total Cases

                        </p>

                        <h2 className="text-4xl font-bold">

                            {cases.length}

                        </h2>

                    </div>

                    <div className="
                        bg-green-100
                        rounded-3xl
                        shadow
                        p-5
                    ">

                        <p className="text-green-700">

                            Search Results

                        </p>

                        <h2 className="text-4xl font-bold text-green-700">

                            {filteredCases.length}

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
                        placeholder="Search cases..."
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
                            shadow
                            py-4
                            pl-12
                            pr-4
                            outline-none
                        "
                    />

                </div>

                {/* Add Case */}

                <button
                    onClick={() =>
                        navigate(
                            "/advocate/add-case"
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

                    Add New Case

                </button>

                {/* Empty State */}

                {filteredCases.length === 0 ? (

                    <div className="
                        bg-white
                        rounded-3xl
                        shadow
                        p-16
                        text-center
                    ">

                        <Scale
                            size={70}
                            className="
                                mx-auto
                                text-[#F4C430]
                                mb-5
                            "
                        />

                        <h2 className="text-2xl font-bold">

                            No Cases Found

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Start by adding your first case.

                        </p>

                    </div>

                ) : (

                    <div className="space-y-5">

                        {filteredCases.map((item) => (

                            <div
                                key={item.id}
                                className="
                                    bg-white
                                    rounded-3xl
                                    shadow-md
                                    p-6
                                "
                            >

                                <div className="
                                    flex
                                    flex-wrap
                                    justify-between
                                    gap-4
                                ">

                                    <div>

                                        <h2 className="
                                            text-xl
                                            font-bold
                                        ">

                                            {item.petitioner}
                                            {" vs "}
                                            {item.respondent}

                                        </h2>

                                        <p className="
                                            text-gray-500
                                            mt-1
                                        ">

                                            Case No:
                                            {" "}
                                            {item.caseNumber}

                                        </p>

                                    </div>

                                    <span className="
                                        bg-blue-100
                                        text-blue-700
                                        px-4
                                        py-2
                                        rounded-full
                                        text-sm
                                        font-semibold
                                        h-fit
                                    ">

                                        {item.priority ||
                                            "Regular"}

                                    </span>

                                </div>

                                <div className="
                                    mt-5
                                    space-y-2
                                    text-gray-700
                                ">

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

                                <div className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    gap-3
                                    mt-6
                                ">

                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/advocate/edit-case/${item.id}`
                                            )
                                        }
                                        className="
                                            flex-1
                                            bg-blue-600
                                            text-white
                                            py-3
                                            rounded-2xl
                                            font-semibold
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                        "
                                    >

                                        <Pencil size={18} />

                                        Edit

                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(
                                                item.id
                                            )
                                        }
                                        className="
                                            flex-1
                                            bg-red-600
                                            text-white
                                            py-3
                                            rounded-2xl
                                            font-semibold
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                        "
                                    >

                                        <Trash2 size={18} />

                                        Delete

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}

export default MyCases;