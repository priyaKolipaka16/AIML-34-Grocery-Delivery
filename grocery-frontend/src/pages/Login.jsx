import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    if (email === "" || password === "") {
      alert("Please fill all fields.");
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password
        }
      );

      const user = response.data;

      localStorage.setItem("user", JSON.stringify(user));

      alert("Login Successful!");

      if (user.role === "ADMIN") {

        navigate("/admin/dashboard");

      } else if (user.role === "CUSTOMER") {

        navigate("/");

      } else if (user.role === "DELIVERY") {

        navigate("/delivery/dashboard");

      }

    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Invalid Email or Password";

      alert(message);
      console.log(error);
    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>Login to continue shopping with FreshKart</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="register-link">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>

      </div>

    </div>

  );

}

export default Login;