'use strict';
// could have used this instead for the times:
// let hours = ['6am', '7am', '8am'];
// it's important to change hours and estimates into arrays so that they're the same length
// can also put stores in array

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let hourlyTotal = [];
let allLocationsTotal = 0;

// constructor created for each store
function Store(location, minCustomer, maxCustomer, avgCookie) {
  this.location = location;
  this.minimumCustomer = minCustomer;
  this.maximumCustomer = maxCustomer;
  this.averageCookie = avgCookie;
  this.hourlySalesArray = [];
  this.dailySalesTotal = 0;
};

Store.prototype.randomCustomer = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

Store.prototype.hourlyEarnings = function earning() {
  const theResults = document.getElementById(this.id);
  let totalCookies = 0;
  for (let i = 0; i < hours.length; i++) {
    const randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
    const earnings = randomCustomers * this.averageCookie;

    const time = hours[i];
    const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
    const income = document.createElement('td');
    income.textContent = hourlyResults;
    theResults.appendChild(income);

    totalCookies += earnings;
  }
  const totalRow = document.createElement('td');
  totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
  theResults.appendChild(totalRow);
};


Store.prototype.render = function () {
  let table = document.getElementById('income');
  let StoreRow = document.createElement('tr');
  table.appendChild(StoreRow);

  let locationCell = document.createElement('td');
  locationCell.textContent = this.location;
  StoreRow.appendChild(locationCell);

  for (let i = 0; i < hours.length; i++) {
    let cell = document.createElement('td');
    const randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
    const earnings = randomCustomers * this.averageCookie;
    cell.textContent = `${hours[i]}: ${earnings.toFixed(0)} cookies`;
    StoreRow.appendChild(cell);
  }
};

// create new cities following format of constructor
const store1 = new Store('Seattle', 23, 65, 6.3);
const store2 = new Store('Tokyo', 3, 24, 1.2);
const store3 = new Store('Dubai', 11, 38, 3.7);
const store4 = new Store('Paris', 20, 38, 2.3);
const store5 = new Store('Paris', 2, 16, 4.6);

const allLocations = [store1, store2, store3, store4, store5];

// invoking each Store hourly earning
store1.render();

// let Store1 = {
//   location: 'Seattle',
//   minimumCustomer: 23,
//   maximumCustomer: 65,
//   averageCookie: 6.3,
//   randomCustomer: function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   },
//   hourlyEarnings: function earning() {
//     const theResults = document.getElementById('resultsStore1');
//     let totalCookies = 0;
//     for (let i = 0; i < hours.length; i++) {
//       const randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
//       const earnings = randomCustomers * this.averageCookie;

//       const time = hours[i];
//       const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
//       const resultsParagraph = document.createElement('p');
//       resultsParagraph.textContent = hourlyResults;
//       theResults.appendChild(resultsParagraph);

//       totalCookies += earnings;
//     }
//     const totalRow = document.createElement('p');
//     totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
//     theResults.appendChild(totalRow);
//   }
// };

// Store1.hourlyEarnings();

// let Store2 = {
//   location: 'Tokyo',
//   minimumCustomer: 3,
//   maximumCustomer: 24,
//   averageCookie: 1.2,
//   randomCustomer: function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   },
//   hourlyEarnings: function earning() {
//     const theResults = document.getElementById('resultsStore2');
//     let totalCookies = 0;
//     for (let i = 0; i < hours.length; i++) {
//       const randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
//       const earnings = randomCustomers * this.averageCookie;

//       const time = hours[i];
//       const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
//       const resultsParagraph = document.createElement('p');
//       resultsParagraph.textContent = hourlyResults;
//       theResults.appendChild(resultsParagraph);

//       totalCookies += earnings;
//     }
//     const totalRow = document.createElement('p');
//     totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
//     theResults.appendChild(totalRow);
//   }
// };

// Store2.hourlyEarnings();

// let Store3 = {
//   location: 'Dubai',
//   minimumCustomer: 11,
//   maximumCustomer: 38,
//   averageCookie: 3.7,
//   randomCustomer: function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   },
//   hourlyEarnings: function earning() {
//     const theResults = document.getElementById('resultsStore3');
//     let totalCookies = 0;
//     for (let i = 0; i < hours.length; i++) {
//       const randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
//       const earnings = randomCustomers * this.averageCookie;

//       const time = hours[i];
//       const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
//       const resultsParagraph = document.createElement('p');
//       resultsParagraph.textContent = hourlyResults;
//       theResults.appendChild(resultsParagraph);

//       totalCookies += earnings;
//     }
//     const totalRow = document.createElement('p');
//     totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
//     theResults.appendChild(totalRow);
//   }
// };

// Store3.hourlyEarnings();

// let Store4 = {
//   location: 'Paris',
//   minimumCustomer: 20,
//   maximumCustomer: 38,
//   averageCookie: 2.3,
//   randomCustomer: function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   },
//   hourlyEarnings: function earning() {
//     const theResults = document.getElementById('resultsStore4');
//     let totalCookies = 0;
//     for (let i = 0; i < hours.length; i++) {
//       const randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
//       const earnings = randomCustomers * this.averageCookie;

//       const time = hours[i];
//       const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
//       const resultsParagraph = document.createElement('p');
//       resultsParagraph.textContent = hourlyResults;
//       theResults.appendChild(resultsParagraph);

//       totalCookies += earnings;
//     }
//     const totalRow = document.createElement('p');
//     totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
//     theResults.appendChild(totalRow);
//   }
// };

// Store4.hourlyEarnings();

// let Store5 = {
//   location: 'Lima',
//   minimumCustomer: 20,
//   maximumCustomer: 38,
//   averageCookie: 2.3,
//   randomCustomer: function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   },
//   hourlyEarnings: function earning() {
//     const theResults = document.getElementById('resultsStore5');
//     let totalCookies = 0;
//     for (let i = 0; i < hours.length; i++) {
//       const randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
//       const earnings = randomCustomers * this.averageCookie;

//       const time = hours[i];
//       const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
//       const resultsParagraph = document.createElement('p');
//       resultsParagraph.textContent = hourlyResults;
//       theResults.appendChild(resultsParagraph);

//       totalCookies += earnings;
//     }
//     const totalRow = document.createElement('p');
//     totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
//     theResults.appendChild(totalRow);
//   }
// };

// Store5.hourlyEarnings();
