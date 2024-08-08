import Currency from './3-currency';

/**
 * Class representing a pricing structure.
 *
 * Attributes:
 * - amount (Number): The amount of money.
 * - currency (Currency): The currency of the amount.
 *
 * Methods:
 * - displayFullPrice(): Returns the price in the format "amount currency_name (currency_code)".
 * - convertPrice(amount, conversionRate):
 *   Static method to convert the amount based on the conversion rate.
 */
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
