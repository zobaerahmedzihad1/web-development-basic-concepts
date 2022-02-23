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

    div.innerHTML = `
    <h3> The name of country is : ${country.name} </h3>
    <p> ${country.capital}</p>
    <button onclick = 'showDetails("${country.name}")' > more details </button>
    `;

    // const h3 = document.createElement("h3");
    // h3.innerText = `The name of country is : ${country.name}`;
    // div.appendChild(h3);

    // const p = document.createElement("p");
    // p.innerText = `Capital : ${country.name} `;
    // div.appendChild(p);

    countryDiv.appendChild(div);
  });
};

const showDetails = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCountryName(data[0]));
};

const displayCountryName = (country) => {
  console.log(country);
  const singleCountry = document.getElementById("single_country");
  const singleDiv = document.createElement("div");
  singleDiv.innerHTML = `
  <h1> ${country.name.common} </h1>
  <img width = "200px" src="${country.flags.png}" alt="">
  `;
  singleCountry.appendChild(singleDiv);
};
