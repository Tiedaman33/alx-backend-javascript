/**
 * Handles the response from a given Promise.
 *
 * @param {Promise} promise - The promise to handle.
 * @returns {Promise<Object|Error>} A promise that resolves with an object or rejects with an Error object.
 */
export default function handleResponseFromAPI(promise) {
    return promise
        .then(() => {
            console.log("Got a response from the API");
            return {
                status: 200,
                body: "success"
            };
        })
        .catch(() => {
            console.log("Got a response from the API");
            return new Error();
        });
}
