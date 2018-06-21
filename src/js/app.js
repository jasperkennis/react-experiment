import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
  render () {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

const a = new App();

a.hello();
