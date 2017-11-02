function bubbleSort(array) {

    var first;
    var second;
    var currentArr = array;
   while (currentArr.length > 1) {
     for (var i = 0; i < currentArr.length -1; i++) {
        first = array[i];
        second = array[i+1];
        if (compare(first,second)) {
          swap(array,i,first,second);
        }
      }
      currentArr = array.slice(0,currentArr.length -1);

    }
    return array;

}

function swap(array,index,first,second) {
  array[index] = second;
  array[index + 1] = first;

}

function compare(first,second) {
  if (first > second) {
    return true;
  }
}
