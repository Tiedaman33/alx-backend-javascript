/**
 * Simulates user signup by returning a promise that resolves with an object containing user information.
 *
 * @param {string} firstName - The user's first name.
 * @param {string} lastName - The user's last name.
 * @returns {Promise<Object>} A promise that resolves with an object containing user information.
 */
export default function signUpUser(firstName, lastName) {
    return new Promise((resolve) => {
        // Create and resolve the object with the given firstName and lastName
        resolve({ firstName, lastName });
    });
}
