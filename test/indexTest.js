// indexTest.js
const { expect } = require('chai');
const { distanceFromHqInBlocks, distanceFromHqInFeet, distanceTravelledInFeet, calculatesFarePrice } = require('../index');


describe('distanceFromHqInBlocks', function() {
  it('returns a distance in blocks', function() {
    expect(distanceFromHqInBlocks(43)).to.equal(1);
    expect(distanceFromHqInBlocks(50)).to.equal(8);
  });
});

describe('distanceFromHqInFeet', function() {
  it('returns a distance in feet', function() {
    expect(distanceFromHqInFeet(43)).to.equal(264);
    expect(distanceFromHqInFeet(50)).to.equal(2112);
  });
});

describe('distanceTravelledInFeet', function() {
  it('returns the distance travelled in feet', function() {
    expect(distanceTravelledInFeet(34, 38)).to.equal(1056);
    expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
  });
});

describe('calculatesFarePrice', function() {
  it('returns the correct fare price', function() {
    expect(calculatesFarePrice(34, 32)).to.equal(0);
    expect(calculatesFarePrice(34, 38)).to.equal(13.12);
    expect(calculatesFarePrice(50, 58)).to.equal(25);
    expect(calculatesFarePrice(50, 70)).to.equal('cannot travel that far');
  });
});
