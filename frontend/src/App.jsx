import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";

// Admin
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import Analytics from "./pages/admin/Analytics";
import ProtectedRoute from "./components/ProtectedRoute";

import Tutorials from "./components/Tutorials";

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

        <Route
          path="/tutorials"
          element={<Tutorials />}
        />

        {/* Admin Routes */}

        <Route
          path="/admin"
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

      </Routes>

    </BrowserRouter>

  );

}

export default App;