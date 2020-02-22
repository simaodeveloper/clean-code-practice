// Meaningful names

// If is possible use shorter version

const findUser = () => { };
const findUserByNameOrEmail = () => { };
const setUserLoggedInTrue = () => { };

// You can change that
const getUserFromDatabase = () => { };

// for this 'cause its implicit
const getUser = () => { };

/*
  User consistent verbs per concept

  Functions will usually create, read, update
  or delete something
*/

const getQuestions;
const getUser;

// Make booleans that read well in if-then statements

// Better
let Car = {
  isSedan: true,
  isSold: false,
  isGreen: true,
  isAirbag: false
};

// Use nouns for classNames

// Better
class Car
