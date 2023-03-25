//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class movie {
  constructor(title, studio, rating) {
    this.title = title;

    this.studio = studio;
    if (!rating) {
      this.rating = "PG";
    } else this.rating = rating;
  }
  getPG(arr) {
    let p = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].rating.includes("PG")) {
        p.push(arr[i]);
      }
    }
    console.log(p);
  }
}

let m1 = new movie("Dabang", "EROSNOW");
//console.log(m1);

let m2 = new movie("Casino Royale", "Eon Productions", "PG13");
//console.log(movie2);
let m3 = new movie("Msmarvel", "marvel", "R");
let m4 = new movie("Worldwar HUlk", "marvel", "3R");
let moviesarray = [m1, m2, m3, m4];
//getPG(moviesarray);

//Write a “person” class to hold all the details.

class person {
  constructor(name, gender, maritalstatus, age) {
    this.name = name;
    this.gender = gender;
    this.maritalstatus = maritalstatus;
    this.age = age;
  }
}
let raghu = new person("Raghu", "Male", "married", 24);
console.log(raghu);
//write a class to calculate the uber price.
