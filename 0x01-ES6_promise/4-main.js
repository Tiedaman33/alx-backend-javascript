import signUpUser from './4-user-promise.js';

signUpUser('Bob', 'Dylan').then((result) => {
  console.log(result);
});
