/**
 * Abstract class representing a building.
 *
 * Attributes:
 * - sqft (Number): The square footage of the building.
 *
 * Methods:
 * - evacuationWarningMessage: Must be implemented by subclasses.
 */
export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate abstract class Building directly');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    this._sqft = value;
  }

  /**
   * Method to be implemented by subclasses.
   * @throws {Error} If not implemented by subclass.
   */
  static evacuationWarningMessage() {
    return 'This is an abstract method and should be overridden by subclasses.';
  }
}
