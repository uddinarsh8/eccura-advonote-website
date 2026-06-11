import { useState } from "react";
import {
  Link,
  useLocation
} from "react-router-dom";

import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  BarChart3,
  LogOut,
  Shield
} from "lucide-react";

function AdminSidebar() {

  const location = useLocation();

  const [isOpen, setIsOpen] =
    useState(false);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    window.location.href = "/";
  };

  const menus = [

    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard
    },

    {
      title: "Leads",
      path: "/admin/leads",
      icon: Users
    },

    {
      title: "Analytics",
      path: "/admin/analytics",
      icon: BarChart3
    }

  ];

  const admin = JSON.parse(
    localStorage.getItem("admin")
  );

  return (

    <>
      {/* Mobile Header */}

      <div className="lg:hidden bg-slate-900 text-white flex items-center justify-between px-4 py-4">

        <h1 className="font-bold text-xl">

          Advonote Admin

        </h1>

        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
        >

          {isOpen
            ? <X size={28} />
            : <Menu size={28} />}

        </button>

      </div>

      {/* Mobile Overlay */}

      {isOpen && (

        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() =>
            setIsOpen(false)
          }
        />

      )}

      {/* Sidebar */}

      <aside
        className={`
                    fixed lg:static top-0 left-0
                    h-screen w-72
                    w-[85%] max-w-[320px] lg:w-72
                    bg-slate-900 text-white
                    flex flex-col
                    z-50
                    transform transition-transform duration-300

                    ${isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
          }
                `}
      >

        {/* Logo */}

        <div className="p-6 border-b border-slate-800">

          <div className="flex items-center gap-3">

            <div className="bg-blue-600 p-3 rounded-2xl">

              <Shield size={28} />

            </div>

            <div>

              <h2 className="text-2xl font-bold">

                Advonote

              </h2>

              <p className="text-sm text-gray-400">

                Admin Portal

              </p>

            </div>

          </div>

        </div>

        {/* Admin Profile */}

        <div className="p-6 border-b border-slate-800">

          <p className="text-gray-400 text-sm">

            Logged in as

          </p>

          <h3 className="font-semibold text-lg mt-1">

            {admin?.name || "Admin"}

          </h3>

          <p className="text-sm text-gray-400">

            {admin?.email}

          </p>

        </div>

        {/* Navigation */}

        <nav className="flex-1 p-4 space-y-2">

          {menus.map((menu) => {

            const Icon =
              menu.icon;

            return (

              <Link
                key={menu.path}
                to={menu.path}
                onClick={() =>
                  setIsOpen(false)
                }
                className={`
                                    flex items-center gap-4
                                    px-4 py-3 rounded-xl
                                    transition

                                    ${location.pathname === menu.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-slate-800"
                  }
                                `}
              >

                <Icon size={22} />

                {menu.title}

              </Link>

            );

          })}

        </nav>

        {/* Logout */}

        <div className="p-4 border-t border-slate-800">

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 py-3 rounded-xl transition"
          >

            <LogOut size={20} />

            Logout

          </button>

        </div>

      </aside>
    </>
  );
}

export default AdminSidebar;