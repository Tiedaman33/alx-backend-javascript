// Define a symbol for cloning
const cloneSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  [cloneSymbol]() {
    return Object.create(Object.getPrototypeOf(this), {
      _brand: { value: this._brand },
      _motor: { value: this._motor },
      _color: { value: this._color },
    });
  }

  // Public method to access the cloning functionality
  cloneCar() {
    return this[cloneSymbol]();
  }
}
