import { useEffect, useState } from "react";
import api from "../../services/api";

function Calendar() {

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

    const [cases, setCases] =
        useState([]);

    const [search, setSearch] =
        useState("");

    useEffect(() => {

        const fetchCases = async () => {

            try {

                const response =
                    await api.get(
                        `/cases/calendar/${advocate.id}`
                    );

                setCases(
                    response.data
                );

            } catch (error) {

                console.log(error);

            }

        };

        if (advocate.id) {

            fetchCases();

        }

    }, []);

    const today = new Date();

    const upcomingHearings =
        cases.filter((item) => {

            return (
                new Date(
                    item.hearingDate
                ) >= today
            );

        });

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

            <div className="mb-8">

                <h1 className="text-4xl font-bold">

                    📅 Hearing Calendar

                </h1>

                <p className="text-gray-500 mt-2">

                    Track all your upcoming hearings.

                </p>

            </div>

            {/* Statistics */}

            <div className="grid md:grid-cols-3 gap-6 mb-8">

                <div className="bg-blue-600 text-white rounded-2xl p-6 shadow">

                    <p>Total Hearings</p>

                    <h2 className="text-4xl font-bold mt-2">

                        {cases.length}

                    </h2>

                </div>

                <div className="bg-green-600 text-white rounded-2xl p-6 shadow">

                    <p>Upcoming</p>

                    <h2 className="text-4xl font-bold mt-2">

                        {upcomingHearings.length}

                    </h2>

                </div>

                <div className="bg-purple-600 text-white rounded-2xl p-6 shadow">

                    <p>Today's Date</p>

                    <h2 className="text-xl font-bold mt-2">

                        {today.toLocaleDateString()}

                    </h2>

                </div>

            </div>

            {/* Search */}

            <div className="mb-8">

                <input
                    type="text"
                    placeholder="🔍 Search hearings..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    className="w-full border rounded-2xl p-4 shadow-sm"
                />

            </div>

            {/* Empty State */}

            {filteredCases.length === 0 ? (

                <div className="bg-white rounded-2xl shadow p-12 text-center">

                    <div className="text-6xl mb-4">

                        📅

                    </div>

                    <h2 className="text-2xl font-bold">

                        No Hearings Found

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Add cases to view hearing schedules.

                    </p>

                </div>

            ) : (

                <div className="space-y-6">

                    {filteredCases.map((item) => {

                        const hearingDate =
                            new Date(
                                item.hearingDate
                            );

                        const isUpcoming =
                            hearingDate >= today;

                        return (

                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
                            >

                                <div className="flex flex-col md:flex-row justify-between items-start">

                                    <div>

                                        <div className="flex items-center gap-3 mb-3">

                                            <h2 className="text-2xl font-bold">

                                                {item.petitioner}
                                                {" vs "}
                                                {item.respondent}

                                            </h2>

                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                    isUpcoming
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-gray-100 text-gray-700"
                                                }`}
                                            >

                                                {isUpcoming
                                                    ? "Upcoming"
                                                    : "Completed"}

                                            </span>

                                        </div>

                                        <p className="text-gray-600 mb-2">

                                            🏛️ {item.courtName}

                                        </p>

                                        <p className="text-gray-600 mb-2">

                                            📂 Case No:
                                            {" "}
                                            {item.caseNumber}

                                        </p>

                                        <p className="text-gray-600">

                                            📚 {item.caseType || "General"}

                                        </p>

                                    </div>

                                    <div className="mt-4 md:mt-0">

                                        <div className="bg-blue-50 text-blue-700 px-5 py-4 rounded-2xl text-center">

                                            <p className="text-sm">

                                                Hearing Date

                                            </p>

                                            <p className="font-bold text-lg">

                                                {hearingDate.toLocaleDateString()}

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            )}

        </div>

    );

}

export default Calendar;