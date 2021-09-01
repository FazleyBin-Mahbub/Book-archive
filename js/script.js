const searchBooks = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  // clear search

  searchField.value = "";

  const url = `http://openlibrary.org/search.json?q=${searchText}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displaySearchResults(data.docs));
};

const displaySearchResults = (books) => {
  const searchResults = document.getElementById("search-results");
  books.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100">
      
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top">
          <div class="card-body">
            <h1 class="card-title"> ${book.title} </h1>
           <p> <strong> Author: </strong> ${book.author_name} </p>
           <p> <strong> First Publish: </strong> ${book.first_publish_year} </p>
           <p> <strong> Publisher: </strong> ${book.publisher} </p>
          </div>
        </div>
    `;
    searchResults.appendChild(div);
  });
};
