import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);// Initialize Car attributes
    this._range = range;
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    const clonedCar = super.cloneCar();
    // Ensure clonedCar is an instance of Car
    clonedCar._brand = this._brand;
    clonedCar._motor = this._motor;
    clonedCar._color = this._color;
    return clonedCar;
  }
}
