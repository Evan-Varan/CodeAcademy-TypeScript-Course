import restaurants from './restaurants';

const dollarSigns = '$$';
const deliveryTimeMax = 90;
const maxDistance = 10;
let result : string;
let hour = new Date().getHours()
hour = 4;

const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
  if (Number(restaurant.priceBracket) > priceBracket) {
    return false;
  }

  if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
    return false;
  }

  if (Number(restaurant.distance) > maxDistance) {
    return false;
  }
  if(Number(restaurant.openHour) > hour || Number(restaurant.closeHour) < hour){
    return false;
  }

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
