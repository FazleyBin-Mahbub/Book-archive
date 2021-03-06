// find books
const searchBooks = async () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  // clear search

  searchField.value = "";
  // server error display none

  if (searchText === "") {
    // if no data input
    alert("No data entry 😧 Please Input Something 😊");
  } else {
    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    const response = await fetch(url);
    const loadData = await response.json();
    displaySearchResults(loadData);
  }
};

// display the search results
const displaySearchResults = (books) => {
  const searchResults = document.getElementById("search-results");
  const resultCounter = document.getElementById("result-count");

  // number of data found
  const numOfDataFound = books.numFound;
  searchResults.textContent = "";
  const emptyMessage = document.getElementById("empty-message");

  if (books.docs.length == "") {
    emptyMessage.innerText = "No Data Found 🥺 Please Input Valid Something 😊";
    resultCounter.innerText = 0;
  } else {
    emptyMessage.textContent = "";
    resultCounter.innerText = numOfDataFound;
    books.docs.forEach((book) => {
      const div = document.createElement("div");
      div.classList.add("col");

      div.innerHTML = `
      <div class="card h-100">
        <img height="400px" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top">
      <div class="card-body">
        <h1 class="card-title">${book.title}</h1>
        <p><strong> Author: </strong> ${book.author_name}</p>
        <p><strong> First Publish: </strong> ${book.first_publish_year}</p>
        <p><strong> Publisher: </strong> ${book.publisher}</p>
      </div>
    </div>
        `;
      searchResults.appendChild(div);
    });
  }
};
