
exports.min = function min (array) {
  if(!array || array.length === 0){
    return 0;
  } else {
    let number = array[0]
    for (let i = 1; i < array.length; i++) {
      if (array[i] < number) {
        number = array[i]
      }
    } 
    return number
  }
}

exports.max = function max (array) {
  if(!array || array.length === 0){
    return 0;
  } else {
    let number = array[0]
    for (let i = 1; i < array.length; i++) {
      if (array[i] > number) {
        number = array[i]
      }
    } 
    return number
  }
}

exports.avg = function avg (array) {
  if(!array || array.length === 0){
    return 0;
  } else {
    let summ = 0;
    for (let i = 0; i < array.length; i++) {
    summ += array[i]
    }
    let result = summ / array.length;
    return result
  }
}
