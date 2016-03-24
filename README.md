# pizza-odyssey

console.log('hello. Am I working? Yes, yes I am.');

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pizzaStore = {
  name: name,
  time: time,
  pizzasOrdered: pizzasOrdered,
  pizzasDelivered: pizzasDelivered
};

var nameStore = document.getElementById('storeName');
nameStore.textContent = pizzaStore.name;
