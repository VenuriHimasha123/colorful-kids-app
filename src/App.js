import React, { useState } from "react";
import "./App.css";

const animals = [
  { name: "Lion", color: "#ff0000ff", emoji: "🦁" },
  { name: "Elephant", color: "#eb8787ff", emoji: "🐘" },
  { name: "Monkey", color: "#eb0c0cff", emoji: "🐒" },
  { name: "Panda", color: "#ff0606ff", emoji: "🐼" },
  { name: "Frog", color: "#cd3f32ff", emoji: "🐸" },
];

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <div className="App">
      <h1>new sub</h1>
      <h1>🌈Animal Cards for Kids 🐾</h1>
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
