/**
 * Class representing an airport.
 *
 * Attributes:
 * - name (String): The name of the airport.
 * - code (String): The airport code.
 *
 * Methods:
 * - toString(): Returns a string description of the airport code.
 */
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
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

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  [Symbol.toStringTag]() {
    return `Airport [${this._code}]`;
  }
}
