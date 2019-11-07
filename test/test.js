const assert = chai.assert;

// General Structure
// describe('function name', function() {
//     it('what we think it should do', function() {
//       assert.equal(variable name, what we think the value of the variable should be);
//     });
  
//     // We can have more its here
//   });

mySlots = [10, 10, 10, 8, 2, 8, 4, 5, 4];

describe('checkWinner', function() {
    it ('should return if mySlots has a winner', function() {
        assert.equal(checkWinner(), undefined);
    })
})