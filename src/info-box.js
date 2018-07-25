'use strict';

import React from 'react';

export default function InfoBox(props) {
  const heroes = props.heroes.map((hero, index) =>
        <li key={index}>
            <div className="hName">Hero Name: {hero.name}</div> 
            <div className="hRole">role: {hero.role}</div> 
            <div className="hAbilities">Main Abilities: {hero.abilities}</div>
        </li>
    );
  
  if(props.heroes.length > 1) {
    return (
      <div className="chooseHero">Choose your hero!</div>
    );
  } else {
    return (
      <div className="infoBox">
        <ul>{heroes}</ul>
      </div>
    );
  }
}