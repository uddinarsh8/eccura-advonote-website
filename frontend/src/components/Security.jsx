import securityBanner from "../assets/security-banner.png";

function Security() {

    return (

        <section
            id="security"
            className="bg-[#FFFDF7] py-20"
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}

                <div className="text-center mb-12">

                    <h2
                        className="
                            text-4xl
                            lg:text-5xl
                            font-bold
                            text-[#1F1F1F]
                        "
                    >

                        Your Data is

                        <span className="text-[#F4C430]">

                            {" "}Safe & Secure

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

                        We prioritize the security and privacy of your legal data with enterprise-grade protection.

                    </p>

                </div>

                {/* Security Banner */}

                <div
                    className="
                        overflow-hidden
                        rounded-3xl
                        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                        transition-all
                        duration-300
                        hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)]
                    "
                >

                    <img
                        src={securityBanner}
                        alt="Your Data is Safe & Secure"
                        className="
                            w-full
                            h-[250px]
                            sm:h-[350px]
                            lg:h-[420px]
                            object-cover
                        "
                    />

                </div>

            </div>

        </section>

    );

}

export default Security;