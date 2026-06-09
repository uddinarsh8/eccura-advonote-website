import { useEffect, useState } from "react";
import api from "../../services/api";

function Dashboard() {

  const [stats, setStats] = useState({
    totalLeads: 0,
    contactRequests: 0,
    demoRequests: 0
  });

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const response =
          await api.get("/admin/dashboard");

        setStats(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchDashboard();

  }, []);

  return (

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="shadow-lg p-6 rounded-lg">
          <h2>Total Leads</h2>
          <p className="text-3xl font-bold">
            {stats.totalLeads}
          </p>
        </div>

        <div className="shadow-lg p-6 rounded-lg">
          <h2>Contact Requests</h2>
          <p className="text-3xl font-bold">
            {stats.contactRequests}
          </p>
        </div>

        <div className="shadow-lg p-6 rounded-lg">
          <h2>Demo Requests</h2>
          <p className="text-3xl font-bold">
            {stats.demoRequests}
          </p>
        </div>

      </div>

    </div>

  );

}

export default Dashboard;