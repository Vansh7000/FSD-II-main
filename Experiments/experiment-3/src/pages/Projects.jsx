import CardComponent from "../components/CardComponent";

export default function Projects() {
  const events = [
    { title: "Web Dev Workshop", desc: "React + UI Libraries hands-on session.", tag: "Workshop" },
    { title: "AI Quiz", desc: "Fast quiz round with surprise rewards.", tag: "Quiz" },
    { title: "Poster Making", desc: "Design competition with judging.", tag: "Contest" },
    { title: "Coding Sprint", desc: "DSA speed challenge for 60 mins.", tag: "Coding" },
    { title: "Startup Pitch", desc: "Pitch your idea in 3 minutes.", tag: "Pitch" },
    { title: "Sports Meet", desc: "Cricket, badminton, and relay.", tag: "Sports" },
  ];

  return (
    <div>
      <h1 className="h3 fw-bold">All Events</h1>
      <p className="text-muted">
        Choose your favorite events and register from the RSVP page.
      </p>

      <div className="row g-3 mt-1">
        {events.map((e, idx) => (
          <div className="col-12 col-md-4" key={idx}>
            <CardComponent {...e} />
          </div>
        ))}
      </div>
    </div>
  );
}
