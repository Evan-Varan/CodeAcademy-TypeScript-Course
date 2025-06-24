import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:
function getMaxPrice(price:PriceBracket ) : number{
  if(price === PriceBracket.Low){
    return 10.0
  }
  else if(price === PriceBracket.Medium){
    return 20.0
  }
  else if(price === PriceBracket.High){
    return 30.0
  }
  else{
    return 0;
  }
}
// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
  const maxPrice = getMaxPrice(price);
  const filteredOrders: Order[][] = [];

  orders.forEach(function (restaurantOrders: Order[]) {
    const validOrders: Order[] = [];

    restaurantOrders.forEach(function (order: Order) {
      if (order.price <= maxPrice) {
        validOrders.push(order);
      }
    });

    filteredOrders.push(validOrders);
  });

  return filteredOrders;
}

// Add your printOrders() function below:
function printOrders(restaurants:Restaurant[], orders:Order[][]):void{
    restaurants.forEach(function(restaurant:Restaurant, index:number){
      let restaurantOrders = orders[index]
      console.log(`Resturant ${restaurant.name}`)
      restaurantOrders.forEach(function(order: Order, index:number){
        console.log(`Order ${index+1}: $${order.price}`)
      })
    })

}
// Main
const eligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, eligibleOrders);
