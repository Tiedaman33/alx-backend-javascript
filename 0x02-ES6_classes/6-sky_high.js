import Building from './5-building';

/**
 * Class representing a sky-high building.
 *
 * Attributes:
 * - sqft (Number): The square footage of the building.
 * - floors (Number): The number of floors in the building.
 *
 * Methods:
 * - evacuationWarningMessage(): Returns a message to evacuate slowly with the number of floors.
 */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
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

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
