import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=100x100`} />
    <h2 className='monster-name'> {props.monster.name} </h2> 
    <p className='monster-email'> {props.monster.email} </p>
  </div>
)