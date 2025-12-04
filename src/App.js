import React, { useState } from "react";
import "./App.css";

const animals = [
  { name: "Lion", color: "#FFD700", emoji: "🦁" },
  { name: "Elephant", color: "#87CEEB", emoji: "🐘" },
  { name: "Monkey", color: "#FFB6C1", emoji: "🐒" },
  { name: "Panda", color: "#D3D3D3", emoji: "🐼" },
  { name: "Frog", color: "#32CD32", emoji: "🐸" },
];

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <div className="App">
      <h1>🌈 Fun Animal Cards for Kids 🐾</h1>
      <div className="card-container">
        {animals.map((animal, index) => (
          <div
            key={index}
            className="animal-card"
            style={{ backgroundColor: animal.color }}
            onClick={() => setSelectedAnimal(animal.name)}
          >
            <span className="emoji">{animal.emoji}</span>
          </div>
        ))}
      </div>
      {selectedAnimal && <h2>You clicked: {selectedAnimal}</h2>}
    </div>
  );
}

export default App;
