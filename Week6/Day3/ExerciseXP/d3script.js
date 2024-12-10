//get the info
let button = document.getElementById('button');
let names = document.getElementById('name');
let height = document.getElementById('height');
let gender = document.getElementById('gender');
let birthYear = document.getElementById('birth-year');
let homeWorld = document.getElementById('home-world');
let spinner = document.querySelector('.spinner');

//fetch API
const dataSW = async () => {
    
    try {
        spinner.style.display = 'block';
        const randomID = Math.floor(Math.random() * 83) + 1;     
        const response = await fetch(`https://www.swapi.tech/api/people/${randomID}`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        const character = data.result.properties;

        const homeResponse = await fetch(`${character.homeworld}`);
        const homeWorldData = await homeResponse.json();
        const homeWorldName = homeWorldData.result.properties.name;
        
        names.textContent = `${character.name}`;
        height.textContent = `Height: ${character.height} cm`;
        gender.textContent = `Gender: ${character.gender}`;
        birthYear.textContent = `Birth Year: ${character.birth_year}`;
        homeWorld.textContent = `Homeworld: ${homeWorldName}`;
        spinner.style.display = 'none';

    } catch (error) {
        console.log(`Failed to load data.`);
        spinner.style.display = 'none';
    }
};

// Add event listener to the button
button.addEventListener('click', dataSW);