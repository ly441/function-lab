// index.js
const headquarters = 42;
const blockLengthInFeet = 264;

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - headquarters);
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * blockLengthInFeet;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * blockLengthInFeet;
}


function calculatesFarePrice(start, destination) {
  if (destination <= start) return 0;

  const distance = (destination - start) * blockLengthInFeet;

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return parseFloat(((distance - 400) * 0.02).toFixed(2));
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}



  

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};
