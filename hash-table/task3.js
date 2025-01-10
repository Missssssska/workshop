// Напишите функцию, которая находит все подстроки с уникальными элементами в массиве
// и возвращает их количество
const arr = [10,8,3,2,3,1,2,1,5,6,8,9,4,3,2,4,7,8,6,43,1];

const getAllSubUniqArr = (arr) => {
  let set = new Set()
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i])
    for (let j = i + 1; j < arr.length; j++) {
      if (set.has(arr[j])) {
        sum++
        console.log(set)
        set.clear()
        break
      }
      set.add(arr[j])
    }
    if (set.length != 0) {
      //sum++
      // console.log(set)
      set.clear()
    }
  }
  return sum
}

console.log(getAllSubUniqArr(arr)); // 13