export class App {

  /**
   * Test function
   * @return {string} Test string
   */
  hello () {
    return this.giveMeAString();
  }

  /**
   * [giveMeAString description]
   * @return {[type]} [description]
   */
  static giveMeAString () {
    return 'Hello';
  }
}
