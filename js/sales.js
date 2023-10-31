// could have used this instead for the times:
// let hours = ['6am', '7am', '8am'];
// it's important to change hours and estimates into arrays so that they're the same length
// can also put stores in array

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function City(name, minCustomer, maxCustomer, avgCookie, id) {
  this.name = name;
  this.minimumCustomer = minCustomer;
  this.maximumCustomer = maxCustomer;
  this.averageCookie = avgCookie;
  this.id = id; // ID for the results element
}

City.prototype.randomCustomer = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

City.prototype.hourlyEarnings = function earning() {
  const theResults = document.getElementById(this.id);
  let totalCookies = 0;
  for (let i = 0; i < hours.length; i++) {
    const randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
    const earnings = randomCustomers * this.averageCookie;

    const time = hours[i];
    const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
    const resultsParagraph = document.createElement('p');
    resultsParagraph.textContent = hourlyResults;
    theResults.appendChild(resultsParagraph);

    totalCookies += earnings;
  }
  const totalRow = document.createElement('p');
  totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
  theResults.appendChild(totalRow);
};

// Create instances for the cities
const city1 = new City('Seattle', 23, 65, 6.3, 'resultsCity1');
const city2 = new City('Tokyo', 3, 24, 1.2, 'resultsCity2');
const city3 = new City('Dubai', 11, 38, 3.7, 'resultsCity3');
const city4 = new City('Paris', 20, 38, 2.3, 'resultsCity4');
const city5 = new City('Paris', 2, 16, 4.6, 'resultsCity5');

// Call the hourlyEarnings method for each city
city1.hourlyEarnings();
city2.hourlyEarnings();
city3.hourlyEarnings();
city4.hourlyEarnings();
city5.hourlyEarnings();


// let city1 = {
//   name: 'Seattle',
//   minimumCustomer: 23,
//   maximumCustomer: 65,
//   averageCookie: 6.3,
//   randomCustomer: function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   },
//   hourlyEarnings: function earning() {
//     const theResults = document.getElementById('resultsCity1');
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

// city1.hourlyEarnings();

// let city2 = {
//   name: 'Tokyo',
//   minimumCustomer: 3,
//   maximumCustomer: 24,
//   averageCookie: 1.2,
//   randomCustomer: function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   },
//   hourlyEarnings: function earning() {
//     const theResults = document.getElementById('resultsCity2');
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

// city2.hourlyEarnings();

// let city3 = {
//   name: 'Dubai',
//   minimumCustomer: 11,
//   maximumCustomer: 38,
//   averageCookie: 3.7,
//   randomCustomer: function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   },
//   hourlyEarnings: function earning() {
//     const theResults = document.getElementById('resultsCity3');
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

// city3.hourlyEarnings();

// let city4 = {
//   name: 'Paris',
//   minimumCustomer: 20,
//   maximumCustomer: 38,
//   averageCookie: 2.3,
//   randomCustomer: function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   },
//   hourlyEarnings: function earning() {
//     const theResults = document.getElementById('resultsCity4');
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

// city4.hourlyEarnings();

// let city5 = {
//   name: 'Lima',
//   minimumCustomer: 20,
//   maximumCustomer: 38,
//   averageCookie: 2.3,
//   randomCustomer: function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   },
//   hourlyEarnings: function earning() {
//     const theResults = document.getElementById('resultsCity5');
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

// city5.hourlyEarnings();
