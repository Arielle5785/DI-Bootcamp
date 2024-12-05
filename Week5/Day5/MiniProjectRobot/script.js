const robots = [
    { id: 1, name: 'R. Daneel Olivaw', email: "do1954@gmail.com" },
    { id: 2, name: "R. Giskard Reventlov", email: "giskard.reventlov@gmail.com" },
    { id: 3, name: "Robbie", email: "robbie_1940@hotmail.com" },
    { id: 4, name: "Speedy", email: "gonzalez@gmail.com" },
    { id: 5, name: "Cutie", email: "joly@hotmail.com" },
    { id: 6, name: "Herbie", email: "herbie_grass@yahoo.com" },
    { id: 7, name: "R. Jander Panell", email: "rjp@gmail.com" },
    { id: 8, name: "R. Sammy", email: "samy@gmail.com" },
    { id: 9, name: "R. Geronimo", email: "geronimo@gmail.com" },
    { id: 10, name: "R. Sarton", email: "sarton@hotmail.com" },
    { id: 11, name: "R. Andrew Martin", email: "a.martin@gmail.com" },
    { id: 12, name: "Norby", email: "norby@yahoo.com" },
];

const createRobotCard = (robot) => {
    const card = document.createElement("div");
    card.className = "robotCard";

    const image = document.createElement("img");
    image.className = "robotImage";
    image.src = `https://robohash.org/${robot.id}?size=200x200`;
    image.alt = robot.name;

    const name = document.createElement("div");
    name.className = "robotName";
    name.textContent = robot.name;

    const info = document.createElement("div");
    info.className = "robotInfo";
    info.textContent = robot.email;

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(info);

    return card;
};
const displayRobots = (robotList) => {
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = ""; // Clear existing cards

    robotList.forEach((robot) => {
        const card = createRobotCard(robot);
        cardsContainer.appendChild(card);
    });
};
displayRobots(robots);

// Filter robots on search
const searchInput = document.getElementById("searchRobots");
searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredRobots = robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchTerm)
    );
    displayRobots(filteredRobots);
});
