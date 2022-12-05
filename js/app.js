'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeSales = document.getElementById('store-sales');

function randomCookies(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  average: 6.3,
  cookieSales: function () {
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
  },
  render: function () {

    let ul = document.createElement('ul');
    storeSales.appendChild(ul);
    ul.innerText = `${this.name}`

    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.innerText = `${hours[i]}: ${this.hourlySales[i]}`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = `Total: ${this.totalSales}`;
  }
};
seattle.cookieSales();
seattle.render();

const tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  average: 1.2,
  cookieSales: function () {
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
  },
  render: function () {

    let ul = document.createElement('ul');
    storeSales.appendChild(ul);
    ul.innerText = `${this.name}`

    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.innerText = `${hours[i]}: ${this.hourlySales[i]}`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = `Total: ${this.totalSales}`;
  }
};
tokyo.cookieSales();
tokyo.render();

const dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  average: 3.7,
  cookieSales: function () {
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
  },
  render: function () {

    let ul = document.createElement('ul');
    storeSales.appendChild(ul);
    ul.innerText = `${this.name}`

    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.innerText = `${hours[i]}: ${this.hourlySales[i]}`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = `Total: ${this.totalSales}`;
  }
};
dubai.cookieSales();
dubai.render();

const paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  average: 2.3,
  cookieSales: function () {
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
  },
  render: function () {

    let ul = document.createElement('ul');
    storeSales.appendChild(ul);
    ul.innerText = `${this.name}`

    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.innerText = `${hours[i]}: ${this.hourlySales[i]}`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = `Total: ${this.totalSales}`;
  }
};
paris.cookieSales();
paris.render();

const lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  average: 4.6,
  cookieSales: function () {
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
  },
  render: function () {

    let ul = document.createElement('ul');
    storeSales.appendChild(ul);
    ul.innerText = `${this.name}`

    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.innerText = `${hours[i]}: ${this.hourlySales[i]}`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = `Total: ${this.totalSales}`;
  }
};
lima.cookieSales();
lima.render();
