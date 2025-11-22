
import { useState } from "react";
import PlantList from "./PlantList";
import PlantForm from "/PlantForm";
import PlantCard from "./PlantCard";
import { Plant } from "./types";

type Props = {
  plants: Plant[];
};

export default function App({ plants }: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedPlant = plants.find(p => p.id === selectedId) || plants[0];

  return (
    <div className="container mt-4">
      <input className="form-control mb-3" placeholder="Search plants..." />

      <div className="row">
        <div className="col-md-4">
          <PlantList plants={plants} selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        <div className="col-md-8">
          <PlantForm />
          <PlantCard plant={selectedPlant} />
        </div>
      </div>
    </div>
  );
}