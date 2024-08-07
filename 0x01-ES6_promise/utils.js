// utils.js

async function uploadPhoto() {
  return {
    status: 200,
    body: 'photo-profile-1'
  };
}

async function createUser() {
  return {
    firstName: 'Guillaume',
    lastName: 'Salva'
  };
}

module.exports = {
  uploadPhoto,
  createUser,
};

