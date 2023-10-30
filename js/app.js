let city1 = {
  name: 'Seattle',
  miniumCustomer: 23,
  maximumCustomer: 65,
  averageCookie: 6.3,
  randomCustomer: function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },
  hourlyEarnings: function earning() {
    for (let i = 8; i <= 19; i++) {
      const randomCustomers = this.randomCustomer(this.miniumCustomer, this.maximumCustomer);
      const earnings = randomCustomers * this.averageCookie;
      console.log(earnings);
    }
  }
};

const theResults = document.getElementById('results');
// peopleSection.addTextNode('John');
const firstChild = document.createElement('h2');
firstChild.textContent = city1.averageCookie;
theResults.appendChild(firstChild);

// let city2 = {
//   name: 'Tokyo',
//   miniumCustomer: 3,
//   maximumCustomer: 24,
//   averageCookie: 1.2,
// };

// let city3 = {
//   name: 'Dubai',
//   miniumCustomer: 11,
//   maximumCustomer: 38,
//   averageCookie: 3.7,
// };

// let city4 = {
//   name: 'Paris',
//   miniumCustomer: 20,
//   maximumCustomer: 38,
//   averageCookie: 2.3,
// };

// let city5 = {
//   name: 'Lima',
//   miniumCustomer: 2,
//   maximumCustomer: 16,
//   averageCookie: 4.6,
// };
