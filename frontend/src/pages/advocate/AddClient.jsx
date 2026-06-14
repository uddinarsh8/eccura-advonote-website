import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    User,
    Save
} from "lucide-react";

function AddClient() {

    const navigate = useNavigate();

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({

            name: "",
            mobile: "",
            email: "",
            address: ""

        });

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

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]:
                e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (!advocate.id) {

                alert(
                    "Please login again."
                );

                return;

            }

            setLoading(true);

            await api.post(
                "/clients",
                {

                    ...formData,
                    advocateId:
                        advocate.id

                }
            );

            alert(
                "Client Added Successfully"
            );

            navigate(
                "/advocate/clients"
            );

        } catch (error) {

            console.log(error);

            alert(

                error?.response?.data?.message ||

                "Failed to add client"

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-[#F3F3F3]">

            {/* Header */}

            <div className="bg-[#F4C430] px-5 py-5 shadow">

                <div className="flex items-center gap-4">

                    <button
                        onClick={() => navigate(-1)}
                        className="
                            w-14 h-14
                            bg-white
                            rounded-2xl
                            shadow-md
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <ArrowLeft size={28} />

                    </button>

                    <div>

                        <h1 className="text-3xl font-bold">

                            Add Client

                        </h1>

                        <p className="text-black/70">

                            Build and manage client relationships

                        </p>

                    </div>

                </div>

            </div>

            <div className="max-w-3xl mx-auto p-5">

                {/* Client Preview */}

                <div className="
                    bg-white
                    rounded-3xl
                    shadow-md
                    p-6
                    mb-6
                ">

                    <div className="flex items-center gap-5">

                        <div className="
                            w-20 h-20
                            rounded-full
                            bg-[#F4C430]
                            flex
                            items-center
                            justify-center
                            text-3xl
                            font-bold
                        ">

                            {

                                formData.name

                                    ? formData.name
                                        .charAt(0)
                                        .toUpperCase()

                                    : <User size={36} />

                            }

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold">

                                {

                                    formData.name ||

                                    "Client Name"

                                }

                            </h2>

                            <p className="text-gray-500">

                                {

                                    formData.email ||

                                    "client@example.com"

                                }

                            </p>

                        </div>

                    </div>

                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="
                        bg-white
                        rounded-3xl
                        shadow-md
                        p-6
                        md:p-8
                    "
                >

                    <div className="space-y-5">

                        <div>

                            <label className="
                                block
                                font-semibold
                                mb-2
                            ">

                                Full Name

                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter client name"
                                required
                                className="
                                    w-full
                                    border
                                    rounded-2xl
                                    p-4
                                    outline-none
                                "
                            />

                        </div>

                        <div>

                            <label className="
                                block
                                font-semibold
                                mb-2
                            ">

                                Mobile Number

                            </label>

                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Enter mobile number"
                                required
                                className="
                                    w-full
                                    border
                                    rounded-2xl
                                    p-4
                                    outline-none
                                "
                            />

                        </div>

                        <div>

                            <label className="
                                block
                                font-semibold
                                mb-2
                            ">

                                Email Address

                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className="
                                    w-full
                                    border
                                    rounded-2xl
                                    p-4
                                    outline-none
                                "
                            />

                        </div>

                        <div>

                            <label className="
                                block
                                font-semibold
                                mb-2
                            ">

                                Address

                            </label>

                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Enter address"
                                className="
                                    w-full
                                    border
                                    rounded-2xl
                                    p-4
                                    outline-none
                                "
                            />

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`
                                w-full
                                mt-4
                                py-4
                                rounded-2xl
                                font-bold
                                flex
                                items-center
                                justify-center
                                gap-3
                                transition
                                ${
                                    loading
                                        ? "bg-gray-400 text-white"
                                        : "bg-[#F4C430] hover:bg-[#E7B500]"
                                }
                            `}
                        >

                            <Save size={22} />

                            {

                                loading

                                    ? "Saving Client..."

                                    : "Save Client"

                            }

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddClient;