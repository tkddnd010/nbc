export const handleSearch = searchKey => {
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
};