import { viewMovieCard } from "./movieView.js";
import { handleSearch } from "./search.js";

viewMovieCard();

let searchValue = document.querySelector("#search-input");
searchValue.focus();

let form = document.querySelector(".search");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSearch(searchValue.value);
});
