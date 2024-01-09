export const fetchMovieData = async () => {
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