
exports.min = function min (array) {
  if(typeof array == 'undefined') {
    return 0;
  } else if(array.length != 0) {
    let min = array[0];
    for(i = 1; i < array.length; i++) {
      if(array[i] < min) {
        min = array[i]
      }
    }
    return min;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if(typeof array == 'undefined') {
    return 0;
  } else if(array.length != 0){
    let max = array[0];
    for(i = 1; i < array.length; i++) {
      if(array[i] > max) {
        max = array[i]
      }
    }
    return max;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if(typeof array == 'undefined') {
    return 0;
  } else if(array.length != 0){
    let sum = array.reduce((sum, cur) => sum + cur);
    return sum/array.length;
  } else {
    return 0;
  }
}
