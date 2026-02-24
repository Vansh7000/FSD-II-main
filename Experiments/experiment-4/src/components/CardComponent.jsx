export default function CardComponent({ title, desc, tag }) {
  return (
    <div className="card h-100 shadow-sm rounded-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="fw-bold mb-0">{title}</h5>
          <span className="badge bg-secondary">{tag}</span>
        </div>

        <p className="mt-2 text-muted">{desc}</p>
      </div>
    </div>
  );
}