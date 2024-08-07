import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/**
 * Handles profile signup by calling signUpUser and uploadPhoto functions,
 * and returns an array with the status and result of each promise.
 *
 * @param {string} firstName - The user's first name.
 * @param {string} lastName - The user's last name.
 * @param {string} fileName - The name of the file to upload.
 * @returns {Promise<Array<Object>>} An array of objects with status and result of each promise.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPhotoPromise = uploadPhoto(fileName);

    return Promise.allSettled([signUpPromise, uploadPhotoPromise])
        .then(results => {
            return results.map(result => ({
                status: result.status,
                value: result.status === 'fulfilled' ? result.value : result.reason
            }));
        });
}
