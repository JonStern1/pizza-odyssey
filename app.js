function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pizzaStore(storeName, time, pizzaOrder, pizzaDeliver) {
  storeName.hourlyData.push({
  time: time,
  pizzaOrder: pizzaOrder,
  pizzaDeliver: pizzaDeliver,
  driverTotal: (pizzaDeliver % 3),
});

console.log('Are you still with me');
function hourlyList(name){
  console.log('Holo, it is my SOP');
  var storeList = document.getElementById(storeName.name);
  if (storeList){
    var eightAmLi;
    for (var i = 0; i < storeName.hourlyData.length; i++ ){
      eightAmLi = document.createElement('li');
      eightAmLi.textContent = storeName.hourlyData[i].time + ' pizzas ordered: ' + storeName.hourlyData[i].pizzasOrder;
      storeList.appendChild(eightAmLi);
    }
  }
}

function showTotalPizzaOrder(storeName) {
  var totalPizzaOrder = 0;
  for(i = 0; i < storeName.hourlyData.length; i++) {
    totalPizzaOrder += storeName.hourlyData[i].pizzaOrder;
  }
  var totalPizzaSold = document.getElementById(storeName.name + ' total pizza sold');
  if (totalPizzaSold) {
    totalPizzaSold.textContent = storeNamename + ' sold ' + totalPizzaOrder + 'pizzas';
  }
}

var ballard = {
  name: 'Ballard',
  hourlyData: []
};

var firstHill = {
  name: 'First Hill',
  hourlyData: []
};

var internationalDistrict = {
  name: 'internationalDistrict',
  hourlyData: []
};

var southLakeUnion = {
  name: 'South Lake Union',
  hourlyData: []
};

var georgetown = {
  name: 'Georgetown',
  hourlyData: []
};

var ravenna = {
  name: 'Ravenna',
  hourlyData: []
};

pizzaStore(ballard, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(ballard, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(ballard, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(ballard, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(ballard, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(ballard, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(ballard, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(ballard, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(ballard, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(ballard, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(ballard, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(ballard, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(ballard, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(ballard, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(ballard, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(ballard, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(ballard, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(ballard, '1:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

pizzaStore(firstHill, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(firstHill, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(firstHill, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(firstHill, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(firstHill, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(firstHill, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(firstHill, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(firstHill, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(firstHill, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(firstHill, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(firstHill, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(firstHill, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(firstHill, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(firstHill, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(firstHill, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(firstHill, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(firstHill, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(firstHill, '1:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

pizzaStore(internationalDistrict, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(internationalDistrict, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(internationalDistrict, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(internationalDistrict, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(internationalDistrict, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(internationalDistrict, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(internationalDistrict, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(internationalDistrict, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(internationalDistrict, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(internationalDistrict, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(internationalDistrict, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(internationalDistrict, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(internationalDistrict, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(internationalDistrict, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(internationalDistrict, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(internationalDistrict, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(internationalDistrict, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(internationalDistrict, '1:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

pizzaStore(southLakeUnion, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(southLakeUnion, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(southLakeUnion, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(southLakeUnion, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(southLakeUnion, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(southLakeUnion, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(southLakeUnion, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(southLakeUnion, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(southLakeUnion, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(southLakeUnion, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(southLakeUnion, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(southLakeUnion, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(southLakeUnion, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(southLakeUnion, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(southLakeUnion, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(southLakeUnion, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(southLakeUnion, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(southLakeUnion, '1:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

pizzaStore(georgetown, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(georgetown, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(georgetown, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(georgetown, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(georgetown, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(georgetown, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(georgetown, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(georgetown, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(georgetown, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(georgetown, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(georgetown, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(georgetown, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(georgetown, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(georgetown, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(georgetown, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(georgetown, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(georgetown, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(georgetown, '1:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

pizzaStore(ravenna, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(ravenna, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(ravenna, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
pizzaStore(ravenna, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(ravenna, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(ravenna, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
pizzaStore(ravenna, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(ravenna, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(ravenna, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
pizzaStore(ravenna, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(ravenna, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(ravenna, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
pizzaStore(ravenna, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(ravenna, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(ravenna, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
pizzaStore(ravenna, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(ravenna, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
pizzaStore(ravenna, '1:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

/* again, giving it a shot on my own. Think I'm starting to get "it", but getting late. Will use Duncan's template with some of my own terms, and will try to work it out later:-)
console.log('hello. Am I working? Yes, yes I am.');

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pizzaStore(name, time, pizzasOrdered, pizzasDelivered, driversNeeded) { ({
  name: name,
  time: time,
  pizzasOrdered: pizzasOrdered,
  pizzasDelivered: pizzasDelivered,
  driversNeeded: driversNeeded,
}

pizzaStore('ballard', '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4), driversNeeded);

/* My variables for Store Locations before seeing Duncan's code.
var ballard = {
  name: 'Ballard',
  time: '8:00',
  PizzaOrder: 4,
  PizzaDeliver: 4,
  pizzaDrivers: function(){
    return this.maxPizzaDeliver % 3;
  }
};

var firstHill = {
  name: 'First Hill',
  time: '8:00',
  PizzaOrder: 4,
  PizzaDeliver: 4,
  pizzaDrivers: function(){
    return this.maxPizzaDeliver % 3;
  }
};

var internationalDistrict = {
  name: 'International District',
  time: '8:00',
  PizzaOrder: 4,
  PizzaDeliver: 4,
  pizzaDrivers: function(){
    return this.maxPizzaDeliver % 3;
  }
};

var southLakeUnion = {
  name: 'South Lake Union',
  time: '8:00',
  PizzaOrder: 4,
  PizzaDeliver: 4,
  pizzaDrivers: function(){
    return this.maxPizzaDeliver % 3;
  }
};

var georgetown = {
  name: 'Georgetown',
  time: '8:00',
  PizzaOrder: 4,
  PizzaDeliver: 4,
  pizzaDrivers: function(){
    return this.maxPizzaDeliver % 3;
  }
};

var ravenna = {
  name: 'Ravenna',
  time: '8:00',
  PizzaOrder: 4,
  PizzaDeliver: 4,
  pizzaDrivers: function(){
    return this.maxPizzaDeliver % 3;
  }
};

function hourlyList()

/*
/*function pizzaStore(name, hour, minPizzaOrder, maxPizzaOrder, minPizzaDeliver, maxPizzaDeliver) {
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

var numberDrivers1 = ballardPizzaStore.name + ' drivers needed: ';
numberDrivers1 += ballardPizzaStore.pizzaDrivers();

var numberDrivers2 = firstHillPizzaStore.name + ' drivers needed: ';
numberDrivers2 += firstHillPizzaStore.pizzaDrivers();

var numberDrivers3 = internationalDistrictPizzaStore.name + ' drivers needed: ';
numberDrivers3 += internationalDistrictPizzaStore.pizzaDrivers();

var numberDrivers4 = georgetownPizzaStore.name + ' drivers needed: ';
numberDrivers4 += georgetownPizzaStore.pizzaDrivers();

var numberDrivers5 = ravennaPizzaStore.name + ' drivers needed: ';
numberDrivers5 += ravennaPizzaStore.pizzaDrivers();

var newArray = [['8:00 - 9:00 AM', maxPizzaOrder + ' pizzas', maxPizzaDeliver + ' deliveries', 'drivers recommended: ' + pizzaDrivers]['9:00 - 10:00 AM', maxPizzaOrder + ' pizzas', maxPizzaDeliver + ' deliveries', 'drivers recommended: ' + pizzaDrivers]]

/*Ballard

var newArray = [[1, 2, 3], [4, 5, 6, objectOne]];
8:00am 0 pizzas, 0 deliveries -- [ driver not recommended ]
9:00am 4 pizzas, 2 deliveries -- [ drivers recommended: 1 ]
10:00am 15 pizzas, 8 deliveries -- [ drivers recommended: 2 ]
11:00am etc., same kind of thing calculated for each hour
12 noon
1:00pm
2:00pm
3:00pm
4:00pm
...
1:00am*/
