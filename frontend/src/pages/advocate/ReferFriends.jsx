import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Gift,
    Share2
} from "lucide-react";

function ReferFriends() {

    const navigate = useNavigate();

    const referralLink =
        "https://advonote.com/referral/ADV001";

    const handleShare = async () => {

        const shareText =
            `Join Advonote using my referral link:\n${referralLink}`;

        try {

            if (navigator.share) {

                await navigator.share({

                    title: "Advonote Referral",
                    text: shareText

                });

            } else {

                await navigator.clipboard.writeText(
                    shareText
                );

                alert(
                    "Referral link copied to clipboard."
                );

            }

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen bg-[#F3F3F3]">

            {/* Yellow Header */}

            <div className="bg-[#F4C430] h-20" />

            <div className="max-w-2xl mx-auto px-5 py-6">

                {/* Back Button */}

                <button
                    onClick={() => navigate(-1)}
                    className="
                        w-16 h-16
                        bg-white
                        rounded-2xl
                        shadow-md
                        flex
                        items-center
                        justify-center
                    "
                >

                    <ArrowLeft size={34} />

                </button>

                {/* Title */}

                <div className="text-center mt-8">

                    <h1 className="text-4xl font-bold text-[#2D313A]">

                        Share App

                    </h1>

                    <p className="text-gray-600 text-xl mt-5">

                        Share your referral link with friends.

                    </p>

                </div>

                {/* Referral Program Card */}

                <div
                    className="
                        mt-8
                        bg-[#E8F5E9]
                        rounded-3xl
                        shadow-md
                        overflow-hidden
                        flex
                    "
                >

                    <div className="w-3 bg-green-700" />

                    <div className="p-6 flex-1">

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-green-700
                                flex
                                items-center
                                gap-2
                            "
                        >

                            <Gift size={30} />

                            Referral Program

                        </h2>

                        <p
                            className="
                                text-green-800
                                text-xl
                                mt-5
                                leading-relaxed
                            "
                        >

                            Invite your friends using your referral link.

                            When they sign up and make their first payment,

                            <span className="font-bold">

                                {" "}
                                you will get one additional month of subscription validity as a reward.

                            </span>

                        </p>

                    </div>

                </div>

                {/* Share Card */}

                <div
                    className="
                        bg-white
                        rounded-3xl
                        shadow-md
                        mt-12
                        p-8
                        text-center
                    "
                >

                    <h2
                        className="
                            text-4xl
                            font-bold
                            text-[#2D313A]
                        "
                    >

                        Share Your Referral

                    </h2>

                    <div className="my-10 flex justify-center">

                        <Share2
                            size={60}
                            className="text-green-600"
                        />

                    </div>

                    <button
                        onClick={handleShare}
                        className="
                            w-full
                            bg-[#1CA8A8]
                            hover:bg-[#179595]
                            text-white
                            text-2xl
                            font-bold
                            py-5
                            rounded-2xl
                            transition
                        "
                    >

                        Share Referral Link

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ReferFriends;