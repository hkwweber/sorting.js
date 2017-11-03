
describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
     expect(split([2,7,4,3,9])).toEqual( [[2,7],[4,3,9]] );
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([2,7],[3,4,9])).toEqual([2,3,4,7,9]);
  });
  it('is able to merge another two sorted arrays into one sorted array', function(){
    expect(merge([1,3,6],[2,4,5])).toEqual([1,2,3,4,5,6]);
  });
});


describe('Merge sort function', function(){
  var myFunc = function(a,b) {
     if (a.age < b.age) return -1;
      if (a.age > b.age) return 1;
  };
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(mergeSort([1,3,6,2,4,5])).toEqual([1,2,3,4,5,6]);
  });
  it('is able to do crazy shit', function(){
    expect(mergeSort([{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }],myFunc)).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
  });
});



// var arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
// var sorted = arrToSort.sort(function comparator (a, b) {
//   if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
//   if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
//   return 0; // returning 0 means "a and b are equivalent"
// });
