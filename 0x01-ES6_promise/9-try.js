/**
 * Executes a given math function and handles its result or error.
 *
 * @param {Function} mathFunction - The function to be executed.
 * @returns {Array} An array containing the result or error message, and a final message.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  }

  queue.push('Guardrail was processed');

  return queue;
}
