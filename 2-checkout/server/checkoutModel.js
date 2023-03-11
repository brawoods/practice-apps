const mysql = require("mysql2");
const Promise = require("bluebird");
const db = require('./db.js');

const putUsers = (user, cb) => {
  let q = `INSERT INTO users (username, email, password)
  VALUES (${user.username}, ${user.email}, ${user.password})`;

  db.query(q)
  .then((res) => cb(res))
  .catch((err) => {
    console.log(err);
    cb(err);
  });
}

const putAddress = (user, address, cb) => {
  let userid = `SELECT id FROM users WHERE username = ${user.username}`;

  let q = `INSERT INTO addresses
  (phoneNumber, addressLine1, addressLine2, city, state, zipCode, user)
  VALUES (${address.phoneNumber}, ${address.addressLine1}, ${address.addressLine2},
  ${address.city}, ${address.state}, ${address.zipCode}, ${userid})`;

  db.query(q)
  .then((res) => cb(res))
  .catch((err) => {
    console.log(err);
    cb(err);
  });

}
const putCredit = (user, credit, cb) => {
  let userid = `SELECT id FROM users WHERE username = ${user.username}`;

  let q = `INSERT INTO creditCards (cardNumber, expDate, cvv, billingZipCode, user)
  VALUES (${credit.cardNumber}, ${credit.expDate}, ${credit.cvv}, ${credit.billingZipCode},
    ${userId})`;

  db.query(q)
  .then((res) => cb(res))credit
  .catch((err) => {
    console.log(err);
    cb(err);
  });
}

module.exports = {putUsers, putCredit, putAddress};