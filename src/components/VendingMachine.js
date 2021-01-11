import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import vending from '../img/vending.jpg';

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>Hello! I Am A Vending Machine. What Would You Like To Eat?</h1>
        </Message>
        <img src={vending} />
        <Message>
          <Link to='/hot_cheetos'>Hot Cheetos</Link>
          <Link to='/monster'>Monster Energy Drink</Link>
          <Link to='/protein_bites'>Protein Donut Bites</Link>
        </Message>
      </div>
    )
  }
}

export default VendingMachine;