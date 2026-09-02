import { useParams } from 'react-router-dom'
import Properties from '../Data/Properties.js'

function ShowProperty({ addToFavorites }) {
  const { id } = useParams();
  console.log(id);
  const property = Properties.find((p) => p.id === Number(id)) // 1==3,2==3,3==3

  return (
    <>
      <div className="show_property">
        <img src={property.image} alt={"not found"} width="200%" />
        <h2>{property.title}</h2>
        <p>{property.location}</p>
        <p><span style={{ fontWeight: 'bold' }}>₹ {property.price}</span></p>
        <p>{property.type}</p>
        <p>{property.bhk} BHK</p>
        <p>{property.area} Sqft</p>
        {/* <button onClick={() => addToFavorites(property)}>Add to Favorites</button> */}
        <button
          onClick={() => {
            console.log("Favorite clicked");
            console.log("Property:", property);
            addToFavorites(property);
          }}
        >
           Add to Favorites
        </button>
      </div>
    </>
  )
}

export default ShowProperty;