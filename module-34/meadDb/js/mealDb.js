const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayResult(data.meals));

  searchField.value = "";
};

const displayResult = (meals) => {
  const searchResult = document.getElementById("search-result");
  meals.forEach((meal) => {
    console.log(meal);

    const { strMealThumb, strMeal, strInstructions } = meal;

    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="card h-100">
          <img width="100px" src="${strMealThumb}" class="card-img-top" alt="image" />
          <div class="card-body">
            <h5 class="card-title">${strMeal}</h5>
            <p class="card-text">
             hello bro I am here
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
      </div>
    `;
    searchResult.appendChild(div);
  });
};
