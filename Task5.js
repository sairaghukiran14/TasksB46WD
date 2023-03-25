//Print Odd numbers in Array
let arr = [1, 5, 8, 2, 22, 9, 19, 33];
let oddnum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
};
oddnum(arr);

//Convert all the strings to title caps in a string array

// let arr1 = ["hello", "world", "rog", "fred"];
// for (let i = 0; i < arr1.length; i++) {
//   let t;
//   t = arr1[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   arr[i] = t;
// }

// sum of all the numbers in array
let arr2 = [1, 5, 8, 2, 22, 9, 19, 33];
let sumnum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum = sum + arr[i];
  return sum;
};
console.log("sum is " + sumnum(arr2));

//Return all the prime numbers in an array
let arr3 = [5, 7, 8, 90, 3];
let primeall = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (prime(arr[i])) console.log(arr[i]);
  }
};
let prime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) if (n % i === 0) return false;
  return true;
};

primeall(arr3);

//Return all the palindromes in an array
let arr4 = [151, 7, 8, 101, 32341];
console.log("palindromes");
let palindromeall = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (palindromes(arr[i])) {
      console.log(arr[i]);
    }
  }
};

let palindromes = (n) => {
  let rev = 0;
  while (n != 0) {
    rev = rev * 10;
    rev = rev + (n % 10);
    n = Math.trunc(n / 10);
  }
  if (n === rev) return true;
  else return false;
};

palindromeall(arr4);

//Return median of two sorted arrays of the same size.
let sarr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let sarr2 = [11, 13, 14];
let t1;
let medianof2 = (sarr1, sarr2) => {
  let sarr12 = [...sarr1, ...sarr2].sort(function (a, b) {
    return a - b;
  });

  if (sarr12.length % 2 == 0) {
    t1 = (sarr12[sarr12.length / 2] + sarr12[sarr12.length / 2 - 1]) / 2;
  } else {
    t1 = sarr12[Math.floor(sarr12.length / 2)];
  }
  return t1;
};

console.log(medianof2(sarr1, sarr2));
//Remove duplicates from an array

let a1 = [1, 3, 3, 4, 5, 5, 7, 8, 9];
let remdup = (a1) => {
  let a2 = a1.filter((item, index) => a1.indexOf(item) === index);
  return a2;
};
//console.log(remdup(a1));

//Rotate an array by k times
let k = 1;
let abc = ["h", "e", "l", "l", "o"];

let rotatearray = (arr, k) => {
  for (let i = 0; i < k; i++) {
    let g = arr.pop();
    arr.unshift(g);
  }
  return arr;
};
console.log(rotatearray(abc, k));
