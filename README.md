# pizza-odyssey

function pizzaStore(name, hour, minPizzaOrder, maxPizzaOrder, minPizzaDeliver, maxPizzaDeliver) {
  this.name = name;
  this.hour = hour;
  this.minPizzaOrder = minPizzaOrder;
  this.maxPizzaOrder = maxPizzaOrder;
  this.minPizzaDeliver = minPizzaDeliver;
  this.maxPizzaDeliver = maxPizzaDeliver;
  this.pizzaDrivers = function () {
    return this.maxPizzaDeliver % 3;};
}

var ballardPizzaStore = new pizzaStore('Ballard', 0, 0, 0, 0, 0);
var firstHillPizzaStore = new pizzaStore('First Hill', 0, 0, 0, 0, 0);
var internationalDistrictPizzaStore = new pizzaStore('International District', 0, 0, 0, 0, 0);
var southLakeUnionPizzaStore = new pizzaStore('South Lake Union', 0, 0, 0, 0, 0);
var georgetownPizzaStore = new pizzaStore('Georgetown', 0, 0, 0, 0, 0);
var ravennaPizzaStore = new pizzaStore('Ravenna', 0, 0, 0, 0, 0);
