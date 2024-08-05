export default function createIteratorObject(report) {
  // Define a generator function
  function* employeeGenerator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  // Return an iterator from the generator function
  return employeeGenerator();
}

