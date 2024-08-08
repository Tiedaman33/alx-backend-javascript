/**
 * Class representing a Holberton class.
 *
 * Attributes:
 * - size (Number): The size of the class.
 * - location (String): The location of the class.
 *
 * Methods:
 * - valueOf(): Returns the size when cast to a Number.
 * - toString(): Returns the location when cast to a String.
 */
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = value;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
