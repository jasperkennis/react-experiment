'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: 'hello',


    /**
     * Test function
     * @return {string} Test string
     */
    value: function hello() {
      return this.giveMeAString();
    }

    /**
     * [giveMeAString description]
     * @return {[type]} [description]
     */

  }], [{
    key: 'giveMeAString',
    value: function giveMeAString() {
      return 'Hello';
    }
  }]);

  return App;
}();

var a = new App();

a.hello();