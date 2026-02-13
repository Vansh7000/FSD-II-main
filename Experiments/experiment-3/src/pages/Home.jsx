import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";

export default function Home() {
  const highlights = [
    { title: "Tech Talk", desc: "Industry speakers + career guidance.", tag: "Talk" },
    { title: "Hackathon", desc: "24-hour build challenge with prizes.", tag: "Compete" },
    { title: "Cultural Night", desc: "Dance, music, fun performances.", tag: "Fun" },
  ];

  return (
    <div className="d-flex flex-column gap-4">
      <HeroSection />

      <div>
        <h2 className="h4 fw-bold mb-3">Highlights</h2>
        <div className="row g-3">
          {highlights.map((item, idx) => (
            <div className="col-12 col-md-4" key={idx}>
              <CardComponent {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
