class CustomAPIError extends Error {
  constructor(message) {
    //* Constructor method is to create and initialize the object of CustomAPIError class

    super(message);
    //* this calls the constructor of parent class i.e the error class
  }
}

//* whenever an object of a particular class is created constructor method is called

module.exports = CustomAPIError;
