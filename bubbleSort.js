function bubbleSort(arr) {
  for (var i = 0; i < arr.length;) {
    for (j = 1; j < arr.length;) {
      if ( arr[j-1] > arr[j]) {
        temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
      };
      j++
    }
    i++
  }
  return arr
};

module.exports = bubbleSort;
