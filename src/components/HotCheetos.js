import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import cheetos from '../img/cheetos.png';

class HotCheetos extends Component {
  render() {
    return (
      <div>
        <Message>
        <h1>Hot Cheetos!</h1>
        <h2>Enjoy Your Hot Cheeto Fingers! (;</h2>
        <Link to="/">GO BACK</Link>
        </Message>
        <img src={cheetos} />
      </div>
    )
  }
}

export default HotCheetos;