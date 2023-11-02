'use strict';

console.log('hello world');

let stores = [
  {
    name: 'Seattle',
    hours: '6am-7pm',
    phoneNumbers: ['Main: 555-1212', 'Fax: 555-6363'],
    location: '2901 3rd Ave #300, Seattle, WA 98121',
  },
];

// Function to render store details
function renderStore(store) {
  // Looks for any element with an id="locations", i.e.
  // <section id="locations">
  let rootElement = document.getElementById('locations');

  // Create a new, empty section for a store
  let storeSection = document.createElement('section');
  storeSection.classList.add('location');
  rootElement.appendChild(storeSection);

  let firstTitle = document.createElement('h2');
  // Give it some content
  firstTitle.textContent = store.name;
  // Add it to the page, as a child of rootElement
  storeSection.appendChild(firstTitle);

  // Add an unordered list to show the store details...
  let storeDataList = document.createElement('ul');
  storeSection.appendChild(storeDataList);

  // Render hours
  const hoursItem = document.createElement('li');
  hoursItem.textContent = 'Hours: ' + store.hours;
  storeDataList.appendChild(hoursItem);

  // Put the phone numbers in the UL
  for (let i = 0; i < store.phoneNumbers.length; i++) {
    const phoneItem = document.createElement('li');
    // Add the actual number, from the store object
    phoneItem.textContent = store.phoneNumbers[i];
    // Append that to the UL
    storeDataList.appendChild(phoneItem);
  }

  // Render location details
  const locationItem = document.createElement('li');
  locationItem.textContent = 'Location: ' + store.location;
  storeDataList.appendChild(locationItem);
}

// Loop through the stores array and render each store
for (const store of stores) {
  renderStore(store);
}


