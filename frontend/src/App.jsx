import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import Analytics from "./pages/admin/Analytics";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

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
          element={<Leads />}
        />
        <Route
          path="/admin/analytics"
          element={<Analytics />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;