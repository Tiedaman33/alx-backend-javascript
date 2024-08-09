export default function iterateThroughObject(reportWithIterator) {
  // Initialize an array to collect employee names
  const employees = [];

  // Iterate over the iterator and push each item to the array
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the array into a single string with '|' as separator
  return employees.join(' | ');
}
