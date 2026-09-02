import PropertyCard from "../Components/PropertyCard";
import Properties from "../Data/Properties";

function Home() {
  return (
    <>
      <section className="hero">
        <h3>Find Your Dream Home Here</h3>
      </section>
      <section className="property_grid">
        {Properties.map((p) => (
          <PropertyCard key={p.id} property={p}></PropertyCard>
        ))}
      </section>
    </>
  );
}

export default Home;