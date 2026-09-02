
import { useNavigate } from "react-router-dom";

function PropertyCard({ property }) {
  const navigate = useNavigate();

  const {
    id,
    image,
    title,
    location,
    price,
    type,
    bhk,
    area,
  } = property;

  return (
    <div className="property_card">

      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{location}</p>

      <p>₹ {price}</p>

      <p>{type}</p>

      <p>{bhk} BHK</p>

      <p>{area} Sqft</p>

      <button
        onClick={() => navigate(`/property/${id}`)}
      >
        Visit Property
      </button>

    </div>
  );
}

export default PropertyCard;
