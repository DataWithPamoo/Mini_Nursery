
import {Plant} from "./types";

type Props = {
  plant: Plant | null;
};

export default function PlantCard({ plant }: Props) {
  if (!plant) return <div>Select a plant to view details...</div>;

  const lightIcon = plant.light === "Low" ? "🌑" : plant.light === "Medium" ? "🌓" : "🌕";
  const waterIcon =
    plant.water === "Low" ? "💧" : plant.water === "Moderate" ? "💦" : "💧💧💧";

  return (
    <div className="card p-3 shadow-sm">
      <h3>
        {plant.name} <br />
        <small className="text-muted">{plant.scientific}</small>
      </h3>

      <p>{plant.description}</p>

      <div className="mb-2">
        <span className="badge bg-primary me-2">{plant.difficulty}</span>
        {plant.rarity && <span className="badge bg-warning text-dark">{plant.rarity}</span>}
      </div>

      <p><strong>Light:</strong> {lightIcon}</p>
      <p><strong>Water:</strong> {waterIcon}</p>

      <button className="btn btn-secondary me-2" disabled>View</button>
      <button className="btn btn-success" disabled>Buy</button>
    </div>
  );
}