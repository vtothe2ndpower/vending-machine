import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import protein from '../img/protein.png';

class ProteinBites extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>Protein Bites! Component</h1>
          <h2>Enjoy Your 20 grams of Protein! (;</h2>
          <Link to="/">GO BACK</Link>
        </Message>
        <img src={protein} />
      </div>
    )
  }
}

export default ProteinBites;
