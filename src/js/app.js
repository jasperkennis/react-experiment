import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {

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

const a = new App();

a.hello();
