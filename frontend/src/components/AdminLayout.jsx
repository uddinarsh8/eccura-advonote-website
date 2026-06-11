import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children }) {

    return (

        <div className="min-h-screen bg-gray-100 flex">

            <AdminSidebar />

            <main className="flex-1 p-4 sm:p-6 overflow-x-hidden">

                {children}

            </main>

        </div>

    );

}

export default AdminLayout;