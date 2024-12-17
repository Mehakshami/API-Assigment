fetch("https://dummyapi.online/api/movies")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("movies-container");
    data.map(movie => {
      const card = document.createElement("div");
      card.classList.add("movie-card");

      card.innerHTML = `
        <img src="https://via.placeholder.com/250x150" alt="Movie Image">
        <h3>Title: ${movie.title}</h3>
        <p><strong>Movie :</strong> ${movie.movie || ""}</p>
        <p><strong>Rating:</strong> ${movie.rating || "Not Available"}</p>
        <p><strong>ID:</strong> ${movie.id}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error fetching data:", error));
