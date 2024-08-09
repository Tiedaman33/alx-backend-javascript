/**
 * Simulates uploading a photo by returning a rejected promise.
 *
 * @param {string} fileName - The name of the file to be uploaded.
 * @returns {Promise} A promise that is rejected with an error message.
 */
export default function uploadPhoto(fileName) {
  return new Promise((_, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
}
