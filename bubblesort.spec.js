describe('Bubble Sort', function(){

  beforeAll(function () {
    spyOn(window,'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });

  it('doesnt call swap on an empty array', function () {
    bubbleSort([]);
    expect(window.swap.calls.count()).toEqual(0);
  });


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it ('handles an array with one value', function() {
    expect( bubbleSort([5]) ).toEqual([5]);
  });
  it ('handles an array with multiple values', function() {
    expect( bubbleSort([7,1,2,11,0,5,10,4]) ).toEqual([0,1,2,4,5,7,10,11]);
  });
  it ('handles an array with multiple values', function() {
    expect( bubbleSort([21,6,17,9]) ).toEqual([6,9,17,21]);
  });

});


