const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGQ0MTY5ZDNlZDMwMWMyMWU1MzFlNzlmZWE3YmU3NiIsInN1YiI6IjY1OTNjMjMwZTAwNGE2NmQ2MzE4M2IyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dD4evSXC1tVDr9ykCcM2brykSnx2y5tnBayRMSsGgXw'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => (response.results.forEach(row => {
        let poster = row.poster_path;
        let title = row.title;
        let vote = row.vote_average;
        let view = row.overview;
        let id = row.id;

        let temp_html = `
        <div class="item" onclick="alert('영화 id : ${id}')">
                <img src="https://image.tmdb.org/t/p/w500${poster}" alt="">
                <h3 class="item-title">${title}</h3>
                <p>영화 설명 : ${view}</p>
                <p>평점 : ${vote}</p>
        </div>`;

        document.getElementById('cards').innerHTML += temp_html;



    })
    ))
    .catch(err => console.error(err));


const handleSearch = searchKey => {
    let items = document.querySelectorAll(".item");

    items.forEach((item) => {
        const title = item.querySelector(".item-title").textContent.toLowerCase();
        const searchValue = searchKey.toLowerCase();

        if (title.includes(searchValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


let searchValue = document.querySelector("#search-input");
let form = document.querySelector(".search");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSearch(searchValue.value);
});



