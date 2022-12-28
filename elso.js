// 1. készíts egy programot ami az alábbi tömbben eldönti az összes elemről hogy osztható e kettővel vagy nem

const nums = [3, 4, 9, 6, 2];
let results = [];
const a = "osztható";
const b = "nem osztható";

// declare a function that divides all items of nums arry by 2 and put a or b  in a results array:

function divByZero(array) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      results[i] = a;
    } else {
      results[i] = b;
    }
  }
}

divByZero(nums);

// declare a function that shows the results on the console - each item in a new line:

function showResults(r) {
  for (let i = 0; i < results.length; i++) {
    console.log(nums[i] + ": " + results[i]);
  }
}

showResults(results);
