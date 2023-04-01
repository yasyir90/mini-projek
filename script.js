// Example data
const movies = [
  {
    title: "Movie Title 1",
    description: "Movie Description 1",
    poster: "https://via.placeholder.com/150x200",
  },
  {
    title: "Movie Title 2",
    description: "Movie Description 2",
    poster: "https://via.placeholder.com/150x200",
  },
  {
    title: "Movie Title 3",
    description: "Movie Description 3",
    poster: "https://via.placeholder.com/150x200",
  },
];

// Add movies to the page
const moviesContainer = document.querySelector(".movies");

movies.forEach((movie) => {
  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");

  const movieImg = document.createElement("img");
  movieImg.src = movie.poster;
  movieImg.alt = `${movie.title} Poster`;
  movieDiv.appendChild(movieImg);

  const movieTitle = document.createElement("h2");
  movieTitle.textContent = movie.title;
  movieDiv.appendChild(movieTitle);

  const movieDescription = document.createElement("p");
  movieDescription.textContent = movie.description;
  movieDiv.appendChild(movieDescription);

  moviesContainer.appendChild(movieDiv);
});
