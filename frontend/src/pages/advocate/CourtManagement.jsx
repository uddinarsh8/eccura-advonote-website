import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Plus,
    Minus
} from "lucide-react";

function CourtManagement() {

    const navigate = useNavigate();

    const courtData = {
        "SESSION COURTS": [
            "District & Sessions Court",
            "Additional Sessions Court",
            "Fast Track Sessions Court",
            "Special Sessions Court"
        ],

        "CRIMINAL MAGISTRATE COURT": [
            "Chief Judicial Magistrate Court",
            "Judicial Magistrate First Class",
            "Judicial Magistrate Second Class",
            "Metropolitan Magistrate Court"
        ],

        "FAMILY COURTS": [
            "Family Court",
            "Marriage Court",
            "Child Custody Court",
            "Maintenance Court"
        ],

        "CIVIL COURTS": [
            "Civil Judge Senior Division",
            "Civil Judge Junior Division",
            "Small Causes Court"
        ],

        "EXECUTIVE/REVENUE COURTS": [
            "SDM Court",
            "Collector Court",
            "Tehsildar Court",
            "Revenue Board"
        ],

        "Tribunals & Boards": [
            "Consumer Forum",
            "CAT (Central Administrative Tribunal)",
            "Debt Recovery Tribunal",
            "Labour Tribunal"
        ],

        "Special/Outlying Courts": [
            "POCSO Court",
            "NDPS Court",
            "CBI Court",
            "Special Judge Court"
        ]
    };

    const [expandedCourt, setExpandedCourt] =
        useState(null);

    const toggleCourt = (category) => {

        setExpandedCourt(

            expandedCourt === category
                ? null
                : category

        );

    };

    const handleCourtSelect = (courtName) => {

        alert(
            `${courtName} selected`
        );

        /*
        Later you can navigate:

        navigate(
            `/advocate/courts/${encodeURIComponent(courtName)}`
        );
        */

    };

    const handleAddCourt = () => {

        alert(
            "Add New Court feature will be implemented soon."
        );

    };

    return (

        <div className="min-h-screen bg-[#F3F3F3]">

            {/* Header */}

            <div className="bg-[#F4C430] shadow">

                <div className="max-w-4xl mx-auto px-4 py-5 flex items-center gap-4">

                    <button
                        onClick={() =>
                            navigate(-1)
                        }
                        className="
                            w-14 h-14
                            md:w-16 md:h-16
                            bg-white
                            rounded-2xl
                            shadow-md
                            flex
                            items-center
                            justify-center
                            shrink-0
                        "
                    >

                        <ArrowLeft
                            size={30}
                        />

                    </button>

                    <h1
                        className="
                            text-2xl
                            md:text-4xl
                            font-bold
                            text-[#1D1B2D]
                        "
                    >

                        Court Management

                    </h1>

                </div>

            </div>

            <div className="max-w-4xl mx-auto px-4 py-6">

                {/* Add Court Button */}

                <div className="flex justify-end mb-8">

                    <button
                        onClick={
                            handleAddCourt
                        }
                        className="
                            bg-[#1D1B2D]
                            text-white
                            px-6 py-4
                            md:px-8 md:py-5
                            rounded-2xl
                            shadow-md
                            font-bold
                            text-base
                            md:text-2xl
                            hover:opacity-90
                            transition
                        "
                    >

                        + Add New Court

                    </button>

                </div>

                {/* Title */}

                <h2
                    className="
                        text-2xl
                        md:text-3xl
                        font-bold
                        mb-6
                    "
                >

                    Court List

                </h2>

                {/* Categories */}

                <div className="space-y-5">

                    {

                        Object.keys(
                            courtData
                        ).map((category) => (

                            <div
                                key={category}
                                className="
                                    bg-white
                                    rounded-3xl
                                    shadow-md
                                    overflow-hidden
                                "
                            >

                                {/* Category Row */}

                                <button
                                    onClick={() =>
                                        toggleCourt(
                                            category
                                        )
                                    }
                                    className="
                                        w-full
                                        px-6 py-6
                                        flex
                                        justify-between
                                        items-center
                                        hover:bg-gray-50
                                        transition
                                    "
                                >

                                    <span
                                        className="
                                            text-lg
                                            md:text-2xl
                                            font-bold
                                            text-[#2D3A4B]
                                            text-left
                                            pr-4
                                        "
                                    >

                                        {category}

                                    </span>

                                    {

                                        expandedCourt ===
                                        category ? (

                                            <Minus
                                                size={34}
                                                className="
                                                    text-red-500
                                                    shrink-0
                                                "
                                            />

                                        ) : (

                                            <Plus
                                                size={34}
                                                className="
                                                    text-blue-500
                                                    shrink-0
                                                "
                                            />

                                        )

                                    }

                                </button>

                                {/* Expanded List */}

                                {

                                    expandedCourt ===
                                    category && (

                                        <div
                                            className="
                                                border-t
                                                bg-gray-50
                                            "
                                        >

                                            {

                                                courtData[
                                                    category
                                                ].map(

                                                    (
                                                        court,
                                                        index
                                                    ) => (

                                                        <button
                                                            key={
                                                                index
                                                            }
                                                            onClick={() =>
                                                                handleCourtSelect(
                                                                    court
                                                                )
                                                            }
                                                            className="
                                                                w-full
                                                                text-left
                                                                px-6 py-4
                                                                border-b
                                                                last:border-b-0
                                                                hover:bg-gray-100
                                                                transition
                                                                text-sm
                                                                md:text-lg
                                                            "
                                                        >

                                                            • {court}

                                                        </button>

                                                    )

                                                )

                                            }

                                        </div>

                                    )

                                }

                            </div>

                        ))

                    }

                </div>

            </div>

        </div>

    );

}

export default CourtManagement;