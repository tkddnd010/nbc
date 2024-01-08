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

    async function fetchMovieData() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGQ0MTY5ZDNlZDMwMWMyMWU1MzFlNzlmZWE3YmU3NiIsInN1YiI6IjY1OTNjMjMwZTAwNGE2NmQ2MzE4M2IyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dD4evSXC1tVDr9ykCcM2brykSnx2y5tnBayRMSsGgXw'
            },
        };

        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const res = await response.json();
        return res.results;
    }
}