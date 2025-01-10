// Напишите функцию, которая находит уникальный элемент в массиве

const arr1 = [0,0,1,1,1,3,3,3,4,4,5,6,6,7,7];
const arr2 = ['dog', 'dog', 'cat', 'cat', 'sheep', 'parrot', 'parrot'];

const getUniqElement = (arr) => {
  let map = new Map()
  let array = [];
  for(let e of arr){
     map.set(e, map.has(e) ? 0 : 1);
  }
  for (let e of map.entries()) {
     if (e[1]) array.push(e[0]);
  }
 
  return array;

}

console.log(getUniqElement(arr1)); // 5
console.log(getUniqElement(arr2)); // 'sheep'


