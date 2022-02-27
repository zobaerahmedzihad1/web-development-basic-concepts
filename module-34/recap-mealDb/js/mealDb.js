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
    console.log(meal.strMeal);
    const { strMeal, strMealThumb, strInstructions } = meal;
    const showDetails = document.getElementById("show-details");
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card">
                 <img src="${strMealThumb}" class="card-img-top" alt="..." />
             <div class="card-body">
                 <h5 class="card-title">${strMeal}</h5>
                 <p class="card-text">
                   ${strInstructions.slice(0, 200)}
                 </p>
             </div>
        </div>
   `;
    showDetails.appendChild(div);
  });
};
