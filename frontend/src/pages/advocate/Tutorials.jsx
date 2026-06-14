import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Play
} from "lucide-react";

function Tutorials() {

    const navigate = useNavigate();

    const tutorials = [

        {
            title: "Add New Case",
            videoUrl: "#"
        },

        {
            title: "Set Hearing Date",
            videoUrl: "#"
        },

        {
            title: "Calendar Use",
            videoUrl: "#"
        }

    ];

    const handleTutorial = (url, title) => {

        if (url === "#") {

            alert(
                `${title} tutorial will be available soon.`
            );

            return;

        }

        window.open(
            url,
            "_blank"
        );

    };

    return (

        <div className="min-h-screen bg-[#F3F3F3]">

            {/* Header */}

            <div className="bg-[#F4C430] shadow">

                <div className="
                    max-w-4xl
                    mx-auto
                    px-5
                    py-5
                    flex
                    items-center
                    gap-4
                ">

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

                    <h1 className="
                        text-2xl
                        md:text-4xl
                        font-bold
                        flex
                        items-center
                        gap-2
                    ">

                        📚 Tutorials

                    </h1>

                </div>

            </div>

            {/* Tutorial Cards */}

            <div className="
                max-w-4xl
                mx-auto
                px-5
                py-8
            ">

                <div className="space-y-5">

                    {

                        tutorials.map(
                            (
                                tutorial,
                                index
                            ) => (

                                <button
                                    key={index}
                                    onClick={() =>
                                        handleTutorial(
                                            tutorial.videoUrl,
                                            tutorial.title
                                        )
                                    }
                                    className="
                                        w-full
                                        bg-white
                                        rounded-3xl
                                        shadow-md
                                        px-6
                                        py-8
                                        flex
                                        items-center
                                        gap-6
                                        hover:shadow-lg
                                        transition
                                        text-left
                                    "
                                >

                                    {/* Play Icon */}

                                    <div className="
                                        w-14 h-14
                                        rounded-full
                                        bg-[#5A4CF3]
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                    ">

                                        <Play
                                            size={26}
                                            fill="white"
                                            color="white"
                                        />

                                    </div>

                                    {/* Title */}

                                    <span className="
                                        text-xl
                                        md:text-3xl
                                        font-semibold
                                        text-[#1D1B2D]
                                    ">

                                        {tutorial.title}

                                    </span>

                                </button>

                            )

                        )

                    }

                </div>

            </div>

        </div>

    );

}

export default Tutorials;