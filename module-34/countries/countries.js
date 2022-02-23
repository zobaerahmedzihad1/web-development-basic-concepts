const loadCountries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => displayCountries(data));
};

// calling loadcountries data
loadCountries();

const displayCountries = (countries) => {
  const countryDiv = document.getElementById("country");
  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    const h3 = document.createElement("h3");
    h3.innerText = `The name of country is : ${country.name}`;
    div.appendChild(h3);

    const p = document.createElement("p");
    p.innerText = `Capital : ${country.name} `;
    div.appendChild(p);

    countryDiv.appendChild(div);
  });
};
