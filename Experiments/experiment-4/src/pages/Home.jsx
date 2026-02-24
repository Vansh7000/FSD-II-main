import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import { useApp } from "../context/AppContext";

export default function Home() {
  const { state } = useApp();

  const highlights = [
    {
      title: "Tech Talk",
      desc: "Industry speakers + career guidance.",
      tag: "Talk",
    },
    {
      title: "Hackathon",
      desc: "24-hour build challenge with prizes.",
      tag: "Compete",
    },
    {
      title: "Cultural Night",
      desc: "Dance, music, fun performances.",
      tag: "Fun",
    },
  ];

  return (
    <div className="d-flex flex-column gap-4">
      {/* Hero Section */}
      <HeroSection />

      {/* Theme info using Context */}
      <div className="text-end">
        <small className="text-muted">
          Current Theme: <b>{state.theme}</b>
        </small>
      </div>

      {/* Highlights Section */}
      <div>
        <h2 className="h4 fw-bold mb-3">Highlights</h2>

        <div className="row g-3">
          {highlights.map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <CardComponent
                title={item.title}
                desc={item.desc}
                tag={item.tag}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}