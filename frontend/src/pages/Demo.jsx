import { useState } from "react";
import api from "../services/api";

function Demo() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
      await api.post(
        "/demo",
        form
      );

      alert(response.data.message);

    } catch (error) {

      console.log(error);

      alert("Error submitting demo request");

    }

  };

  return (

    <div className="max-w-3xl mx-auto py-20">

      <h1 className="text-4xl font-bold mb-8">
        Request Demo
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="w-full border p-3"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
          className="w-full border p-3"
        />

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          className="w-full border p-3"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Request Demo
        </button>

      </form>

    </div>

  );

}

export default Demo;