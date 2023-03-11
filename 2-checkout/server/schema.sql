  Create DATABASE checkout;

  USE checkout;

  CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );

  CREATE TABLE addresses (
    phoneNumber INT PRIMARY KEY,
    addressLine1 VARCHAR(255) NOT NULL,
    addressLine2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(30) NOT NULL,
    zipCode INT NOT NULL,
    user INT NOT NULL,
    FOREIGN KEY (user) REFERENCES users(id)
  );

  CREATE TABLE creditCardInfo (
    cardNumber INT NOT NULL PRIMARY KEY,
    expDate DATE NOT NULL,
    cvv INT NOT NULL,
    billingZipCode INT NOT NULL,
    user INT NOT NULL,
    FOREIGN KEY (user) REFERENCES users(id)
  );



