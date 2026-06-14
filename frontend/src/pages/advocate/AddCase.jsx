import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Scale,
    Save
} from "lucide-react";

function AddCase() {

    const navigate = useNavigate();

    const [loading, setLoading] =
        useState(false);

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

            courtName: "",
            caseNumber: "",
            caseYear: "",
            petitioner: "",
            respondent: "",
            sectionName: "",
            caseType: "",
            counselFor: "",
            hearingDate: "",
            priority: "Regular",
            additionalInfo: ""

        });

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]:
                e.target.value

        });

    };

    const handleSubmit = async () => {

        try {

            if (!advocate.id) {

                alert(
                    "Please login again."
                );

                return;

            }

            if (

                !formData.courtName ||
                !formData.caseNumber ||
                !formData.petitioner ||
                !formData.respondent ||
                !formData.hearingDate

            ) {

                alert(
                    "Please fill all required fields."
                );

                return;

            }

            setLoading(true);

            await api.post(
                "/cases",
                {

                    advocateId:
                        advocate.id,

                    ...formData

                }
            );

            alert(
                "Case Added Successfully"
            );

            navigate(
                "/advocate/cases"
            );

        } catch (error) {

            console.log(error);

            alert(

                error?.response?.data?.message ||

                "Failed to add case"

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

                            Add Case

                        </h1>

                        <p className="text-black/70">

                            Create and manage legal matters

                        </p>

                    </div>

                </div>

            </div>

            <div className="max-w-6xl mx-auto p-5">

                {/* Preview */}

                <div className="
                    bg-white
                    rounded-3xl
                    shadow-md
                    p-6
                    mb-6
                ">

                    <div className="flex items-center gap-4">

                        <div className="
                            w-16 h-16
                            rounded-2xl
                            bg-[#F4C430]
                            flex
                            items-center
                            justify-center
                        ">

                            <Scale size={30} />

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold">

                                {

                                    formData.petitioner ||

                                    "Petitioner"

                                }

                                {" vs "}

                                {

                                    formData.respondent ||

                                    "Respondent"

                                }

                            </h2>

                            <p className="text-gray-500">

                                {

                                    formData.caseNumber ||

                                    "Case Number"

                                }

                            </p>

                        </div>

                    </div>

                </div>

                {/* Form */}

                <div className="
                    bg-white
                    rounded-3xl
                    shadow-md
                    p-6
                    md:p-8
                ">

                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-5
                    ">

                        <input
                            name="courtName"
                            placeholder="Court Name *"
                            value={formData.courtName}
                            onChange={handleChange}
                            className="
                                p-4
                                rounded-2xl
                                border
                                outline-none
                            "
                        />

                        <input
                            name="caseNumber"
                            placeholder="Case Number *"
                            value={formData.caseNumber}
                            onChange={handleChange}
                            className="
                                p-4
                                rounded-2xl
                                border
                                outline-none
                            "
                        />

                        <input
                            type="number"
                            name="caseYear"
                            placeholder="Case Year"
                            value={formData.caseYear}
                            onChange={handleChange}
                            className="
                                p-4
                                rounded-2xl
                                border
                                outline-none
                            "
                        />

                        <input
                            name="caseType"
                            placeholder="Case Type"
                            value={formData.caseType}
                            onChange={handleChange}
                            className="
                                p-4
                                rounded-2xl
                                border
                                outline-none
                            "
                        />

                        <input
                            name="petitioner"
                            placeholder="Petitioner *"
                            value={formData.petitioner}
                            onChange={handleChange}
                            className="
                                p-4
                                rounded-2xl
                                border
                                outline-none
                            "
                        />

                        <input
                            name="respondent"
                            placeholder="Respondent *"
                            value={formData.respondent}
                            onChange={handleChange}
                            className="
                                p-4
                                rounded-2xl
                                border
                                outline-none
                            "
                        />

                        <input
                            name="sectionName"
                            placeholder="Section"
                            value={formData.sectionName}
                            onChange={handleChange}
                            className="
                                p-4
                                rounded-2xl
                                border
                                outline-none
                            "
                        />

                        <input
                            name="counselFor"
                            placeholder="Counsel For"
                            value={formData.counselFor}
                            onChange={handleChange}
                            className="
                                p-4
                                rounded-2xl
                                border
                                outline-none
                            "
                        />

                        <input
                            type="date"
                            name="hearingDate"
                            value={formData.hearingDate}
                            onChange={handleChange}
                            className="
                                p-4
                                rounded-2xl
                                border
                                outline-none
                            "
                        />

                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="
                                p-4
                                rounded-2xl
                                border
                                outline-none
                            "
                        >

                            <option value="Regular">

                                Regular

                            </option>

                            <option value="Urgent">

                                Urgent

                            </option>

                        </select>

                    </div>

                    <textarea
                        name="additionalInfo"
                        placeholder="Additional Information"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows="5"
                        className="
                            w-full
                            border
                            rounded-2xl
                            p-4
                            mt-5
                            outline-none
                        "
                    />

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`
                            w-full
                            mt-8
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

                                ? "Saving Case..."

                                : "Save Case"

                        }

                    </button>

                </div>

            </div>

        </div>

    );

}

export default AddCase;