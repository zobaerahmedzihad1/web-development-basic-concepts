const searchFood = () => {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  inputField.value = "";

  if (inputText == "") {
    const empty = document.getElementById("empty-string");
    empty.innerText = "PLEASE WRITE SOMETHING.";
    empty.style.color = "red";
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => displayMeals(data.meals));
  }
};

const displayMeals = (meals) => {
  const showDetails = document.getElementById("show-details");

  meals.forEach((meal) => {
    if (!meal) {
      console.log("hello");
    }

    const { strMeal, strMealThumb, strInstructions, idMeal } = meal;
    showDetails.textContent = "";
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card">
                 <img src="${strMealThumb}" class="card-img-top" alt="image" />
             <div class="card-body">
                 <h5 class="card-title">${strMeal}</h5>
                 <p class="card-text">
                   ${strInstructions.slice(0, 100)}
                 </p>
                <button class="btn btn-outline-info"  onclick="showDetails(${idMeal})">Show Details</button>
             </div>
        </div>
   `;
    showDetails.appendChild(div);
  });
};

const showDetails = (mealId) => {
  showDetails.textContent = "";
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
  const { strMealThumb, strMeal, strInstructions, strYoutube } = meal;
  const mealDetails = document.getElementById("meal-details");

  mealDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
          <img src="${strMealThumb}" class="card-img-top" alt="image">
        <div class="card-body">
          <h5 class="card-title">${strMeal}</h5>
          <p class="card-text"> ${strInstructions.slice(0, 150)}</p>
          <a href="${strYoutube}" target="_blank" class="btn btn-primary">Go Youtube</a>
        </div>
       
`;
  mealDetails.appendChild(div);
};
