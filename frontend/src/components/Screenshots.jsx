import {
    ChevronLeft,
    ChevronRight
} from "lucide-react";

import login from "../assets/screenshots/login.jpg";
import dashboard from "../assets/screenshots/dashboard.jpg";
import calendar from "../assets/screenshots/calendar.jpg";
import profile from "../assets/screenshots/profile.jpg";
import addCase from "../assets/screenshots/add-case.jpg";
import caseForm from "../assets/screenshots/case-form.jpg";

const screens = [
    { image: login, title: "Login" },
    { image: dashboard, title: "Dashboard" },
    { image: calendar, title: "Calendar" },
    { image: profile, title: "Profile" },
    { image: addCase, title: "Add New Case" },
    { image: caseForm, title: "Case Details" }
];

function Screenshots() {

    return (

        <section
            id="screenshots"
            className="bg-[#FAF7F0] py-20"
        >

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-14">

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1F1F1F]">

                        Explore The

                        <span className="text-[#F4C430]">

                            {" "}Advonote App

                        </span>

                    </h2>

                    <p
                        className="
                            mt-4
                            text-[#6B7280]
                            max-w-2xl
                            mx-auto
                        "
                    >

                        Discover the intuitive interface designed
                        to simplify legal practice management.

                    </p>

                </div>

                <div className="relative">

                    {/* Left Arrow */}

                    <button
                        className="
                            absolute
                            left-0
                            top-1/2
                            -translate-y-1/2
                            z-10
                            bg-white
                            shadow
                            rounded-full
                            p-3
                            hidden
                            lg:block
                        "
                    >

                        <ChevronLeft />

                    </button>

                    {/* Screenshots */}

                    <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">

                        {screens.map((screen, index) => (

                            <div
                                key={index}
                                className="
                                    flex-shrink-0
                                    text-center
                                    group
                                "
                            >

                                {/* Black Mobile Frame */}

                                <div
                                    className="
                                        bg-black
                                        rounded-[40px]
                                        p-2
                                        border-[3px]
                                        border-black
                                        shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                                        w-[230px]
                                        transition-all
                                        duration-300
                                        group-hover:-translate-y-2
                                    "
                                >

                                    <img
                                        src={screen.image}
                                        alt={screen.title}
                                        className="
                                            rounded-[32px]
                                            h-[470px]
                                            w-full
                                            object-cover
                                        "
                                    />

                                </div>

                                <h3
                                    className="
                                        mt-4
                                        font-semibold
                                        text-[#1F1F1F]
                                    "
                                >

                                    {screen.title}

                                </h3>

                            </div>

                        ))}

                    </div>

                    {/* Right Arrow */}

                    <button
                        className="
                            absolute
                            right-0
                            top-1/2
                            -translate-y-1/2
                            z-10
                            bg-white
                            shadow
                            rounded-full
                            p-3
                            hidden
                            lg:block
                        "
                    >

                        <ChevronRight />

                    </button>

                </div>

            </div>

        </section>

    );

}

export default Screenshots;