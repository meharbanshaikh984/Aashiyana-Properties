import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Payment done Successfully.");

    navigate("/success");
  };

  return (
    <div style={{ backgroundColor: "yellow", minHeight: "100vh" }}>
      <h2>To Book Property Do Partial Payment</h2>

      <div className="payment_form">
        <form onSubmit={handleSubmit}>
          
          <select required>
            <option value="">Select Amount</option>
            <option value="11000">₹11,000</option>
            <option value="22000">₹22,000</option>
            <option value="33000">₹33,000</option>
          </select>

          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />

          <input
            type="text"
            placeholder="Enter your card number"
            required
          />

          <input
            type="text"
            placeholder="Enter your CVV"
            required
          />

          <input
            type="text"
            placeholder="Enter your expiry date"
            required
          />

          <button className="payment_button" type="submit">
            Pay Now
          </button>

        </form>
      </div>
    </div>
  );
}

export default Payment;