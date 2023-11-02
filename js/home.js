'use strict';

let stores = [
  {
    name: 'Seattle',
    hours: 'Hours Open: 6am-7pm',
    phoneNumbers: 'Contact Info: 123-456-7890',
    location: '2901 3rd Ave #300, Seattle, WA 98121',
  },
  {
    name: 'Tokyo',
    hours: 'Hours Open: 6am-7pm',
    phoneNumbers:'Contact Info: 222-222-2222',
    location: '1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634'
  },
  {
    name: 'Dubai',
    hours: 'Hours Open: 6am-7pm',
    phoneNumbers:'Contact Info: 333-333-333',
    location: '1 Sheikh Mohammed bin Rashid Blvd - Dubai'
  },
  {
    name: 'Paris',
    hours: 'Hours Open: 6am-7pm',
    phoneNumbers:'Contact Info: 444-444-4444',
    location: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris'
  },
  {
    name: 'Lima',
    hours: 'Hours Open: 6am-7pm',
    phoneNumbers:'Contact Info: 555-555-5555',
    location: 'Ca. Gral. Borgono cuadra 8, Miraflores 15074'
  }
];

// renders store elements
function renderStore(store) {
  let rootElement = document.getElementById('locations');
  let storeSection = document.createElement('section');
  storeSection.classList.add('location');
  rootElement.appendChild(storeSection);

  let firstTitle = document.createElement('h2');
  firstTitle.textContent = store.name;
  storeSection.appendChild(firstTitle);

  let storeDataList = document.createElement('ul');
  storeSection.appendChild(storeDataList);

  const hoursItem = document.createElement('li');
  hoursItem.textContent = 'Hours: ' + store.hours;
  storeDataList.appendChild(hoursItem);

  const phoneItem = document.createElement('li');
  phoneItem.textContent = store.phoneNumbers;
  storeDataList.appendChild(phoneItem);

  const locationItem = document.createElement('li');
  locationItem.textContent = 'Location: ' + store.location;
  storeDataList.appendChild(locationItem);
}

// loops through array of stores
for (const store of stores) {
  renderStore(store);
}

// used John's class demo and ChatGPT to generate code structure
