var customerName = 'bob';
var bestCustomer;

function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

function setBestCustomer() {
  bestCustomer = 'maybe bob'; 
}

console.log(bestCustomer); 

setBestCustomer(); 

console.log(bestCustomer); 

var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'John';

function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newCustomer) {
  bestCustomer = newCustomer;
}

function changeLeastFavoriteCustomer() {

  leastFavoriteCustomer = 'Jane';
}

console.log(bestCustomer); 

setBestCustomer(); 

console.log(bestCustomer); 

overwriteBestCustomer('maybe bob'); 

console.log(bestCustomer); 

console.log(leastFavoriteCustomer); 

changeLeastFavoriteCustomer(); 

