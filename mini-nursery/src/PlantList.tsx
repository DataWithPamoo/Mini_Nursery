
import {Plant} from "./types";

type Props = {
  plants: Plant[];
  selectedId: number | null;
  onSelect: (id: number) => void;
};

export default function PlantList({ plants, selectedId, onSelect }: Props) {
  return (
    <ul className="list-group">
      {plants.map((p) => (
        <li
          key={p.id}
          className={`list-group-item ${selectedId === p.id ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => onSelect(p.id)}
        >
          <strong>{p.name}</strong> <br />
          <small>{p.scientific}</small> <br />
          <span className="badge bg-primary me-2">{p.difficulty}</span>
          <span className="badge bg-warning">{p.rarity}</span>
        </li>
      ))}
    </ul>
  );
}