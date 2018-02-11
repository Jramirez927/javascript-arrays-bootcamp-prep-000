var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, elem){
  array2 = [elem,...array]
  return array2
}

function destructivelyAddElementToBeginningOfArray(array,elem){
  array.unshift(elem)
  return array
}

function addElementToEndOfArray(elem, array){
  return [...array,elem]
}

function destructivelyAddElementToEndOfArray(elem,array){
  array.push(elem)
  return array
}

function accessElementInArray(index,array){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1)
}