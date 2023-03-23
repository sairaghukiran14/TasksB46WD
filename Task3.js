//Checking the Objects whether they have same properties or not

let obj1 = { name1: "Person1", age: 5 };
let obj2 = { age: 5, name1: "Person1" };
if (obj1.name1 == obj2.name1 && obj1.age == obj2.age) {
  console.log("Both the Objects have same properties");
}
//

import fetch from "node-fetch";

let fetchres = fetch(`https://restcountries.com/v3.1/all`);
fetchres
  .then((res) => res.json())
  .then((d) => {
    console.log(d);
  })
  .catch((err) => console.log(err));

//europe region displays
let fetchresult = fetch(`https://restcountries.com/v3.1/region/europe`);
fetchres
  .then((res) => res.json())
  .then((d) => {
    console.log(d);
  })
  .catch((err) => console.log(err));

  //medium Questions
  