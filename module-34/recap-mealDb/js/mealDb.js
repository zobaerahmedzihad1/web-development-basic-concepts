const searchFood = () => {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  // console.log(inputText);
  inputField.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  // console.log(meals);

  meals.forEach((meal) => {
    // console.log(meal);
    const { strMeal, strMealThumb, strInstructions, idMeal } = meal;
    const showDetails = document.getElementById("show-details");

    showDetails.textContent = "";

    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card">
                 <img src="${strMealThumb}" class="card-img-top" alt="..." />
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
  // console.log(mealId);
  showDetails.textContent = "";
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
  console.log(meal);
  const { strMealThumb, strMeal, strInstructions, strYoutube } = meal;
  const mealDetails = document.getElementById("meal-details");

  mealDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
          <img src="${strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${strMeal}</h5>
          <p class="card-text"> ${strInstructions.slice(0, 150)}</p>
          <a href="${strYoutube}" target="_blank" class="btn btn-primary">Go Youtube</a>
        </div>
       
`;
  mealDetails.appendChild(div);
};
