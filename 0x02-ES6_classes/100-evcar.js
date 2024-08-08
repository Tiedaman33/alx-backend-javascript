import Car from './10-car';

/**
 * Class representing an electric vehicle.
 */
export default class EVCar extends Car {
  /**
   * Create an EVCar.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor of the car.
   * @param {string} color - The color of the car.
   * @param {string} range - The range of the EV car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = value;
  }

  /**
   * Clone the current EVCar instance and return a Car instance.
   * @returns {Car} - A new Car instance.
   */
  cloneCar() {
    const clonedCar = new Car(this._brand, this._motor, this._color);
    return clonedCar;
  }
}
