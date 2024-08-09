import { uploadPhoto, createUser } from './utils';

/**
 * Handles the profile signup process by uploading a photo and creating a user.
 * This function collectively resolves promises for both actions and logs the result.
 *
 * - Uploads a photo using `uploadPhoto`.
 * - Creates a user using `createUser`.
 * - Logs the photo's body and the user's first and last name if both actions succeed.
 * - Logs 'Signup system offline' if either action fails.
 *
 * @returns {Promise<void>} A promise that resolves when both actions are complete.
 * The resolved value is not used. If an error occurs, it logs an error message to the console.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      // Log the photo's body and user's name
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // Log an error message if any promise fails
      console.log('Signup system offline');
    });
}
