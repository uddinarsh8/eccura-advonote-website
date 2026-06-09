import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">

        <h1 className="text-2xl font-bold text-blue-700">
          Advonote
        </h1>

        <div className="space-x-6">

          <Link to="/">Home</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/demo">Request Demo</Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;