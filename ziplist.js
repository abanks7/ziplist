const numberList = [1, 2, 3];
const letterList = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const newList = new Array(list1.length + list2.length);
  let j = 0;
  let k = 1;

  for (let i = 0; i < newList.length / 2; i++) {
    newList[j] = list1[i];
    j += 2;
    newList[k] = list2[i];
    k += 2;
  }
  return newList;
}

console.log(zipList(numberList, letterList));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(numberList, letterList));
