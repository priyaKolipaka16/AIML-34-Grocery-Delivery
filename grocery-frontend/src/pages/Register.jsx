import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    name: "Priyanka",
    email: "priya@gmail.com",
    password: "123456",
    phone: "9703545886",
    address: "hyderabad",
    role: "CUSTOMER"
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {

    if (
      user.name === "" ||
      user.email === "" ||
      user.password === "" ||
      user.phone === "" ||
      user.address === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {

      await axios.post(
        "http://localhost:8080/api/auth/register",
        user
      );

      alert("Registration Successful!");

      navigate("/login");

    } catch (error) {

      alert("Registration Failed!");

      console.log(error);

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>Create Account 🛒</h1>

        <p>Join FreshKart today</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />

          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={user.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={user.address}
          onChange={handleChange}
        />

        <button
          className="login-btn"
          onClick={handleRegister}
        >
          Register
        </button>

      </div>

    </div>

  );
}

export default Register;