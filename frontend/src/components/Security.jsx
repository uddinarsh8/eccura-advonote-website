import securityBanner from "../assets/security-banner.png";

function Security() {

    return (

        <section
            id="security"
            className="bg-[#FFFDF7] py-12 sm:py-16 lg:py-20"
        >

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                {/* Heading */}

                <div className="text-center mb-10 lg:mb-14">

                    <h2
                        className="
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-bold
                            leading-tight
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
                            text-sm
                            sm:text-base
                            lg:text-lg
                            text-[#6B7280]
                            max-w-3xl
                            mx-auto
                            leading-relaxed
                            px-2
                        "
                    >

                        We prioritize the security and privacy of your
                        legal data with enterprise-grade protection,
                        ensuring confidentiality, integrity, and peace
                        of mind for advocates and law firms.

                    </p>

                </div>

                {/* Security Banner */}

                <div
                    className="
                        overflow-hidden
                        rounded-2xl
                        sm:rounded-3xl
                        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-[0_15px_45px_rgba(0,0,0,0.18)]
                    "
                >

                    <img
                        src={securityBanner}
                        alt="Your Data is Safe & Secure"
                        className="
                            w-full
                            h-auto
                            object-cover
                            transition-transform
                            duration-500
                            hover:scale-[1.02]
                        "
                    />

                </div>

            </div>

        </section>

    );

}

export default Security;