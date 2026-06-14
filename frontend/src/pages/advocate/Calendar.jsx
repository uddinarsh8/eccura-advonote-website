import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {
    ArrowLeft,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

function Calendar() {

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
    const [selectedDate, setSelectedDate] =
        useState(new Date());

    const [viewMode, setViewMode] =
        useState("calendar");

    useEffect(() => {

        const fetchCases = async () => {

            try {

                if (!advocate.id) return;

                const response =
                    await api.get(
                        `/cases/calendar/${advocate.id}`
                    );

                setCases(response.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchCases();

    }, []);

    const hearings =
        cases.filter((item) => {

            const hearing =
                new Date(item.hearingDate);

            return (

                hearing.toDateString() ===
                selectedDate.toDateString()

            );

        });

    const hearingDates =
        cases.map((item) =>
            new Date(item.hearingDate)
                .toDateString()
        );

    const changeDate = (days) => {

        const newDate =
            new Date(selectedDate);

        newDate.setDate(
            newDate.getDate() + days
        );

        setSelectedDate(newDate);

    };

    return (

        <div className="min-h-screen bg-[#F3F3F3]">

            {/* Header */}

            <div className="bg-[#F4C430] px-4 md:px-6 py-5 shadow">

                <div className="flex items-center gap-4">

                    <button
                        onClick={() => navigate(-1)}
                        className="
                            w-12 h-12 md:w-14 md:h-14
                            bg-white
                            rounded-2xl
                            shadow-md
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <ArrowLeft size={26} />

                    </button>

                    <h1 className="text-2xl md:text-3xl font-bold">

                        Calendar

                    </h1>

                </div>

            </div>

            <div className="p-4 md:p-6 max-w-7xl mx-auto">

                {/* Top Controls */}

                <div className="
                    flex
                    flex-col
                    md:flex-row
                    md:justify-between
                    md:items-center
                    gap-4
                    mb-6
                ">

                    {/* Month */}

                    <div className="
                        bg-black
                        text-white
                        px-6
                        py-3
                        rounded-2xl
                        w-fit
                    ">

                        <p className="text-3xl font-bold">

                            {

                                selectedDate.toLocaleString(
                                    "default",
                                    {
                                        month: "short"
                                    }
                                )

                            }

                        </p>

                        <p>

                            {

                                selectedDate.getFullYear()

                            }

                        </p>

                    </div>

                    {/* View Toggle */}

                    <div className="
                        flex
                        rounded-full
                        border-2
                        border-[#2E7D32]
                        overflow-hidden
                        self-start
                    ">

                        <button
                            onClick={() =>
                                setViewMode("list")
                            }
                            className={`
                                px-5 md:px-6
                                py-3
                                font-bold
                                transition
                                ${
                                    viewMode === "list"
                                        ? "bg-[#F4C430]"
                                        : "bg-white"
                                }
                            `}
                        >

                            List View

                        </button>

                        <button
                            onClick={() =>
                                setViewMode("calendar")
                            }
                            className={`
                                px-5 md:px-6
                                py-3
                                font-bold
                                transition
                                ${
                                    viewMode === "calendar"
                                        ? "bg-[#2E7D32] text-white"
                                        : "bg-white"
                                }
                            `}
                        >

                            Calendar

                        </button>

                    </div>

                </div>

                {/* Calendar */}

                {viewMode === "calendar" && (

                    <div className="
                        bg-[#F4C430]
                        rounded-3xl
                        shadow-lg
                        p-3 md:p-6
                        mb-8
                    ">

                        <CalendarComponent

                            className="w-full border-none"

                            value={selectedDate}

                            onChange={setSelectedDate}

                            tileContent={({ date }) => {

                                const count =
                                    hearingDates.filter(

                                        hearing =>

                                            hearing ===
                                            date.toDateString()

                                    ).length;

                                return count > 0 ? (

                                    <div className="
                                        flex
                                        justify-center
                                        mt-1
                                    ">

                                        <span className="
                                            w-6 h-6
                                            rounded-full
                                            bg-blue-500
                                            text-white
                                            text-xs
                                            flex
                                            items-center
                                            justify-center
                                        ">

                                            {count}

                                        </span>

                                    </div>

                                ) : null;

                            }}

                        />

                    </div>

                )}

                {/* Hearings Header */}

                <div className="
                    flex
                    flex-col
                    md:flex-row
                    md:justify-between
                    md:items-center
                    gap-4
                    mb-6
                ">

                    <h2 className="text-2xl md:text-3xl font-bold">

                        Hearings: ({hearings.length})

                    </h2>

                    <div className="
                        flex
                        items-center
                        gap-4
                    ">

                        <button
                            onClick={() =>
                                changeDate(-1)
                            }
                        >

                            <ChevronLeft />

                        </button>

                        <span className="
                            text-lg md:text-2xl
                            font-bold
                        ">

                            {

                                selectedDate
                                    .toLocaleDateString(
                                        "en-GB",
                                        {

                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"

                                        }
                                    )

                            }

                        </span>

                        <button
                            onClick={() =>
                                changeDate(1)
                            }
                        >

                            <ChevronRight />

                        </button>

                    </div>

                </div>

                {/* Hearing Table */}

                <div className="
                    bg-white
                    rounded-3xl
                    shadow-lg
                    overflow-x-auto
                ">

                    <div className="
                        min-w-[700px]
                        grid
                        grid-cols-4
                        font-bold
                        p-4
                        border-b
                    ">

                        <p>Prev Date</p>

                        <p>Case No</p>

                        <p>Court</p>

                        <p>Case Title</p>

                    </div>

                    {

                        hearings.length === 0 ? (

                            <div className="
                                p-10
                                text-center
                                text-gray-500
                            ">

                                There are no cases on this date.

                            </div>

                        ) : (

                            hearings.map((item) => (

                                <div
                                    key={item.id}
                                    className="
                                        min-w-[700px]
                                        grid
                                        grid-cols-4
                                        p-4
                                        border-b
                                    "
                                >

                                    <p>

                                        {

                                            item.hearingDate
                                                ?.split("T")[0]

                                        }

                                    </p>

                                    <p>

                                        {item.caseNumber}

                                    </p>

                                    <p>

                                        {item.courtName}

                                    </p>

                                    <p>

                                        {item.petitioner}
                                        {" vs "}
                                        {item.respondent}

                                    </p>

                                </div>

                            ))

                        )

                    }

                </div>

            </div>

        </div>

    );

}

export default Calendar;