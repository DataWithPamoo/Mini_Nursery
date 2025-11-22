
export default function PlantForm() {
  return (
    <form className="card p-3 mb-3">
      <h4>Add Plant</h4>

      <input className="form-control mb-2" placeholder="Plant name" disabled />
      <input className="form-control mb-2" placeholder="Scientific name" disabled />

      <select className="form-select mb-2" disabled>
        <option>Difficulty</option>
      </select>

      <select className="form-select mb-2" disabled>
        <option>Light</option>
      </select>

      <select className="form-select mb-2" disabled>
        <option>Water</option>
      </select>

      <textarea className="form-control mb-2" placeholder="Description" disabled />

      <button className="btn btn-primary me-2" disabled>Add Plant</button>
      <button className="btn btn-danger" disabled>Clear</button>
    </form>
  );
}