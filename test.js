// User function
function double(n){
  console.log(`Custom output ${n}`);
  return n * 2;
}

const { expect } = require('chai');

// User test
describe('User tests', function() {
  it('should double value 2', function() {
    expect(double(2)).equal(4);
  });

  it('should double value 3', function() {
    expect(double(3)).equal(5);
  });
});
