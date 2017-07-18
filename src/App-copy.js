import React, { Component } from 'react';
import Hello from './Hello';

class Uhyuh extends Component {
  render() {
    const nums = [1, 2, 3, 4, 5, 6]
    const listItems = nums.map((number) =>
      <li>{number}</li>
    );
    return (
      <div className="uhyuh">
        <ul>{listItems}</ul>
        <Hello />
      </div>
    );
  }
}

export default Uhyuh;
