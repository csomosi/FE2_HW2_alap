// 2. készíts egy programot ami kiírja a tömb összes elemét de úgy hogy az indexét is pl. ebből:

const players = ["Peter", "Kate", "John"];

//  using an extra variable 'k' to show the number of item starting from 1 not from 0

function showItems(array) {
  for (let i = 0; i < array.length; i++) {
    k = i + 1;
    console.log(k + ". " + array[i]);
  }
}

showItems(players);
