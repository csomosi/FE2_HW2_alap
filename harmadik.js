// 3. Készíts egy függvényt ami megvizsgálja egy elem összes típusát, és kigyűjti őket egy új tömbbe. pl. ebből a tömbből:

const x = ["", 4, true];
const results = [];

function testingTypes(array) {
  for (let i = 0; i < array.length; i++) {
    results.push(typeof x[i]);
  }
}
testingTypes(x);
console.log(results);
