import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    User,
    Phone,
    Mail,
    MapPin,
    Plus,
    ChevronDown
} from "lucide-react";

import logo from "../../assets/advonote-logo.png";

function ViewProfile() {

    const navigate = useNavigate();

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

    const [formData, setFormData] =
        useState({

            name:
                advocate?.name || "",

            mobile:
                advocate?.mobile || "",

            email:
                advocate?.email || "",

            address:
                advocate?.address || "",

            registrationNumber:
                advocate?.registrationNumber || "",

            courtType:
                advocate?.courtType || "",

            practicingCourt:
                advocate?.practicingCourt || "",

            state:
                advocate?.state || "",

            city:
                advocate?.city || "",

            dealsIn:
                advocate?.dealsIn || ""

        });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
                e.target.value

        });

    };

    return (

        <div className="min-h-screen bg-[#F3F3F3]">

            {/* Header */}

            <div className="bg-[#F4C430] px-5 py-6 shadow">

                <div className="flex items-center gap-4">

                    <button
                        onClick={() => navigate(-1)}
                        className="
                            w-14 h-14
                            md:w-16 md:h-16
                            bg-white
                            rounded-2xl
                            shadow-md
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <ArrowLeft
                            size={28}
                        />

                    </button>

                    <h1
                        className="
                            text-2xl
                            md:text-4xl
                            font-bold
                        "
                    >

                        View / Edit Profile

                    </h1>

                </div>

            </div>

            <div
                className="
                    max-w-3xl
                    mx-auto
                    px-5
                    py-8
                "
            >

                {/* Profile Image */}

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        mb-10
                    "
                >

                    <div
                        className="
                            relative
                        "
                    >

                        <img
                            src={logo}
                            alt="Advonote"
                            className="
                                w-40
                                h-40
                                md:w-52
                                md:h-52
                                object-contain
                            "
                        />

                        <button
                            className="
                                absolute
                                bottom-2
                                right-2
                                w-12
                                h-12
                                bg-white
                                rounded-full
                                shadow-lg
                                flex
                                items-center
                                justify-center
                            "
                        >

                            <Plus
                                size={24}
                            />

                        </button>

                    </div>

                    <h2
                        className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            mt-5
                            text-center
                        "
                    >

                        {

                            formData.name ||
                            "ADVOCATE"

                        }

                    </h2>

                </div>

                {/* Form */}

                <div
                    className="
                        space-y-6
                    "
                >

                    {/* Name */}

                    <div>

                        <label
                            className="
                                block
                                text-2xl
                                mb-3
                            "
                        >

                            Name

                        </label>

                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                bg-white
                                border
                                rounded-full
                                px-6
                                py-5
                            "
                        >

                            <User />

                            <input
                                type="text"
                                name="name"
                                value={
                                    formData.name
                                }
                                onChange={
                                    handleChange
                                }
                                className="
                                    w-full
                                    outline-none
                                    bg-transparent
                                    text-xl
                                "
                            />

                        </div>

                    </div>

                    {/* Mobile */}

                    <div>

                        <label
                            className="
                                block
                                text-2xl
                                mb-3
                            "
                        >

                            Phone Number

                        </label>

                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                bg-white
                                border
                                rounded-full
                                px-6
                                py-5
                            "
                        >

                            <Phone />

                            <input
                                type="text"
                                name="mobile"
                                value={
                                    formData.mobile
                                }
                                onChange={
                                    handleChange
                                }
                                className="
                                    w-full
                                    outline-none
                                    bg-transparent
                                    text-xl
                                "
                            />

                        </div>

                    </div>

                    {/* Email */}

                    <div>

                        <label
                            className="
                                block
                                text-2xl
                                mb-3
                            "
                        >

                            Email

                        </label>

                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                bg-white
                                border
                                rounded-full
                                px-6
                                py-5
                            "
                        >

                            <Mail />

                            <input
                                type="email"
                                name="email"
                                value={
                                    formData.email
                                }
                                onChange={
                                    handleChange
                                }
                                className="
                                    w-full
                                    outline-none
                                    bg-transparent
                                    text-xl
                                "
                            />

                        </div>

                    </div>

                    {/* Address */}

                    <div>

                        <label
                            className="
                                block
                                text-2xl
                                mb-3
                            "
                        >

                            Address

                        </label>

                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                bg-white
                                border
                                rounded-full
                                px-6
                                py-5
                            "
                        >

                            <Mail />

                            <input
                                type="text"
                                name="address"
                                value={
                                    formData.address
                                }
                                onChange={
                                    handleChange
                                }
                                className="
                                    w-full
                                    outline-none
                                    bg-transparent
                                    text-xl
                                "
                            />

                        </div>

                    </div>

                    {/* Registration */}

                    <div>

                        <label
                            className="
                                block
                                text-2xl
                                mb-3
                            "
                        >

                            Registration Number

                        </label>

                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                bg-white
                                border
                                rounded-full
                                px-6
                                py-5
                            "
                        >

                            <Mail />

                            <input
                                type="text"
                                name="registrationNumber"
                                value={
                                    formData.registrationNumber
                                }
                                onChange={
                                    handleChange
                                }
                                className="
                                    w-full
                                    outline-none
                                    bg-transparent
                                    text-xl
                                "
                            />

                        </div>

                    </div>

                    {/* Court Type */}

                    <SelectField
                        label="Court Type"
                        name="courtType"
                        value={
                            formData.courtType
                        }
                        onChange={
                            handleChange
                        }
                        options={[
                            "SESSION COURTS",
                            "HIGH COURT",
                            "DISTRICT COURT",
                            "SUPREME COURT"
                        ]}
                    />

                    {/* Practicing Court */}

                    <SelectField
                        label="Practicing In Court"
                        name="practicingCourt"
                        value={
                            formData.practicingCourt
                        }
                        onChange={
                            handleChange
                        }
                        options={[
                            "Select Practicing Court",
                            "District Court",
                            "High Court",
                            "Supreme Court"
                        ]}
                    />

                    {/* State */}

                    <SelectField
                        label="State"
                        name="state"
                        value={
                            formData.state
                        }
                        onChange={
                            handleChange
                        }
                        options={[
                            "UTTAR PRADESH",
                            "DELHI",
                            "MAHARASHTRA"
                        ]}
                    />

                    {/* City */}

                    <SelectField
                        label="City"
                        name="city"
                        value={
                            formData.city
                        }
                        onChange={
                            handleChange
                        }
                        options={[
                            "BAREILLY",
                            "LUCKNOW",
                            "NOIDA"
                        ]}
                    />

                    {/* Deals In */}

                    <div>

                        <label
                            className="
                                block
                                text-2xl
                                mb-3
                            "
                        >

                            Deals In

                        </label>

                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                bg-white
                                border
                                rounded-full
                                px-6
                                py-5
                            "
                        >

                            <Mail />

                            <input
                                type="text"
                                name="dealsIn"
                                value={
                                    formData.dealsIn
                                }
                                onChange={
                                    handleChange
                                }
                                className="
                                    w-full
                                    outline-none
                                    bg-transparent
                                    text-xl
                                "
                            />

                        </div>

                    </div>

                    {/* Save */}

                    <button
                        className="
                            w-full
                            mt-8
                            bg-[#F4C430]
                            hover:bg-yellow-400
                            py-5
                            rounded-2xl
                            font-bold
                            text-2xl
                            shadow-lg
                        "
                    >

                        SAVE PROFILE

                    </button>

                </div>

            </div>

        </div>

    );

}

function SelectField({

    label,
    name,
    value,
    onChange,
    options

}) {

    return (

        <div>

            <label
                className="
                    block
                    text-2xl
                    mb-3
                "
            >

                {label}

            </label>

            <div
                className="
                    relative
                "
            >

                <MapPin
                    className="
                        absolute
                        left-6
                        top-1/2
                        -translate-y-1/2
                    "
                />

                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="
                        w-full
                        bg-white
                        border
                        rounded-full
                        py-5
                        pl-16
                        pr-14
                        text-xl
                        appearance-none
                        outline-none
                    "
                >

                    {

                        options.map(
                            (item) => (

                                <option
                                    key={item}
                                    value={item}
                                >

                                    {item}

                                </option>

                            )
                        )

                    }

                </select>

                <ChevronDown
                    className="
                        absolute
                        right-6
                        top-1/2
                        -translate-y-1/2
                    "
                />

            </div>

        </div>

    );

}

export default ViewProfile;