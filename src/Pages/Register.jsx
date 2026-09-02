
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    uname: "",
    uemail: "",
    upassword: "",
    ucpassword: ""
  });

  const acceptData = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setUser({ ...user, [key]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.upassword !== user.ucpassword) {
      alert("Password does not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="register_form">
        <h1>Register</h1>

        <label>Name</label>
        <input
          type="text"
          id="uname"
          placeholder="Enter Name"
          onChange={acceptData}
          required
        />

        <label>Email</label>
        <input
          type="email"
          id="uemail"
          placeholder="Enter Email"
          onChange={acceptData}
          required
        />

        <label>Password</label>
        <input
          type="password"
          id="upassword"
          placeholder="Enter Password"
          onChange={acceptData}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          id="ucpassword"
          placeholder="Confirm Password"
          onChange={acceptData}
          required
        />

        <button type="submit">Register</button>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
}

export default Register;

