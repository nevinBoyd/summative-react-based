import StoreInfo from "../components/StoreInfo";
import VisitLocations from "../components/VisitLocations";

function HomePage() {
  return (
    <section className="home-wrapper">
      <div className="home-inner">
        <h2>Our Shop</h2>
        <StoreInfo />
        <VisitLocations />
      </div>
    </section>
  );
}

export default HomePage;
