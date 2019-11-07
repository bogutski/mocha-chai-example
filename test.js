// User function
function double(n){
  console.log(`Custom output ${n}`);
  return n * 2;
}

// import before test
const { expect } = require('chai');

// User test
const etalonDouble = n => n * 2;

describe('User tests', function() {
  it('should double value 2', function() {
    expect(double(2)).equal(4);
  });

  it('should double value 3', function() {
    expect(double(3)).equal(5);
  });


  for (let i = 1; i < 10; i++){
    it(`should ${i} doubled`, () => {
      expect(double(i)).equal(etalonDouble(i))
    });
  }
});
