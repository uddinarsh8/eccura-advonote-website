import { Link } from "react-router-dom";

function CTA() {

    return (

        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">

            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-4xl md:text-5xl font-bold mb-6">

                    Ready to Transform
                    Your Legal Practice?

                </h2>

                <p className="text-xl text-blue-100 mb-10 leading-relaxed">

                    Experience how Advonote helps advocates
                    streamline case management, organize clients,
                    track hearings, and improve productivity.

                </p>

                <div className="flex flex-wrap justify-center gap-4">

                    <Link
                        to="/demo"
                        className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
                    >
                        Request Demo
                    </Link>

                    <Link
                        to="/advocate/login"
                        className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
                    >
                        Advocate Login
                    </Link>

                </div>

            </div>

        </section>

    );

}

export default CTA;