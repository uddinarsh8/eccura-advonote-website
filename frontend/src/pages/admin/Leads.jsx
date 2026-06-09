import { useEffect, useState } from "react";
import api from "../../services/api";

function Leads() {

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const searchLeads = async () => {

    try {

      const response =
        await api.get(
          `/admin/search?search=${search}`
        );

      setLeads(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    const fetchLeads = async () => {

      try {

        const response =
          await api.get(
            "/admin/leads"
          );

        setLeads(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchLeads();

  }, []);

  return (

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Leads Management
      </h1>

      <div className="mb-4 flex gap-2">

        <input
          type="text"
          placeholder="Search Leads"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-2 w-full"
        />

        <button
          onClick={searchLeads}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Search
        </button>

      </div>

      <table className="w-full border">

        <thead>

          <tr className="bg-gray-200">

            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Source</th>
            <th className="border p-2">Status</th>

          </tr>

        </thead>

        <tbody>

          {leads.length > 0 ? (

            leads.map((lead) => (

              <tr key={lead.id}>

                <td className="border p-2">
                  {lead.name}
                </td>

                <td className="border p-2">
                  {lead.email}
                </td>

                <td className="border p-2">
                  {lead.phone}
                </td>

                <td className="border p-2">
                  {lead.source}
                </td>

                <td className="border p-2">
                  {lead.status}
                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="5"
                className="text-center p-4"
              >
                No Leads Found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

}

export default Leads;