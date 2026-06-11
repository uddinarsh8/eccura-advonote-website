function Profile() {

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

    const handleLogout = () => {

        localStorage.removeItem(
            "advocate"
        );

        localStorage.removeItem(
            "advocateToken"
        );

        window.location.href = "/";

    };

    return (

        <div className="min-h-screen bg-gray-100 p-6">

            <div className="max-w-4xl mx-auto">

                {/* Header */}

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-lg mb-8">

                    <div className="flex flex-col md:flex-row items-center gap-6">

                        <div className="w-28 h-28 rounded-full bg-white text-blue-600 flex items-center justify-center text-5xl font-bold">

                            {advocate?.name
                                ?.charAt(0)
                                ?.toUpperCase()}

                        </div>

                        <div>

                            <h1 className="text-4xl font-bold">

                                {advocate?.name}

                            </h1>

                            <p className="text-blue-100 mt-2">

                                Advocate

                            </p>

                        </div>

                    </div>

                </div>

                {/* Profile Details */}

                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold mb-6">

                        Profile Information

                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>

                            <p className="text-gray-500">

                                Full Name

                            </p>

                            <p className="font-semibold text-lg">

                                {advocate?.name || "-"}

                            </p>

                        </div>

                        <div>

                            <p className="text-gray-500">

                                Mobile Number

                            </p>

                            <p className="font-semibold text-lg">

                                {advocate?.mobile || "-"}

                            </p>

                        </div>

                        <div>

                            <p className="text-gray-500">

                                Email Address

                            </p>

                            <p className="font-semibold text-lg">

                                {advocate?.email || "-"}

                            </p>

                        </div>

                        <div>

                            <p className="text-gray-500">

                                State

                            </p>

                            <p className="font-semibold text-lg">

                                {advocate?.state || "-"}

                            </p>

                        </div>

                        <div>

                            <p className="text-gray-500">

                                City

                            </p>

                            <p className="font-semibold text-lg">

                                {advocate?.city || "-"}

                            </p>

                        </div>

                    </div>

                    {/* Actions */}

                    <div className="flex flex-col md:flex-row gap-4 mt-10">

                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold"
                        >

                            Edit Profile

                        </button>

                        <button
                            onClick={handleLogout}
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-semibold"
                        >

                            Logout

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Profile;