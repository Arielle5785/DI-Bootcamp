// Create an array which value is the planets of the solar system.
const planets = [
    { name: "Mercury", color: "lightgray", moons: 0 },
    { name: "Venus", color: "lightyellow", moons: 0 },
    { name: "Earth", color: "lightblue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "gold", moons: 83 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 },
];

const section = document.querySelector(".listPlanets");

section.style.display = "flex";
section.style.flexWrap = "wrap"; // Allow planets to wrap to the next line if needed
section.style.justifyContent = "space-around"; // Distribute planets evenly
section.style.gap = "50px"; // Add consistent spacing between planets
section.style.maxWidth = "65%"; // Limit the width of the container
section.style.margin = "0 auto"; // Center the container horizontally

planets.forEach(planet => {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet"); // Add the "planet" class for semantics
    planetDiv.style.width = "100px"; // Set the planet size
    planetDiv.style.height = "100px";
    planetDiv.style.borderRadius = "50%";
    planetDiv.style.position = "relative";
    planetDiv.style.border = "2px solid white";
    planetDiv.style.display = "flex";
    planetDiv.style.justifyContent = "center";
    planetDiv.style.alignItems = "center";
    planetDiv.style.flexBasis = "calc(33.333% - 50px)"; // Ensure 3 planets per row
    planetDiv.style.boxSizing = "border-box"; // Include padding/border in the width
    planetDiv.style.backgroundColor = planet.color; // Set the background color

    // Add the planet's name as text below the planet
    const planetName = document.createElement("p");
    planetName.textContent = planet.name;
    planetName.style.color = "blue"; // Make the text visible
    planetName.style.textAlign = "center";
    planetName.style.marginTop = "10px"; // Add some space below the planet
    planetDiv.appendChild(planetName);

    // Append the planet div to the section
    section.appendChild(planetDiv);

    // Create moons if the planet has any
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        moonDiv.style.position = "absolute";
        moonDiv.style.width = "20px";
        moonDiv.style.height = "20px";
        moonDiv.style.borderRadius = "50%";
        moonDiv.style.background = "rgb(237, 237, 237)";
        moonDiv.style.border = "2px solid red";

        // Calculate the position of the moon in a circular orbit
        const angle = (i / planet.moons) * 2 * Math.PI; // Divide circle by the number of moons
        const orbitRadius = 50; // Distance from the planet
        const x = Math.cos(angle) * orbitRadius; // X position
        const y = Math.sin(angle) * orbitRadius; // Y position

        moonDiv.style.transform = `translate(${x}px, ${y}px)`; // Apply position via transform

        // Append the moon to the planet div
        planetDiv.appendChild(moonDiv);
    }
});
