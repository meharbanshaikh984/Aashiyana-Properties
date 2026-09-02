
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="logout">
      <h5>Logout</h5>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

