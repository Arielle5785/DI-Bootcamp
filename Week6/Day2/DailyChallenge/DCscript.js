document.getElementById("giphyForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    const category = document.getElementById("category").value.trim();//take out spaces and get the search result
    const gifResults = document.getElementById("gifResults");//take the result

    try {
        // Fetch GIF from the Giphy API
        const fetchQuery = `https://api.giphy.com/v1/gifs/search?q=${category}&rating=g&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
        const response = await fetch(fetchQuery);// from the input of the user, we get the query value, the code insert it in the URL address

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }//second error message: if the user doesn't enter an existing category corresponding to the query

        const data = await response.json();
        if (data.data.length === 0) {// Check if GIFs are available
            alert("No GIFs found for this category.");
            return;
        }
        const randomGif = data.data[Math.floor(Math.random() * data.data.length)];
        const gifUrl = randomGif.images.fixed_height.url; // Get a random GIF from the results

        // Create a container for the GIF and its DELETE button
        const gifContainer = document.createElement("div");
        gifContainer.className = "gif-container";

        // Create and append the GIF image
        const img = document.createElement("img");
        img.src = gifUrl;
        img.alt = randomGif.title;
        gifContainer.appendChild(img);

        // Create and append the DELETE button for the GIF
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteButton.addEventListener("click", () => {
            gifContainer.remove();
        });
        gifContainer.appendChild(deleteButton);

        // Append the GIF container to the results div
        gifResults.appendChild(gifContainer);
    } catch (error) {
        console.error(`Error fetching GIF: ${error.message}`);
    }
});

// Add a DELETE ALL button
const deleteAllButton = document.createElement("button");
deleteAllButton.textContent = "DELETE ALL";
deleteAllButton.addEventListener("click", () => {
    const gifResults = document.getElementById("gifResults");
    gifResults.innerHTML = ""; // Clear all GIFs
});
document.body.appendChild(deleteAllButton);

