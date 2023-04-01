// Example data
const movies = [
  {
    title: "Movie Title 1",
    poster: "daftar/norogami.jpg",
  },
  {
    title: "Movie Title 2",
    poster: "daftar/overlord.jpg",
  },
  {
    title: "Movie Title 3",
    poster: "daftar/𝚋𝚕𝚎𝚊𝚌𝚑.jpg",
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
