import { useNavigate } from "react-router-dom";

function FavoriteProperty({ favorite }) {
  const navigate = useNavigate();

  return (
    <div className="favorite_page">
      <h2>Favorite Properties</h2>
        <>
          <div className="property_grid">
            {favorite.map((p) => (
              <div className="property_card" key={p.id}>
                <img src={p.image} alt={p.title} />

                <h3>{p.title}</h3>
                <p>📍 {p.location}</p>
                <p>₹ {p.price}</p>
                <p>{p.type}</p>
                <p>{p.bhk} | {p.area} sq.ft</p>
              </div>
            ))}
          </div>

          <div className="payment_button">
            <button onClick={() => navigate("/payment")}>
              Proceed to Payment
            </button>
          </div>
        </>
      
    </div>
  );
}

export default FavoriteProperty;

  
    