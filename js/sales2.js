'use strict';
// could have used this instead for the times:
// let hours = ['6am', '7am', '8am'];
// it's important to change hours and estimates into arrays so that they're the same length
// can also put stores in array

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

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
  let theResults = document.getElementById(this.id);
  let totalCookies = 0;

  for (let i = 0; i < hours.length; i++) {
    let randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
    let earnings = randomCustomers * this.averageCookie;

    let time = hours[i];
    let hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
    let income = document.createElement('td');
    income.textContent = hourlyResults;
    theResults.appendChild(income);

    this.dailySalesTotal += earnings;
  }
  let totalRow = document.createElement('td');
  totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
  theResults.appendChild(totalRow);

  for (let i = 0; i < hours.length; i++) {
    let hoursData = document.createElement('td');
    hoursData.textContent = hours[i];
  }
};

// this code appends hours as the last row
// let hoursTable = document.createElement('table-header');
// let hoursRow = document.createElement('tr');

// for (let i = 0; i < hours.length; i++) {
//   let hoursData = document.createElement('td');
//   hoursData.textContent = hours[i];
//   hoursRow.appendChild(hoursData);
// }
// hoursTable.appendChild(hoursRow);
// document.body.appendChild(hoursTable);

// same code as above but changed line 64 to .getElementById - deletes entire table
// let hoursTable = document.getElementById('table-header');
// let hoursRow = document.createElement('tr');

// for (let i = 0; i < hours.length; i++) {
//   let hoursData = document.createElement('td');
//   hoursData.textContent = hours[i];
//   hoursRow.append(hoursData);
// }
// hoursTable.append(hoursRow);
// document.body.append(hoursTable);

Store.prototype.render = function () {
  let table = document.getElementById('income');
  let StoreRow = document.createElement('tr');
  table.appendChild(StoreRow);

  let locationCell = document.createElement('td');
  locationCell.textContent = this.location;
  StoreRow.appendChild(locationCell);

// this code puts times within the table
//   for (let i = 0; i < hours.length; i++) {
//     let hoursCell = document.createElement('th');
//     hoursCell.textContent = hours[i];
//     StoreRow.appendChild(hoursCell);
//   }

  for (let i = 0; i < hours.length; i++) {
    let cell = document.createElement('td');
    let randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
    let earnings = randomCustomers * this.averageCookie;
    cell.textContent = `${earnings.toFixed(0)} cookies`;
    StoreRow.appendChild(cell);
  }
};

// create new cities following format of constructor
let store1 = new Store('Seattle', 23, 65, 6.3);
let store2 = new Store('Tokyo', 3, 24, 1.2);
let store3 = new Store('Dubai', 11, 38, 3.7);
let store4 = new Store('Paris', 20, 38, 2.3);
let store5 = new Store('Lima', 2, 16, 4.6);


// invoking each Store hourly earning
store1.render();
store2.render();
store3.render();
store4.render();
store5.render();

