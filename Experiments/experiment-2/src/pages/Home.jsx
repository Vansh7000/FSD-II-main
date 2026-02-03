import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Bootstrap Container & Grid */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <CardComponent
              title="Tech Fest 2025"
              description="Coding contests, hackathons, AI workshops and expert talks."
            />
          </div>

          <div className="col-md-4">
            <CardComponent
              title="Cultural Night"
              description="Dance, music, drama and fashion show performances."
            />
          </div>

          <div className="col-md-4">
            <CardComponent
              title="Sports Meet"
              description="Inter-college sports events promoting fitness and teamwork."
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
