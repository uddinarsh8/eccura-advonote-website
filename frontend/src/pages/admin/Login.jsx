import { useState } from "react";
import api from "../../services/api";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(response.data.admin)
      );

      alert("Login Successful");

      window.location.href =
        "/admin/dashboard";

    } catch (error) {

      console.log(error);

      alert("Invalid Credentials");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center">

      <div className="w-full max-w-md p-8 shadow-lg rounded-lg">

        <h1 className="text-3xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          Login
        </button>

      </div>

    </div>

  );

}

export default Login;