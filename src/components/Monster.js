import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import monster from '../img/monster.png';

class Monster extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>Monster Energy Drink!</h1>
          <h2> Enjoy your 140mg of Caffeine! (;</h2>
          <Link to="/">GO BACK</Link>
        </Message>
        <img src={monster} />
      </div>
    )
  }
}

export default Monster;