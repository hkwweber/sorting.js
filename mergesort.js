function split(wholeArray) {
 var middle = Math.floor(wholeArray.length/2);
 firstHalf = wholeArray.slice(0, middle);
 secondHalf = wholeArray.slice(middle);

  return [firstHalf, secondHalf];
}


function merge(left,right) {
  var resultArr = [];
  var leftIdx = 0;
  var rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx]< right[rightIdx]) {
      resultArr.push(left[leftIdx]);
      leftIdx ++;
    }
    else {
      resultArr.push(right[rightIdx]);
      rightIdx ++;
    }
  }
  for (; leftIdx < left.length; leftIdx++) resultArr.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) resultArr.push(right[rightIdx]);
  return resultArr;
}


function mergeSort(array) {
  //base case
  if (array.length < 2) return array;
  var splits = split(array);
  var left = splits[0];
  var right = splits[1];
  return merge(mergeSort(left),mergeSort(right));
}

//tried bonus, didn't work :( :( :( :( ))))
// function merge(left,right,func) {
//   //if func
//   var resultArr = [];
//   var leftIdx = 0;
//   var rightIdx = 0;
//   while (leftIdx < left.length && rightIdx < right.length) {
//     if (func) {
//       if (func(left[leftIdx],right[rightIdx]) === -1) {
//        resultArr.push(left[leftIdx]);
//       leftIdx ++;
//       }
//     }
//     else if (left[leftIdx] < right[rightIdx]) {
//       resultArr.push(left[leftIdx]);
//       leftIdx ++;
//     }
//     else {
//       resultArr.push(right[rightIdx]);
//       rightIdx ++;
//     }
//   }
//   for (; leftIdx < left.length; leftIdx++) resultArr.push(left[leftIdx]);
//   for (; rightIdx < right.length; rightIdx++) resultArr.push(right[rightIdx]);
//   return resultArr;
// }


// function mergeSort(array,func) {
//   //base case
//   if (array.length < 2) return array;
//   var splits = split(array);
//   var left = splits[0];
//   var right = splits[1];
//   return merge(mergeSort(left),mergeSort(right),func);
// }

