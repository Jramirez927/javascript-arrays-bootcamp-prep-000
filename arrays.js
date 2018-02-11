var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(elem, array){
  return [elem,...array]
}

function destructivelyAddElementToBeginningOfArray(elem,array){
  array.unshift(elem)
  return array
}

function addElementToEndOfArray(elem, array){
  return [...array,elem]
}

function destructivelyAddElementToEndOfArray(elem,array){
  array = [...array,elem]
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