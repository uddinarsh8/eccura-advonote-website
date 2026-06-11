import { useState } from "react";
import api from "../../services/api";

function AddCase() {

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

    } catch (error) {

        console.log(
            "Invalid advocate data"
        );

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

            window.location.href =
                "/advocate/cases";

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

        <div className="min-h-screen bg-gray-100 p-6">

            <div className="max-w-5xl mx-auto">

                {/* Header */}

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-lg mb-8">

                    <h1 className="text-4xl font-bold">

                        ⚖️ Add New Case

                    </h1>

                    <p className="mt-2 opacity-90">

                        Organize and track every legal matter efficiently.

                    </p>

                </div>

                {/* Preview Card */}

                <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

                    <h2 className="text-2xl font-bold mb-4">

                        Case Preview

                    </h2>

                    <p className="text-xl font-semibold">

                        {formData.petitioner || "Petitioner"}
                        {" vs "}
                        {formData.respondent || "Respondent"}

                    </p>

                    <p className="text-gray-500 mt-2">

                        {formData.caseNumber || "Case Number"}
                    </p>

                </div>

                {/* Form */}

                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <div className="grid md:grid-cols-2 gap-6">

                        <input
                            name="courtName"
                            placeholder="🏛️ Court Name *"
                            value={formData.courtName}
                            onChange={handleChange}
                            className="border rounded-2xl p-4"
                        />

                        <input
                            name="caseNumber"
                            placeholder="📂 Case Number *"
                            value={formData.caseNumber}
                            onChange={handleChange}
                            className="border rounded-2xl p-4"
                        />

                        <input
                            type="number"
                            name="caseYear"
                            placeholder="📅 Case Year"
                            value={formData.caseYear}
                            onChange={handleChange}
                            className="border rounded-2xl p-4"
                        />

                        <input
                            name="caseType"
                            placeholder="📚 Case Type"
                            value={formData.caseType}
                            onChange={handleChange}
                            className="border rounded-2xl p-4"
                        />

                        <input
                            name="petitioner"
                            placeholder="👤 Petitioner *"
                            value={formData.petitioner}
                            onChange={handleChange}
                            className="border rounded-2xl p-4"
                        />

                        <input
                            name="respondent"
                            placeholder="👥 Respondent *"
                            value={formData.respondent}
                            onChange={handleChange}
                            className="border rounded-2xl p-4"
                        />

                        <input
                            name="sectionName"
                            placeholder="📜 Section"
                            value={formData.sectionName}
                            onChange={handleChange}
                            className="border rounded-2xl p-4"
                        />

                        <input
                            name="counselFor"
                            placeholder="⚖️ Counsel For"
                            value={formData.counselFor}
                            onChange={handleChange}
                            className="border rounded-2xl p-4"
                        />

                        <input
                            type="date"
                            name="hearingDate"
                            value={formData.hearingDate}
                            onChange={handleChange}
                            className="border rounded-2xl p-4"
                        />

                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="border rounded-2xl p-4"
                        >

                            <option value="Regular">

                                🟢 Regular

                            </option>

                            <option value="Urgent">

                                🔴 Urgent

                            </option>

                        </select>

                    </div>

                    <textarea
                        name="additionalInfo"
                        placeholder="📝 Additional Information"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows="5"
                        className="w-full border rounded-2xl p-4 mt-6"
                    />

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full mt-8 py-4 rounded-2xl text-white font-semibold transition ${
                            loading
                                ? "bg-gray-400"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >

                        {loading
                            ? "Saving Case..."
                            : "💾 Save Case"}

                    </button>

                </div>

            </div>

        </div>

    );

}

export default AddCase;