function Stats() {

    const stats = [
        {
            number: "500+",
            label: "Active Advocates"
        },
        {
            number: "5000+",
            label: "Cases Managed"
        },
        {
            number: "8000+",
            label: "Clients Served"
        },
        {
            number: "99.9%",
            label: "Secure Uptime"
        }
    ];

    return (

        <section className="bg-[#FFFDF7] py-16">

            <div className="max-w-7xl mx-auto px-6">

                <div
                    className="
                        bg-[#FAF7F0]
                        border border-[#E5E7EB]
                        rounded-3xl
                        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                        p-8 lg:p-12
                    "
                >

                    <div
                        className="
                            grid
                            grid-cols-2
                            lg:grid-cols-4
                            gap-8
                            text-center
                        "
                    >

                        {stats.map((stat, index) => (

                            <div
                                key={index}
                                className="
                                    transition-transform
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >

                                <h2
                                    className="
                                        text-4xl
                                        lg:text-5xl
                                        font-bold
                                        text-[#F4C430]
                                        mb-2
                                    "
                                >
                                    {stat.number}
                                </h2>

                                <p
                                    className="
                                        text-[#1F1F1F]
                                        font-medium
                                        text-sm
                                        lg:text-base
                                    "
                                >
                                    {stat.label}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Stats;