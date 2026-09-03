import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success">
      <h4>Successful Payment</h4>
      <h3>Thank you for Booking the property</h3>
      <h5>To see more property click here</h5>

      <button
        onClick={() => navigate("/")}
        className="success_btn"
      >
        Explore
      </button>
    </div>
  );
}

export default Success;