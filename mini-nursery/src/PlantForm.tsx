
export default function PlantForm() {
  return (
    <div className="card p-3 shadow-sm">
      <h4>Add New Plant</h4>

      <input className="form-control mb-2" placeholder="Plant Name" disabled />
      <input className="form-control mb-2" placeholder="Scientific Name" disabled />

      <select className="form-select mb-2" disabled>
        <option>Difficulty</option>
      </select>

      <select className="form-select mb-2" disabled>
        <option>Light</option>
      </select>

      <select className="form-select mb-2" disabled>
        <option>Water</option>
      </select>

      <textarea className="form-control mb-2" rows={3} placeholder="Description" disabled />

      <button className="btn btn-primary me-2" disabled>Add Plant</button>
      <button className="btn btn-danger" disabled>Clear</button>
    </div>
  );
}