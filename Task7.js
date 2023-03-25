import fetch from "node-fetch";
// let fetchres = fetch("https://restcountries.com/v3.1/all");

const fetchCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
};

const allCountriesData = await fetchCountries();
//Get all the countries from the Asia continent /region using the Filter function
//
const asianCountriesData = allCountriesData.filter((x) => x.region === "Asia");
//console.log(asianCountriesData);
const asianCountriesFlags = asianCountriesData.map((x) => x.flag);
const asianCountriesNames = asianCountriesData.map((x) => x.name.common);
//Get all the countries with a population of less than 2 lakhs using Filter function
//
const populationlessthan2L = allCountriesData.filter(
  (x) => x.population < 200000
);
//Print the following details name, capital, flag using forEach function
//
let ncf = [];
const namecapitalflag = allCountriesData.map((x) =>
  ncf.push([x.name.common, x.capital, x.flag])
);

console.log(ncf);

// const hello = () => {
//   const arr = [];
//   for (const country of allCountriesData) {
//     // const arr = [];
//     arr.push({
//       countryName: country.name.common,
//       countryCapital: country.capital,
//       countryFlag: country.flag,
//     });
//     // console.log(arr);
//   }
//   return arr;
// };
// hello();

//Print the total population of countries using reduce function
//
const totalpopulation = allCountriesData.reduce(
  (total, country) => total + country.population,
  0
);
//console.log(totalpopulation);

//Print the country which uses US Dollars as currency.

let currency = "usd";

const usdcountries = async () => {
  const res = await fetch(
    `https://restcountries.com/v3.1/currency/${currency}`
  );
  const data = await res.json();
  return data;
};

const usd = await usdcountries();
const usd1 = usd.map((c) => c.name.common);
console.log(usd1);

// console.log(countries.filter((x) => x.region === "Asia"));
