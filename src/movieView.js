import { fetchMovieData } from "./fetchData.js";
export const viewMovieCard = async () => {
    const movies = await fetchMovieData();

    const cards = document.getElementById('cards');
    cards.innerHTML = movies
        .map(
            (movie) => `
                <div class="item">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="" onclick="alert('영화 id : ${movie.id}')">
                    <h3 class="item-title">${movie.title}</h3>
                    <p>영화 설명 : ${movie.overview}</p>
                    <p>평점 : ${movie.vote_average}</p>
                </div>`
        )
        .join("");

}