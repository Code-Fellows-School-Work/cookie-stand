'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let totalForEachHour = [];
let totalOfAllLocations = 0;

// constructor created for each store
function Store(location, minCustomer, maxCustomer, avgCookie) {
  this.location = location;
  this.minimumCustomer = minCustomer;
  this.maximumCustomer = maxCustomer;
  this.averageCookie = avgCookie;
  this.hourlySalesArray = [];
  this.dailySalesTotal = 0;
}

Store.prototype.randomCustomer = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

Store.prototype.hourlyEarnings = function earning() {
  let theResults = document.getElementById(this.id); //
  let totalCookies = 0;

  for (let i = 0; i < hours.length; i++) {
    let randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
    let earnings = randomCustomers * this.averageCookie;

    let time = hours[i];
    let hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
    let income = document.createElement('td');
    income.textContent = hourlyResults;
    theResults.appendChild(income);

    this.hourlySalesArray.push(earnings);
    totalCookies += earnings;
  }
  let totalRow = document.createElement('td');
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
    let randomCustomers = this.randomCustomer(this.minimumCustomer, this.maximumCustomer);
    let earnings = randomCustomers * this.averageCookie;
    cell.textContent = `${earnings.toFixed(0)} cookies`;
    StoreRow.appendChild(cell);
    this.hourlySalesArray.push(earnings);
  }
};

// create new cities following format of constructor
let store1 = new Store('Seattle', 23, 65, 6.3);
let store2 = new Store('Tokyo', 3, 24, 1.2);
let store3 = new Store('Dubai', 11, 38, 3.7);
let store4 = new Store('Paris', 20, 38, 2.3);
let store5 = new Store('Lima', 2, 16, 4.6);

// storing locations in array to potentially set up for next lab assignment
let allLocations = [store1, store2, store3, store4, store5];

store1.render();
store2.render();
store3.render();
store4.render();
store5.render();

// total cookies per hour
function totalHourSales() {
  for (let i = 0; i < hours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < allLocations.length; j++) {
      hourTotal += allLocations[j].hourlySalesArray[i];
    }
    totalOfAllLocations += hourTotal;
    totalForEachHour[i] = hourTotal;
  }
}

totalHourSales();

// total cookies per location
let totalsOfAllCell = document.getElementById('everyLocationTotal');
let totalsRowsCell = document.createElement('tr');
let totalsDataCell = document.createElement('th');
totalsDataCell.textContent = 'Hourly Total For All Locations';
totalsRowsCell.append(totalsDataCell);
totalsOfAllCell.append(totalsRowsCell);
for (let i = 0; i <hours.length; i++) {
  let totalHourlyData = document.createElement('td');
  totalHourlyData.textContent = Math.round(totalForEachHour[i]) + ' cookies';
  totalsRowsCell.append(totalHourlyData);
}
let grandTotal = document.createElement('td');
grandTotal.textContent = Math.round(totalOfAllLocations) + ' cookies';
totalsRowsCell.appendChild(grandTotal);
totalsOfAllCell.appendChild(totalsRowsCell);

function totalCookiesPerLocation(locations) {
  let table = document.getElementById('income');

  for (let i = 0; i < locations.length; i++) {
    let location = locations[i];
    let locationTotal = 0;

    for (let j = 0; j < location.hourlySalesArray.length; j++) {
      locationTotal += location.hourlySalesArray[j];
    }

    let totalCell = document.createElement('td');
    totalCell.textContent = locationTotal.toFixed(0) + ' cookies';
    location.hourlySalesArray.push(locationTotal);
    table.rows[i].appendChild(totalCell);
  }
}

totalCookiesPerLocation(allLocations);

// I referred to ChatGPT a lot to troubleshoot and produce a majority of this code
// I referred to Brendan's repository to learn insight on how to append content to a table properly

