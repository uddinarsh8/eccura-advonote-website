import { Link } from "react-router-dom";

function AdminSidebar() {

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    window.location.href =
      "/admin/login";

  };

  return (

    <div className="w-64 h-screen bg-gray-900 text-white p-6">

      <h2 className="text-2xl font-bold mb-8">
        Advonote Admin
      </h2>

      <div className="space-y-4">

        <Link
          to="/admin/dashboard"
          className="block"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/leads"
          className="block"
        >
          Leads
        </Link>

        <Link
          to="/admin/analytics"
          className="block"
        >
          Analytics
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded mt-6"
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default AdminSidebar;