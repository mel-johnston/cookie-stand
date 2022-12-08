'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeSales = document.getElementById('store-sales');

function randomCookies(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ************************* CONSTRUCTOR *************************

function Store(name, min, max, average) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
}

// ************************* METHODS *************************

Store.prototype.cookieSales = function () {
  const cookiesPerHour = [];
  for (let hour of hours) {
    let customersPerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    let cookiesCalculated = Math.floor(customersPerHour * this.average);
    cookiesPerHour.push(cookiesCalculated);
  } this.hourlySales = cookiesPerHour;
  let cookies = 0;
  for (let hour of cookiesPerHour) {
    cookies += hour;
  } this.totalSales = cookies;
}

// ************************* RENDER *************************

Store.prototype.render = function () {

  let ul = document.createElement('tr');
  storeSales.appendChild(ul);
  ul.innerText = this.name;

  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('td');
    ul.appendChild(li);
    li.innerText = this.hourlySales[i];
  }
  let li = document.createElement('td');
  ul.appendChild(li);
  li.innerText = this.totalSales;
}

// ************************* EXECUTEABLE CODE *************************

const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 25, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);
const cities = [seattle, tokyo, dubai, paris, lima];
for (let city of cities) {
  city.cookieSales();
  city.render();
}

// ************************* TABLE *************************

let headerRow = document.createElement('tr');
storeSales.prepend(headerRow);

let blankHeader = document.createElement('th');
headerRow.appendChild(blankHeader);
blankHeader.innerText = '';

for (let i = 0; i < hours.length; i++) {
  let th = document.createElement('th');
  headerRow.appendChild(th);
  th.innerText = hours[i];
}

let totalHeader = document.createElement('th');
headerRow.appendChild(totalHeader);
totalHeader.innerText = 'Totals';



// ************************* FOOTER  *************************

function footerCreation() {
  let footerRow = document.createElement('tr');
  storeSales.appendChild(footerRow);

  let footerLabel = document.createElement('th');
  footerRow.appendChild(footerLabel);
  footerLabel.innerText = 'Hourly Totals';

  const hourlyTotals = [];
  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < cities.length; j++) {
      hourTotal += cities[j].hourlySales[i];
    }
    hourlyTotals.push(hourTotal);
    grandTotal += hourTotal;
  }

  for (let i = 0; i < hourlyTotals.length; i++) {
    let hourTotalRow = document.createElement('th')
    footerRow.appendChild(hourTotalRow);
    hourTotalRow.innerText = hourlyTotals[i];
  }

  let grandTotalBox = document.createElement('th');
  footerRow.appendChild(grandTotalBox);
  grandTotalBox.innerText = grandTotal;
} 

footerCreation();

// ************************* ADD EVENT LISTENER  *************************

let myForm = document.querySelector('my-form');

