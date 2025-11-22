
import { Plant } from "./types";

type Props = {
  plant: Plant;
};

export default function PlantCard({ plant }: Props) {
  if (!plant) return <div>Select a plant</div>;

  return (
    <div className="card p-3">
      <h3>
        {plant.name} <br />
        <small>{plant.scientific}</small>
      </h3>

      <p>{plant.description}</p>

      <span className="badge bg-primary me-2">{plant.difficulty}</span>
      <span className="badge bg-warning">{plant.rarity}</span>

      <p className="mt-3">
        <strong>Light:</strong> {plant.light === "Bright" ? "🌞" : plant.light === "Medium" ? "⛅" : "🌙"}
        <br />
        <strong>Water:</strong> {plant.water === "Frequent" ? "💧💧💧" : plant.water === "Moderate" ? "💧💧" : "💧"}
      </p>

      <button className="btn btn-secondary me-2" disabled>
        View
      </button>
      <button className="btn btn-success" disabled>
        Buy
      </button>
    </div>
  );
}