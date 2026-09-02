
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    uemail: "",
    upassword: ""
  });

  const acceptData = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setUser({ ...user, [key]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      user.uemail === "admin@gmail.com" &&
      user.upassword === "admin123"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid Email or Password");
      navigate("/login");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login_form">
        <h1>Login</h1>

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;




