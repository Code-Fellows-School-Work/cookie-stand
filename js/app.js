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
    const theResults = document.getElementById('resultsCity1');
    let totalCookies = 0;
    for (let i = 6; i <= 19; i++) {
      const randomCustomers = this.randomCustomer(this.miniumCustomer, this.maximumCustomer);
      const earnings = randomCustomers * this.averageCookie;

      // Convert the 24-hour format to 12-hour format
      let hour12 = i;
      const amPm = i < 12 ? 'am' : 'pm';
      if (i > 12) {
        hour12 = i - 12;
      } else if (i === 0) {
        hour12 = 12;
      }

      const time = `${hour12} ${amPm}`;
      const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
      const resultsParagraph = document.createElement('p');
      resultsParagraph.textContent = hourlyResults;
      theResults.appendChild(resultsParagraph);

      totalCookies += earnings;
    }
    const totalRow = document.createElement('p');
    totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
    theResults.appendChild(totalRow);
  }
};

city1.hourlyEarnings();

let city2 = {
  name: 'Tokyo',
  miniumCustomer: 3,
  maximumCustomer: 24,
  averageCookie: 6.3,
  randomCustomer: function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },
  hourlyEarnings: function earning() {
    const theResults = document.getElementById('resultsCity2');
    let totalCookies = 0;
    for (let i = 6; i <= 19; i++) {
      const randomCustomers = this.randomCustomer(this.miniumCustomer, this.maximumCustomer);
      const earnings = randomCustomers * this.averageCookie;

      // Convert the 24-hour format to 12-hour format
      let hour12 = i;
      const amPm = i < 12 ? 'am' : 'pm';
      if (i > 12) {
        hour12 = i - 12;
      } else if (i === 0) {
        hour12 = 12;
      }

      const time = `${hour12} ${amPm}`;
      const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
      const resultsParagraph = document.createElement('p');
      resultsParagraph.textContent = hourlyResults;
      theResults.appendChild(resultsParagraph);

      totalCookies += earnings;
    }
    const totalRow = document.createElement('p');
    totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
    theResults.appendChild(totalRow);
  }
};
city2.hourlyEarnings();

let city3 = {
  name: 'Dubai',
  miniumCustomer: 11,
  maximumCustomer: 38,
  averageCookie: 3.7,
  randomCustomer: function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },
  hourlyEarnings: function earning() {
    const theResults = document.getElementById('resultsCity3');
    let totalCookies = 0;
    for (let i = 6; i <= 19; i++) {
      const randomCustomers = this.randomCustomer(this.miniumCustomer, this.maximumCustomer);
      const earnings = randomCustomers * this.averageCookie;

      // Convert the 24-hour format to 12-hour format
      let hour12 = i;
      const amPm = i < 12 ? 'am' : 'pm';
      if (i > 12) {
        hour12 = i - 12;
      } else if (i === 0) {
        hour12 = 12;
      }

      const time = `${hour12} ${amPm}`;
      const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
      const resultsParagraph = document.createElement('p');
      resultsParagraph.textContent = hourlyResults;
      theResults.appendChild(resultsParagraph);

      totalCookies += earnings;
    }
    const totalRow = document.createElement('p');
    totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
    theResults.appendChild(totalRow);
  }
};
city3.hourlyEarnings();

let city4 = {
  name: 'Paris',
  miniumCustomer: 20,
  maximumCustomer: 38,
  averageCookie: 2.3,
  randomCustomer: function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },
  hourlyEarnings: function earning() {
    const theResults = document.getElementById('resultsCity4');
    let totalCookies = 0;
    for (let i = 6; i <= 19; i++) {
      const randomCustomers = this.randomCustomer(this.miniumCustomer, this.maximumCustomer);
      const earnings = randomCustomers * this.averageCookie;

      // Convert the 24-hour format to 12-hour format
      let hour12 = i;
      const amPm = i < 12 ? 'am' : 'pm';
      if (i > 12) {
        hour12 = i - 12;
      } else if (i === 0) {
        hour12 = 12;
      }

      const time = `${hour12} ${amPm}`;
      const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
      const resultsParagraph = document.createElement('p');
      resultsParagraph.textContent = hourlyResults;
      theResults.appendChild(resultsParagraph);

      totalCookies += earnings;
    }
    const totalRow = document.createElement('p');
    totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
    theResults.appendChild(totalRow);
  }
};

city4.hourlyEarnings();

let city5 = {
  name: 'Lima',
  miniumCustomer: 2,
  maximumCustomer: 16,
  averageCookie: 4.6,
  randomCustomer: function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  },
  hourlyEarnings: function earning() {
    const theResults = document.getElementById('resultsCity5');
    let totalCookies = 0;
    for (let i = 6; i <= 19; i++) {
      const randomCustomers = this.randomCustomer(this.miniumCustomer, this.maximumCustomer);
      const earnings = randomCustomers * this.averageCookie;

      // Convert the 24-hour format to 12-hour format
      let hour12 = i;
      const amPm = i < 12 ? 'am' : 'pm';
      if (i > 12) {
        hour12 = i - 12;
      } else if (i === 0) {
        hour12 = 12;
      }

      const time = `${hour12} ${amPm}`;
      const hourlyResults = `${time}: ${earnings.toFixed(0)} cookies`;
      const resultsParagraph = document.createElement('p');
      resultsParagraph.textContent = hourlyResults;
      theResults.appendChild(resultsParagraph);

      totalCookies += earnings;
    }
    const totalRow = document.createElement('p');
    totalRow.textContent = `Total: ${totalCookies.toFixed(0)} cookies`;
    theResults.appendChild(totalRow);
  }
};

city5.hourlyEarnings();
