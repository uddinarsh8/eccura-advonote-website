import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";

import AdvocateLayout from "./components/AdvocateLayout";

// Admin
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import Analytics from "./pages/admin/Analytics";
import ProtectedRoute from "./components/ProtectedRoute";

// Advocate
import AdvocateLogin from "./pages/advocate/Login";
import AdvocateRegister
  from "./pages/advocate/Register";
import AdvocateDashboard from "./pages/advocate/Dashboard";
import AddCase from "./pages/advocate/AddCase";
import MyCases from "./pages/advocate/MyCases";
import Calendar from "./pages/advocate/Calendar";
import Profile from "./pages/advocate/Profile";
import EditCase from "./pages/advocate/EditCase";
import Clients from "./pages/advocate/Clients";
import AddClient from "./pages/advocate/AddClient";
import Todos from "./pages/advocate/Todos";
import Notifications from "./pages/advocate/Notifications";
import ViewProfile from "./pages/advocate/ViewProfile";
import AdvocateProtectedRoute from "./components/AdvocateProtectedRoute";
import CourtManagement from "./pages/advocate/CourtManagement";
import ReferFriends from "./pages/advocate/ReferFriends";
import Tutorials from "./pages/advocate/Tutorials";
import PrivacyPolicy from "./pages/advocate/Policy";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/demo"
          element={<Demo />}
        />

        {/* Admin Routes */}

        <Route
          path="/admin/login"
          element={<Login />}
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/leads"
          element={
            <ProtectedRoute>
              <Leads />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        {/* Advocate Login */}

        <Route
          path="/advocate/login"
          element={<AdvocateLogin />}
        />
        <Route
          path="/advocate/register"
          element={<AdvocateRegister />}
        />

        {/* Protected Advocate Routes */}

        <Route
          path="/advocate/dashboard"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <AdvocateDashboard />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />

        <Route
          path="/advocate/add-case"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <AddCase />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />

        <Route
          path="/advocate/cases"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <MyCases />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />

        <Route
          path="/advocate/edit-case/:id"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <EditCase />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />

        <Route
          path="/advocate/calendar"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <Calendar />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />

        <Route
          path="/advocate/profile"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <Profile />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />

        <Route
          path="/advocate/clients"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <Clients />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />

        <Route
          path="/advocate/add-client"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <AddClient />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />

        <Route
          path="/advocate/todos"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <Todos />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />

        <Route
          path="/advocate/notifications"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <Notifications />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />
        <Route
          path="/advocate/view-profile"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <ViewProfile />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />
        <Route
          path="/advocate/court-management"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <CourtManagement />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />
        <Route
          path="/advocate/refer-friends"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <ReferFriends />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />
        <Route
          path="/tutorials"
          element={<Tutorials />}
        />

        <Route
          path="/tutorials"
          element={<Tutorials />}
        />

        <Route
          path="/advocate/tutorials"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <Tutorials />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />
        <Route
          path="/advocate/policy"
          element={
            <AdvocateProtectedRoute>
              <AdvocateLayout>
                <PrivacyPolicy />
              </AdvocateLayout>
            </AdvocateProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;