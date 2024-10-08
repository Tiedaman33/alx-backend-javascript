/**
 * Class representing a Holberton course.
 */
export default class HolbertonCourse {
  /**
   * Create a new course.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {string[]} students - The list of students enrolled in the course.
   * @throws {TypeError} If any of the parameters have an incorrect type.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
